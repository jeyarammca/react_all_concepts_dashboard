import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Initial State',
            timer: 0
        };
        console.log('1. Constructor: Initializing...');
    }

    componentDidMount() {
        console.log('3. componentDidMount: API calls or timers usually go here');
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }));
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.timer !== this.state.timer) {
            console.log('4. componentDidUpdate: State changed to', this.state.timer);
        }
    }

    componentWillUnmount() {
        console.log('5. componentWillUnmount: Cleanup logic here');
        clearInterval(this.interval);
    }

    render() {
        console.log('2. Render: Building UI...');
        return (
            <div>
                <h1 style={{ marginBottom: '2rem' }}>Class Component Lifecycle</h1>
                <div className="card">
                    <h3>Lifecycle Timer</h3>
                    <p style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--primary)' }}>{this.state.timer}s</p>
                    <p style={{ color: '#64748b' }}>
                        Check the browser console to see the execution order of lifecycle methods:
                        <br />1. constructor()
                        <br />2. render()
                        <br />3. componentDidMount()
                        <br />4. componentDidUpdate()
                    </p>
                </div>
            </div>
        );
    }
}

export default LifecycleDemo;
