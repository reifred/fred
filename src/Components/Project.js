import React from 'react';

class Project extends React.Component {
    state = {
        projectData: {},
        projectImage: ''
    }
    
    componentDidMount() {
        const { projectData, projectImage } = this.props.location.state;
        this.setState({
            projectData,
            projectImage
        })
    }

    render(){
        const { projectData, projectImage } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="bg-light">{projectData.title}</div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={projectImage} alt={projectData.title} />
                    </div>
                    <div className="col-md-6">
                      <p>{projectData.category}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
