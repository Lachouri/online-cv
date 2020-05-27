import React from 'react';
import "../style/About.css";
import pdf from '../assets/CV-ACHOURI-Ludivine.pdf'
import md from '../assets/CV-ACHOURI-Ludivine.md'

import profilePic from '../assets/profile-pic.jpg'


export default class About extends React.Component {
    render() {
        return (
            <section id="about" className="section-about">
                <div className="about-profile-picture">
                    <img src={profilePic} />

                </div>


                <div className="about-profile-description-box">
                    <span className="about-profile-title"> A little bit about me</span>

                    <div className="about-profile-text">
                        <p>Born and raised in the South West of France, I used to love going to the beach every summer. I adore video games and reading books. <br /><br />

                        When I was fifteen we had to create a website in technology classes. I would work on it for hours.  A real passion for web development had begun.  <br /><br />
Even though I've always been passionate about literature, I knew this would be my job one day. Thanks to my studies, I learned to work in groups and to listen. The front end turned out to be my favorite part.<br /><br />


In the meantime, I was learning Javascript and became interested in React. I learned it on my own initiative. I like to discover new things and build projects from scratch. It helps me to develop my creativity and my ability to analyse problems and solve them.
<br /><br />
In addition to my personal projects, I watch a lot of training videos to improve my general skills. I challenge myself to learn new things every day and to nourish my curiosity.

</p>
                        <span className="about-profile-resume"> Download my resume</span><br />

                        <div className="download-box">
                            <a href={pdf} download="CV-ACHOURI-Ludivine.pdf" className="button5" style={{ backgroundColor: "#BFC0C0" }}><i className="fa fa-download"></i></a>
                            <a href={md} download="CV-ACHOURI-Ludivine.md" className="button5" style={{ backgroundColor: "#BFC0C0" }}><i className="fab fa-markdown"></i></a>
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}
