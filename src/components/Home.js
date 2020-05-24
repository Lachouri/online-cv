import React from 'react';
import "../style/Home.css";

export default class Home extends React.Component {
    render() {
        return (
            <section id="home" className="section-home"><div className="introduction">
                <span className="introduction-title">ACHOURI Ludivine<br /></span>
                <p className="introduction-description">I am a French <span style={{color: "#008f8f"}}>front-end developper</span>, I live in <span style={{color: "#008f8f"}}>Lille</span> and I aspire to become the best <span style={{color: "#008f8f"}}>web developper</span> I can be.</p>
            </div>
            </section>

        )
    }
}
