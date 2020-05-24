import React from 'react';
import "../style/Contact.css";
import contactPic from '../assets/contact-pic.jpg'

export default class Contact extends React.Component {
    render() {
        return (

            <section id="contact" className="section-contact">
                <span className="contact-title"> Contact </span>
                <span className="contact-desc">
                <i className="fa fa-envelope "></i>  	&ensp;  <span className="contact-link"> ludivine.achouri@orange.fr<br /></span> 
                <a target="_blank" href="https://www.linkedin.com/in/ludivine-achouri/">   <i className="fab fa-linkedin"></i>  </a> 	&ensp; <span className="contact-link">  Don't hesitate to contact me on Linkedin <br /></span> 
                <a target="_blank" href="https://github.com/Lachouri?tab=overview&from=2020-03-01&to=2020-03-31"><i className="fa fa-github"></i></a>&ensp;<span className="contact-link"> Take a look at my github<br /></span> 
                </span>


                <span className="contact-img"><img src={contactPic}></img> </span>

            </section>

        )
    }
}
