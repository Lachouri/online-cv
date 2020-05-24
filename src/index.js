import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Menu from './components/Menu';



class App extends React.Component {
    render() {
        return (
            <div>
                <Menu className="menu"></Menu>
                <Home className="home" ></Home>
                <About className="about" ></About>
                <Resume className="resume" ></Resume>
                <Projects className="projects" ></Projects>
                <Contact className="contact" ></Contact>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);