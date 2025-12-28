import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../features/dashboard/dashboardSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { stats, loading } = useSelector((state) => state.dashboard);

    useEffect(() => {
        // Demo: Multiple API calls simulation
        dispatch(fetchStats());
        // In a real app, you might call other endpoints here
    }, [dispatch]);

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Dashboard Overview</h1>
            <div className="stats-grid">
                <div className="card">
                    <h3>Total Items</h3>
                    <p style={{ fontSize: '2rem', color: 'var(--primary)' }}>{stats.total}</p>
                </div>
                <div className="card">
                    <h3>Active Items</h3>
                    <p style={{ fontSize: '2rem', color: '#10b981' }}>{stats.active}</p>
                </div>
                <div className="card">
                    <h3>Completed</h3>
                    <p style={{ fontSize: '2rem', color: '#6366f1' }}>{stats.completed}</p>
                </div>
            </div>

            <div className="card glass-card">
                <h3>Quick Actions</h3>
                <p style={{ marginTop: '1rem', color: '#64748b' }}>
                    Welcome to your advanced React dashboard. This page demonstrates Redux state management and asynchronous API calls using Redux Toolkit Thunks.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
