import React, {Component} from 'react';
import {library, icon} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
            childRefs: [0, ],
            class:'navbar navbar-expand-lg middle'
        }
    }


    render() {
        return (
            <div className="App">
                <NavBar getClass={this.state.class} />
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
        let mousePosition = window.pageYOffset;

        if (mousePosition >= heights[0] && mousePosition < heights[1] ){
            navClass += "middle";
        }else if(mousePosition > heights[2] && mousePosition < heights[3]){
            navClass += "left"
        }else {
            navClass += "right"
        }

        this.setState({class:navClass});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll)
    }
}

export default App;
