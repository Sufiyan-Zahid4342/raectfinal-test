import React from "react";
import { Link } from "react-router-dom";
import './mother.css';

const Mother = () => {
    return (
        <div className="mother">
            <img src="image 2.png" alt="Placeholder 2" />
            <div>
                <a href="./"><img src="pic10.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic11.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic12.jpg" alt="Placeholder 2" /></a>
            </div>
            <h3><Link to="/blog">His mother has always taught him</Link></h3>
            <p>His mother had always taught him not to ever think of himself as better than others. He'd tried to live 
                by this motto. He never looked down on those who were less fortunate or who had less money 
                than him. But the stupidity of the group of people he was talking to made him change his mind.</p>
        </div>
    );
};

export default Mother;