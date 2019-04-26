import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Work extends Component {
    state = {
        projects: [
            {
                id: '0',
                title: 'Dynastea',
                subtitle: 'The Dynastea Of Tea',
                url: 'https://stud.hosted.hr.nl/0947037/Dynastea-tea/',
                description: 'Eenvoudig klanten reserveringen laten maken, bij Dynastea, via een boekingssysteem ',
                assignment: 'Ik heb de uitdaging gekregen om een webapplicatie te voorzien van een boekings/ reserverings systeem te maken. Voor de opdracht moest ik ook zelf aan de slag om ' +
                    'een opdrachtgever te vinden, voor wie ik het web-reserveringssysteem kon ontwerpen. Voor het gehele proces, het ontwerpen en programmeren van de website, hadden we 8 weken de tijd.' +
                    '\n\n ' +
                    'Ik heb een webapplicatie ontwikkelt waarbij de gebruiker eerst kan checken op beschikbaarheid d.m.v. tijd & datum. Als de datum beschikbaar is kunnen zij vervolgens verder een naam ' +
                    'en telefoonnummer of email invoeren om de reservervatie compleet te maken \n\n',
                mockupImages: ['dynasteaMockupBookingSystem.png', 'dynasteaMockupWebdesign.jpg'],
                technicality: '\n Ik heb de front-end van de website opgezet met Materialize. De voorkant van de website communiceert met een php back-end waar alle data word opgehaald en alle logica word gedaan' +
                    'b.p.t. het boekingssysteem. Alle informatie word vervolgens opgehaald en/of opgeslagen in een MySQL database server. \n\n'
            },
            {
                id: '1',
                title: 'WeCreate',
                subtitle: 'Join.Create.Share',
                url: '',
                description: 'Een online platvorm waar mensen hun werk kunnen laten zien en creatief werk kunnen ontdekken  ',
                assignment: 'Ik heb de uitdaging gekregen om een webapplicatie te voorzien van een boekings/ reserverings systeem te maken. Voor de opdracht moest ik ook zelf aan de slag om ' +
                    'een opdrachtgever te vinden, voor wie ik het web-reserveringssysteem kon ontwerpen. Voor het gehele proces, het ontwerpen en programmeren van de website, hadden we 8 weken de tijd.' +
                    '\n\n ' +
                    'Ik heb een webapplicatie ontwikkelt waarbij de gebruiker eerst kan checken op beschikbaarheid d.m.v. tijd & datum. Als de datum beschikbaar is kunnen zij vervolgens verder een naam ' +
                    'en telefoonnummer of email invoeren om de reservervatie compleet te maken \n\n',
                mockupImages: ['wecreateMockup1.jpg', 'wecreateMockup2.jpg'],
                technicality: '\n Ik heb de front-end van de website opgezet met Materialize. De voorkant van de website communiceert met een php back-end waar alle data word opgehaald en alle logica word gedaan' +
                    'b.p.t. het boekingssysteem. Alle informatie word vervolgens opgehaald en/of opgeslagen in een MySQL database server. \n\n'
            },
            {
                id: '2',
                title: 'Het Kegelhonk',
                subtitle: '',
                url: '',
                description: '',
                assignment: '',
                mockupImages: ['hetKegelhonkMockup1.jpg', 'hetKegelhonkMockup2.jpg'],
                technicality: ''
            },
            {id: '3', title: 'Mintte Fashion', subtitle: '', image: '', url: '', description: ''},
        ],
        height: '90vh',
        show: false,
        activeProject: false
    };
    updateRef = () => {
        let position = this.sectionRef.offsetTop;
        this.props.getRef(position);
        console.log("work " + position)
    };

    componentDidMount() {
        this.updateRef()
    }

    render() {
        return (
            <section id="work" ref={element => this.sectionRef = element}>
                <div className="col-6 scroll">
                    {this.renderProjects()}
                </div>
                <div className="col-6 sticky flex">
                    <h2>Work</h2>
                </div>
            </section>
        );
    }

    renderProjects() {
        let projectHeader = {
            height: this.state.height,
        };
        if (this.state.show === false) {
            return (
                <div className="projects">
                    {this.state.projects.map((project) =>
                        <div key={project.id} style={projectHeader} onClick={() => this.handleOnClick(project.id)}
                             className={project.title + " projectHeader"}>
                            <div>
                                <h2>{project.title}</h2>
                                <h4>{project.subtitle}</h4>
                            </div>
                        </div>
                    )}
                </div>
            )
        } else {
            let id = this.state.activeProject;
            let project = this.state.projects;
            return (
                <div className="projects">
                    <button className="backButton" onClick={this.closeProject}><FontAwesomeIcon icon="times"/></button>
                    <div className={project[id].title + " projectHeader"} style={projectHeader}>
                        <div>
                            <h2>{project[id].title}</h2>
                            <h4>{project[id].subtitle}</h4>
                        </div>
                    </div>
                    <div className="projectContent">
                        <h2>{project[id].description}</h2>
                        <a className="liveButton" href={project[id].url} rel="noopener noreferrer" target="_blank">Bekijk
                            live</a>
                        <br/><br/>
                        <p>
                            {project[id].assignment}
                            <img alt="mockup1" src={require('../images/' + project[id].mockupImages[0])}/>
                        </p>

                        <p>
                            <b>Hoe werkt het?</b>
                            {project[id].technicality}
                            <img alt="mockup2" src={require('../images/' + project[id].mockupImages[1])}/>
                        </p>
                    </div>

                </div>

            )
        }

    }

    closeProject = () => {
        this.setState(this.setState(
            {
                show: false,
                height: '90vh'
            }))
    };

    handleOnClick(id) {
        this.setState({
            show: true,
            activeProject: id,
            height: '40vh'
        });
    }
}

export default Work;
