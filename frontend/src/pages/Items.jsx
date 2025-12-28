import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../features/items/itemsSlice';

// Demo: Lazy Loading a component
const ItemCard = lazy(() => import('../components/ItemCard'));

const Items = () => {
    const dispatch = useDispatch();
    const { list, pagination, loading } = useSelector((state) => state.items);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchItems({ page, limit: 5 }));
    }, [dispatch, page]);

    const loadMore = () => {
        if (page < pagination.totalPages) {
            setPage(prev => prev + 1);
        }
    };

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Item List (Lazy Load & Pagination)</h1>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {list.map((item) => (
                    <Suspense key={item.id} fallback={<div className="card">Loading item...</div>}>
                        <ItemCard item={item} />
                    </Suspense>
                ))}
            </div>

            {page < pagination.totalPages && (
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button className="btn" onClick={loadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Items;
