import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img className="img-responsive" alt={projects.title} src={projectImage} />
            </a>
          </div>
          <div className="row-flex">
            <div className="col">
              {
                projects.backend === "#private"
                ? <h6>Backend</h6>
                : <a href={projects.backend}>Backend</a>
              }
            </div>
            <div className="col">
              {
                projects.frontend === "#private"
                ? <h6>Frontend</h6>
                : <a href={projects.frontend}>Frontend</a>
              }
            </div>
            <div className="col">
              {
                projects.site_url === "#private"
                ? <h6>Not hosted</h6>
                : <a href={projects.site_url}>App</a>
              }
            </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
