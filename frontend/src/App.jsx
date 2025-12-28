import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import HooksDemo from './pages/HooksDemo';
import LifecycleDemo from './pages/LifecycleDemo';
import './index.css';

function App() {
    return (
        <Provider store={store}>
            <AppProvider>
                <Router>
                    <div className="app-container">
                        <Sidebar />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/items" element={<Items />} />
                                <Route path="/hooks" element={<HooksDemo />} />
                                <Route path="/lifecycle" element={<LifecycleDemo />} />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </AppProvider>
        </Provider>
    );
}

export default App;
