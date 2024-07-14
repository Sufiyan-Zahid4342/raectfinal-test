import React from "react";
import { Link } from "react-router-dom";
import './Articles.css';

const Articles = () => {
    return (
        <div className="Articles">
            <h1> Welcome User Name,</h1>
            <p>sunday 14 july 1024</p>
            <h2>
                Recent Blog
            </h2>
            <div >
                <img src="image 2.png" alt="Placeholder 2" />

                <h3><Link to="/mother">His mother has always taught him</Link></h3>

                <p> His mother alays taught not to ever thing to him self has better then other....</p>
                <button>
                    <Link to="/blog">American</Link>
                </button>
                <button>
                    <Link to="/blog">Crime</Link>
                </button>
                <button>
                    <Link to="/blog">History</Link>
                </button>
                <a href="./"><img src="pic10.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic11.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic12.jpg" alt="Placeholder 2" /></a>
            </div>

            <div className="Articles2 ">
                <img src="image 2.png" alt="Placeholder 2" />

                <h3><Link to="/mother">His mother has always taught him</Link></h3>

                <p> His mother alays taught not to ever thing to him self has better then other...</p>
                <button>
                    <Link to="/blog">American</Link>
                </button>
                <button>
                    <Link to="/blog">Crime</Link>
                </button>
                <button>
                    <Link to="/blog">History</Link>
                </button>
                <a href="./"><img src="pic10.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic11.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic12.jpg" alt="Placeholder 2" /></a>
            </div>
            <div className="Articles3">
                <img src="image 2.png" alt="Placeholder 2" />

                <h3><Link to="/mother">His mother has always taught him</Link></h3>

                <p> His mother alays taught not to ever thing to him self has better then other...</p>
                <button>
                    <Link to="/">American</Link>
                </button>
                <button>
                    <Link to="/blog">Crime</Link>
                </button>
                <button>
                    <Link to="/blog">History</Link>
                </button>
                <a href="./"><img src="pic10.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic11.jpg" alt="Placeholder 2" /></a>
                <a href="./"><img src="pic12.jpg" alt="Placeholder 2" /></a>
            </div>
            <button>
                <Link to="/mother">Sign in to continue</Link>
            </button>
        </div>
    );
};

export default Articles;