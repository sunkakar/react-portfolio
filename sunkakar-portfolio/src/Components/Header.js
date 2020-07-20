import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text" data-reveal-delay="800">

         <Fade bottom>
            <h1 className="responsive-headline">Hello! <br/>I'm Sunny.</h1>
            <h3 style={{
               color: 'white',
               //width: '80%',
               fontWeight: '900',
               //backgroundColor: '#444',
               //opacity: 0.85,
               borderRadius: 20,
               padding: 10,
               //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
            > 
               I'm a Computer Science Major and Business & Math Minor based in Indianapolis
            </h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
            </Fade>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
