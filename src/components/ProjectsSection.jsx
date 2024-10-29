import React, { useState } from 'react';

export default function ProjectsSection() {
    const [counter, setCounter] = useState(0);
    const [fadeClass, setFadeClass] = useState('');

    const arrayOfImages = [
        "assets/images/projects/donation-website.png",
        "assets/images/projects/portfolio-website.png",
        "assets/images/projects/blue.png"
    ];

    const arrayOfLinks = [
        "https://jcidonationwebsite.netlify.app/home",
        "https://leafy-mochi-001fb8.netlify.app/",
        "https://github.com/romeyiow/romeyiow"
    ];
    const arrayOfTitles = [
        "Responsive Donation Website",
        "Simple Portfolio Website",
        "Web Development"
    ];
    const arrayOfDescs = [
        "Check out this responsive website donation website.",
        "Here's the first look of my personal portfolio website.",
        "Check out my these websites I have created over the past 4 years."
    ];

    const changeBackgroundImage = (k) => {
        setFadeClass('fade-out');
        setTimeout(() => {
            const newCounter = (counter + k + 3) % 3;
            setCounter(newCounter);
            setFadeClass('fade-in');
        }, 300);
    };

    return (
        <section className="projects" id="projects">
            <div className="texts">
                <span className="elli-marks">Portfolio</span>
                <h2>
                    Check Out My <br />
                    <span>Latest</span> Works
                </h2>
                <p className="desc">
                    With a proven track record of delivering high-quality results and a
                    commitment to meeting deadlines, I bring your revolutionary vision to
                    life.
                </p>
                <div className="cta-btn">
                    <a className="contact" href="https://github.com/romeyiow/romeyiow" target="_blank" rel="noopener noreferrer">
                        See More
                    </a>
                </div>
            </div>
            <div className="projects-visuals">
                <div className="item highlight-wrapper">
                    <div className="item highlight" style={{ backgroundImage: `url(${arrayOfImages[counter]})` }}></div>
                    <div className="highlight-info">
                        <a className={`project-link ${fadeClass}`} href={arrayOfLinks[counter]} target="_blank" rel="noopener noreferrer"><img src="" alt="" /><img src="assets/images/projects/External-Link.png" alt="" /></a>
                        <h5 className={`project-title ${fadeClass}`}>
                            {arrayOfTitles[counter]}
                        </h5>
                        <p className={`project-short-desc ${fadeClass}`}>
                            {arrayOfDescs[counter]}
                        </p>
                    </div>
                </div>
                <div className="item slide-show">
                    <div className="slide-card top-image" style={{ backgroundImage: `url(${arrayOfImages[(counter + 1) % 3]})` }} />
                    <div className="slide-card mid-image" style={{ backgroundImage: `url(${arrayOfImages[(counter + 2) % 3]})` }} />
                    <div className="slide-card bottom-image" style={{ backgroundImage: `url(${arrayOfImages[(counter + 3) % 3]})` }} />
                    <div className="controls">
                        <div className="indicators">
                            <div className="box-wrapper active-wrapper" id="wrapper1">
                                <div className="box active-box" id="box1" />
                            </div>
                            <div className="box-wrapper" id="wrapper2">
                                <div className="box" id="box2" />
                            </div>
                            <div className="box-wrapper" id="wrapper3">
                                <div className="box" id="box3" />
                            </div>
                        </div>
                        <div className="arrows">
                            <button
                                type="button"
                                className="arr-btn"
                                id="larr"
                                onClick={() => changeBackgroundImage(-1)}
                            >
                                <img src="assets/icons/arrow-left.png" alt="" />
                            </button>
                            <button
                                type="button"
                                className="arr-btn"
                                id="rarr"
                                onClick={() => changeBackgroundImage(1)}
                            >
                                <img src="assets/icons/arrow-right.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
