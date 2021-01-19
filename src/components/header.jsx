import React, {Component} from 'react';
import headerImage from '../images/headerIllustration.jpg';

class About extends Component {
    render() {
        return (
            <div className="header" ref="innerHeader">
                <img className="headerImage center"  src={headerImage} alt="zelf illustratie"/>
            </div>
        );
    }
}

export default About;
