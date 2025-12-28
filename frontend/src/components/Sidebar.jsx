import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, List, Activity, Zap, Moon, Sun } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
    const { theme, toggleTheme } = useAppContext();

    return (
        <div className="sidebar">
            <h2 style={{ marginBottom: '2rem' }}>ReactDash</h2>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <LayoutDashboard size={20} style={{ marginRight: '10px' }} /> Dashboard
            </NavLink>
            <NavLink to="/items" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <List size={20} style={{ marginRight: '10px' }} /> Item List
            </NavLink>
            <NavLink to="/hooks" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <Zap size={20} style={{ marginRight: '10px' }} /> Hooks Demo
            </NavLink>
            <NavLink to="/lifecycle" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <Activity size={20} style={{ marginRight: '10px' }} /> Lifecycle Demo
            </NavLink>
            <div style={{ marginTop: 'auto' }}>
                <button className="btn" onClick={toggleTheme} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
