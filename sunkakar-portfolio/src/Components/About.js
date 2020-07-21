import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/SundeepKakar.jpg";
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Sundeep Kakar Profile Pic" />
         </div>
         <div className="nine columns main-col">
         <Fade bottom delay={500}>
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Sundeep Kakar</span><br />
						   <span>Indianapolis<br />
						         IN, 46202
                   </span><br />
                   <span>📧 sundeepkakar@gmail.com</span><br />
                     <span>📧 skakar@iu.edu</span>

					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </Fade>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
