import React, { Component } from 'react';

class Contact extends Component {
   render() {

   if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
   }
   if(this.props.repos){
      var projectRepos = this.props.repos.projects.map(function(projects) {
         return (
            <li key={projects.title}>
               <span>
                  <a href={projects.repo} target="_blank">{projects.shorttitle}</a>
               </span>
            </li>
         )
      })
   }
   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch!</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>
                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				</form>
         <div id="message-warning"> Error</div>
				<div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				</div>
         </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					<h4>Contact Information and Location</h4>
					<p className="address">
						{name}<br />
						<span>{phone}</span><br />
                     <span>{email}</span><br />
                     {city}, {state} (Willing to relocate!)<br />
					</p>
				</div>
               <div className="widget widget_tweets">
                  <h4 className="widget-title">Project Repos</h4>
                  <ul id="twitter">
                     {projectRepos}
                  </ul>
		      </div>
            </aside>
      </div>
   </section>
   );
}
}

export default Contact;