import React, {Component} from 'react';
import headerImage from '../images/headerIllustration.svg';

class About extends Component {
    render() {
        return (
            <div className="header" ref="innerHeader">
                <img className="headerImage center"  src={headerImage} alt="Header Image"/>
            </div>
        );
    }
}

export default About;
