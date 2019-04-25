import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Work extends Component {
    state = {
        projects: [
            {
                id: '0',
                title: 'Dynastea',
                subtitle: 'The Dynastea Of Tea',
                image: './images/dynasteaHeader.jpg',
                url: 'https://stud.hosted.hr.nl/0947037/Dynastea-tea/',
                description: 'Dynastea is een organische/ milieubewuste thee & spice bar, met een gezellige sfeer en authentieke uitstraling.',
                assignment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum lacus eget diam aliquet, eget bibendum ligula vulputate. Pellentesque tristique ultrices finibus. Morbi et ornare dui, eget faucibus turpis. Duis dictum, enim in viverra ullamcorper, massa risus eleifend dui, ut sollicitudin purus quam non quam. In hac habitasse platea dictumst. Aliquam non nunc id magna dapibus fermentum. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi aliquet dui accumsan purus porta viverra. Sed a vestibulum nisi.\n' +
                    '\n\n' +
                    'Cras rhoncus urna laoreet massa tristique, et aliquet nisl faucibus. Vestibulum luctus lorem magna, non placerat ante molestie ac. In eget tincidunt ipsum. Sed risus ex, tincidunt eu massa quis, euismod consequat metus. In rhoncus dui lorem, ac tempus nibh posuere id. Etiam pellentesque enim tortor, nec consectetur ipsum pretium quis. Maecenas leo justo, faucibus eu tincidunt faucibus, pulvinar eu ligula. Maecenas vitae turpis porta, sollicitudin mi in, vestibulum arcu. Fusce a tempor odio.'
            },
            {id: '1', title: 'Mintte Fashion', subtitle: '', image: '', url: '', description: ''},
            {id: '2', title: '', subtitle: '', image: '', url: '', description: ''},
            {id: '3', title: '', subtitle: '', image: '', url: '', description: ''},
        ],
        height: '90vh',
        show: false,
        activeProject: false
    };
    updateRef = () => {
        let position = this.sectionRef.offsetTop - 15;
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
                             className="projectHeader">
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
                    <div className="projectHeader" style={projectHeader}>
                        <div>
                            <h2>{project[id].title}</h2>
                            <h4>{project[id].subtitle}</h4>
                        </div>
                    </div>
                    <div className="projectContent">
                        <h2>{project[id].description}</h2>
                        <a className="yellowText" href={project[id].url} rel="noopener noreferrer" target="_blank">Bekijk live</a>
                        <br/>
                        <br/>
                        <p>{project[id].assignment}</p>
                    </div>

                </div>

            )
        }

    }

    closeProject = () => {
            this.setState(this.setState(
                {
                    show:false,
                    height: '90vh'
                }))
    };

    handleOnClick(id) {
        this.setState({
            show: true,
            activeProject: id,
            height: '40vh'
        })
    }
}

export default Work;
