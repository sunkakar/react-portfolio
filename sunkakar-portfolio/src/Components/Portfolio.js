import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return (

        <div key={projects.title}>
           <div className="three columns header-col">
                <h1><a href={projects.url}>{projects.title}</a></h1>
            </div>
            <p>{projects.category}</p>
           <div className="item-wrap">
            {/* <a href={projects.url}>
               <img alt={projects.title} src={projectImage} />
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a> */}
          </div>
          <br/>
        </div>
        
        )
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

         <div className="twelve columns main-col">
          {projects}
        </div>            
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
