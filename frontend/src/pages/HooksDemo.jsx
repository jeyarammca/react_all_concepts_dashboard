import React, { useState, useEffect, useMemo, useCallback } from 'react';

const HooksDemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // useMemo demo
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating square...');
        return count * count;
    }, [count]);

    // useCallback demo
    const handleInc = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    useEffect(() => {
        console.log('useEffect: Component mounted or count changed');
        return () => console.log('useEffect cleanup');
    }, [count]);

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>React Hooks Demo</h1>
            <div className="stats-grid">
                <div className="card">
                    <h3>useState & useCallback</h3>
                    <p style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</p>
                    <button className="btn" onClick={handleInc}>Increment</button>
                </div>
                <div className="card">
                    <h3>useMemo</h3>
                    <p>Square of {count} is:</p>
                    <p style={{ fontSize: '2rem', color: 'var(--primary)' }}>{expensiveCalculation}</p>
                </div>
            </div>

            <div className="card" style={{ marginTop: '2rem' }}>
                <h3>useEffect Demo</h3>
                <input
                    type="text"
                    placeholder="Type something..."
                    className="card"
                    style={{ width: '100%', marginTop: '1rem', padding: '0.75rem' }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <p style={{ marginTop: '1rem' }}>Open console to see effect logs.</p>
            </div>
        </div>
    );
};

export default HooksDemo;
