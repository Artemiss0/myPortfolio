import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faBehance} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import NavBar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';
import './App.css';

library.add(faChevronDown);
library.add(faTimes);
library.add(faLinkedinIn);
library.add(faBehance);
library.add(faGithub);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            childRefs: [0,],
            class: 'navbar navbar-expand-lg middle'
        }
    }


    render() {
        return (
            <div className="App">
                <NavBar getClass={this.state.class}/>
                <Header/>
                <main>
                    <About getRef={this.getRef}/>
                    <Work getRef={this.getRef}/>
                    <Contact getRef={this.getRef}/>
                </main>
            </div>
        );
    }

    getRef = (offsetTop) => {
        this.state.childRefs.push(offsetTop)
    };

    handleScroll = () => {
        let navClass = "navbar navbar-expand-lg ";
        let heights = this.state.childRefs;
        let windowPosition = window.innerHeight + window.pageYOffset;
        if (window.innerWidth < 800){
            navClass += "middle";
        } else {
        if (windowPosition > heights[1] && windowPosition < heights[2]){
            navClass += "right"
        }else if(windowPosition > heights[2] && windowPosition < heights[3]){
            navClass += "left"
        }else if (windowPosition > heights[3]){
            navClass += "right"
        }else{
            navClass += "middle"
        }}

        this.setState({class: navClass});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll)
    }
}

export default App;
