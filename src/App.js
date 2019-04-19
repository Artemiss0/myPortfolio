import React, {Component} from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Header/>
                <main>
                    <About/>
                </main>
            </div>
        );
    }
}

export default App;
