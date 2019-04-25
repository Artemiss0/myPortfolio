import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import contactHeader from '../images/postduifIllustration.png';
import cv from '../documents/CV_NienkeOvermeer_NL.pdf'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {icon: 'linkedin-in', url: 'https://nl.linkedin.com/in/nienke-overmeer-352900106'},
                {icon: 'behance', url: 'https://www.behance.net/NienkeOvermeer'},
                {icon: 'github', url: 'https://github.com/Artemiss0'}
            ],
            test: "test"
        };
    }

    updatePosition = () => {
        let position = this.sectionRef.offsetTop;
        this.props.getRef(position);
    };

    componentDidMount() {
        this.updatePosition()
    }

    render() {
        return (
            <section id="contact" ref={element => this.sectionRef = element}>
                <div className="scroll">
                    <div className="container">
                        <h2>Let's Connect
                        </h2>
                        <br/>
                        <p>
                            Zou je contact met mij willen opnemen? Dan kun je dit doen via social media of door een mailtje te sturen.
                        </p>
                        <p>
                            Op het moment ben ik op zoek naar een stage waarbij ik mijzelf zou kunnen ontwikkelen op het
                            gebied van front-end. Tijdens mijn stage wil ik mijn React skills verbeteren en meer leren
                            op
                            het gebied van animatie, UI en UX design in webapplicaties.
                        </p>
                        <h5>Nienke Overmeer</h5>
                        <p>
                            CMGT Student & Interactive Media Designer
                            <br/>
                            nm.overmeer@gmail.com
                            <br/>
                            +316 373 46 383
                        </p>
                        <p className="yellowText">
                            Download mijn CV hier
                            <a href={cv} download={cv} className="button"><FontAwesomeIcon icon="chevron-down"/>
                            </a>
                        </p>
                        {this.renderButton()}
                    </div>
                </div>

                <div className="sticky">
                    <img className="stickyImage center" src={contactHeader}/>
                </div>
            </section>
        );
    }

    renderButton() {
        if (this.state.buttons.length === 0)
            return <p>There are no buttons</p>;
        else
            return this.state.buttons.map(button =>
                <a className="socialMediaButton" href={button.url} rel="noopener noreferrer" target="_blank"
                   key={button.icon}>
                    <FontAwesomeIcon icon={['fab', button.icon]}/>
                </a>
            )

    }


}

export default Contact;
