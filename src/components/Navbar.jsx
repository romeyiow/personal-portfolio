export default function Navbar() {
    return (
        <>
            <nav id="nav">
                <div className="identifier">
                    <div className="wrapper-logo"></div>
                    <span className="name">EROME IMPERIAL</span>
                </div>
                <div className="links">
                    <a href="#bio" className="nav-link">Bio</a>
                    <a href="#projects" className="nav-link">Portfolio</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#resume" className="nav-link">Resume</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
                <div className="dlcv">
                    <a className="dl-btn" href="#">
                        Download CV
                    </a>
                </div>
            </nav>
        </>
    );
}
