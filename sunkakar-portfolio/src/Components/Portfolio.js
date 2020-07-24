import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

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
          <br/>
        </div>
        
        )
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work!</h1>

        <Fade bottom cascade>
         <div className="twelve columns main-col">
          {projects}
        </div>        
        </Fade>     
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
