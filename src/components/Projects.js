import React from 'react';
import "../style/Projects.css";



export default class Projects extends React.Component {
    render() {
        return (
            <section id="projects" className="section-projects">
                <span className="projects-title"> Projects</span>

                <span className="projects-category1"><a href="#"> <i className="fas fa-toolbox"></i></a> <br /> <span className="title">Toolbox </span><br /> <p className="techno-desc">This toolbox allows to parse or Stringify JSON, encode/decode Base64 and provides a Javascript live playground</p></span>
                <span className="projects-category2"><a href="#"><i className="fas fa-virus"></i></a> <br /><span className="title"> Le Covid Déchainé </span><br /> <p className="techno-desc"> "Le Covid Déchaîné" is a parody of a French satyric newspaper "Le Canard enchaîné". This school project required the creation of a website gathering various articles related to economy, law and management in France, following the arrival of the "Coronavirus". I realized it alone from A to Z and I am very proud of it. </p> </span>
                <span className="projects-category3"><a href="#"> <i className="fas fa-fish"></i></a><br /><span className="title">Animal Crossing Hunter</span><br /> <p className="techno-desc"> I was looking for a tool that would allow me to optimize my daily tasks. Since I was not satisfied with what I found, I decided to create my own application. It was a great challenge. </p></span>
                <span className="projects-category4"><a href="#"><i className="fas fa-dice"></i></a>  <br /><span className="title">Random Challenge Generator</span> <br /> <p className="techno-desc"> During the containment of 2020, I made this challenge generator, to make the most of the time I was given. Every day, I challenge myself to learn something new.  </p></span>
                <span className="projects-category5"><a target="_blank" href="http://www.thefrogrunners.com/#"><i className="fas fa-music"></i></a> <br /><span className="title">The Frog Runners </span><br /> <p className="techno-desc">During my internship, I created a showcase website for the French rock band "The Frog Runners". This site was my first big project. I took care of the front, the back and I also managed the hosting of the site. I always offer maintenance from the owner.  </p></span>
                <span className="projects-category6"><a href="#"><i className="fas fa-bomb"></i></a> <br /><span className="title">Keep Talking and Nobody Explodes Remastered </span><br /> <p className="techno-desc">A school project was to make some modules of the game "Keep Talking and Nobody explodes".
I decided to create them in Javascript in order to learn more about this language.  </p></span>




            </section>

        )
    }
}
