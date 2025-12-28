import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h4 style={{ color: 'var(--primary)' }}>{item.name}</h4>
                <small style={{ color: '#64748b' }}>{item.category}</small>
            </div>
            <span style={{
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                background: item.status === 'Active' ? '#d1fae5' : '#fef3c7',
                color: item.status === 'Active' ? '#065f46' : '#92400e'
            }}>
                {item.status}
            </span>
        </div>
    );
};

export default ItemCard;
