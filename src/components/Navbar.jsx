export default function Navbar() {
    return (
        <nav id="nav">
            <div className="identifier">
                <div className="wrapper-logo"></div>
                <span className="name">EROME IMPERIAL</span>
            </div>
            <div className="links">
                <a href="#bio">Bio</a>
                <a href="#projects">Portfolio</a>
                <a href="#skills">Skills</a>
                <a href="#resume">Resume</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="dlcv">
                <a className="dl-btn" href="#">
                    {" "}
                    Download CV
                </a>
            </div>
        </nav>
    );

}