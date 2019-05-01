import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import projectData from '../data/projects.json';

class Work extends Component {
    state = {
        p:projectData,
        projects: projectData,
        height: '90vh',
        show: false,
        activeProject: false
    };
    updateRef = () => {
        let position = this.sectionRef.offsetTop;
        this.props.getRef(position);
    };

    componentDidMount() {
        this.updateRef();
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
                            project</a>
                        <p>
                            {project[id].assignment}
                            <img alt="mockup1" src={require('../images/' + project[id].mockupImages[0])}/>
                        </p>

                        <p>
                            {project[id].idea}
                            <img alt="mockup2" src={require('../images/' + project[id].mockupImages[1])}/>
                        </p>
                        <p>
                            <b>Hoe werkt het?</b>
                            {project[id].technicality}
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
