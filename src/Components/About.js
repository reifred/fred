import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var country = this.props.data.address.country;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="four columns">
            <img className="profile-pic"  src={profilepic} alt="Mugerwa Fred" />
         </div>
         <div className="eight columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}<br />
						         {country}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <h2>Skills</h2>
                 <ul className="tags">
                     <li><a href="#html" className="tag">HTML</a></li>
                     <li><a href="#javascript" className="tag">JavaScript</a></li>
                     <li><a href="#javascript" className="tag">React</a></li>
                     <li><a href="#javascript" className="tag">JQuery</a></li>
                     <li><a href="#html" className="tag">Python</a></li>
                     <li><a href="#html" className="tag">Flask</a></li>
                     <li><a href="#html" className="tag">Django</a></li>
                     <li><a href="#css" className="tag">PHP</a></li>
                     <li><a href="#css" className="tag">Lumen</a></li>
                     <li><a href="#css" className="tag">Laravel</a></li>
                     <li><a href="#html" className="tag">Git workflow</a></li>
                     <li><a href="#css" className="tag">CSS</a></li>
                     <li><a href="#javascript" className="tag">Agile workflow</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
