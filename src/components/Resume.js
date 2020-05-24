import React from 'react';
import "../style/Resume.css";


export default class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="section-resume">
                <div className="school">
                    <span className="school-title">Education</span>
                    <div className="school-category">
                        <p>  <span className="resume-category-title"><b> BTEC HND in IT <br /> <i>(Option : Development)</i></b> <span className="year">-  2018 to 2020</span> <br></br></span>
                            <span className="resume-category-desc">Guy Mollet High School - Arras</span> <br />
                        </p>
                    </div>
                    <div className="school-category">
                        <p>
                            <span className="resume-category-title"> <b>A-Level in Literature </b><span className="year">- 2015 to 2018</span></span><br />
                            <span className="resume-category-desc">Sud des Landes High School <br /> Saint-Vincent-de-Tyrosse</span> <br />
                        </p>
                    </div>
                    <hr className="divider"></hr>

                </div>
                <div className="work">
                    <span className="work-title">Work</span>
                    <div className="work-category"><p>  <span className="resume-category-title">Internship</span> - January to February 2020 <br /><span className="resume-category-desc"> Creation and hosting of a website for the<br /> french music group <a style={{ color: "white" }} rel="noopener noreferrer" target="_blank" href="http://www.thefrogrunners.com/"><i><u>The Frog Runners</u></i></a></span></p></div>
                    <div className="work-category"><p><span className="resume-category-title">Internship</span> - May to June 2019 <br /> <span className="resume-category-desc">Creation of a website for the<br /> french music group  <a style={{ color: "white" }} target="_blank" rel="noopener noreferrer" href="http://www.thefrogrunners.com/" ><i><u>The Frog Runners</u></i></a></span></p></div>
                    <div className="work-category"><p><span className="resume-category-title">Seasonal job</span> - July to August 2018<br /><span className="resume-category-desc">Cashier - Capbreton</span></p></div>
                    <hr className="divider"></hr>

                </div>
                <div className="formation">
                    <span className="formation-title">Formation</span>
                    <div className="formation-category"><p><span className="resume-category-title">Maîtriser React de A à Z</span> <br /><span className="formation-site">Udemy.com</span> </p></div>
                    <div className="formation-category"><p><span className="resume-category-title">Modern React with Redux</span> <br /> <span className="formation-site">Udemy.com</span></p></div>
                    <div className="formation-category"><p><span className="resume-category-title">JavaScript Alogirhtms and Data Structure</span> <br /> <span className="formation-site">freeCodeCamp.org</span></p></div>
                    <div className="formation-category"><p><span className="resume-category-title">Learn Advanced Javascript </span><br /><span className="formation-site">Udemy.com</span></p></div>
                    <div className="formation-category"><p><span className="resume-category-title">Web Development Masterclass <br /> Complete Certificate Course </span><br /> <span className="formation-site">Udemy.com</span></p></div>

                    <hr className="divider"></hr>

                </div>

                <div className="skills">
                    <span className="skills-title">Skills</span>

                        <div className="skills-category-row1-column1"><p><i className="fab fa-react"></i><br /><span className="title">React</span><br /></p></div>
                        <div className="skills-category-row1-column2"><p><i className="fab fa-html5"></i><br /><span className="title">HTML5</span><br /></p></div>
                        <div className="skills-category-row1-column3"><p><i className="fab fa-css3-alt"></i><br /><span className="title">CSS3</span><br /></p></div>
                        <div className="skills-category-row2-column1"><p ><i className="fab fa-bootstrap"></i><br /><span className="title">Bootstrap</span><br /></p></div>
                        <div className="skills-category-row2-column2"><p><i className="fab fa-js-square"></i><br /><span className="title">Javascript</span><br /></p></div>
                        <div className="skills-category-row2-column3"><p><img className="flutter-logo" src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" /><br /><span className="title">Flutter</span><br /></p></div>

                        <div className="skills-category-row3-column1"><p><i className="fab fa-php"></i><br /><span className="title">PHP</span><br /></p></div>
                        <div className="skills-category-row3-column2"><p> <i className="fab fa-node"></i><br /><span className="title">NodeJS</span><br /></p></div>
                        <div className="skills-category-row3-column3"><p><i className="fas fa-database"></i>< br /><span className="title">MySQL</span>< br /></p></div>
                </div>
            </section>

        )
    }
}
