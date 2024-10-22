export default function ProjectsSection() {
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
                    ife.
                </p>
                <div className="cta-btn">
                    <a className="contact" href="">
                        See More
                    </a>
                </div>
            </div>
            <div className="projects-visuals">
                <div className="item highlight"></div>
                <div className="item slide-show">
                    <div className="slide-card top-image" />
                    <div className="slide-card mid-image" />
                    <div className="slide-card bottom-image" />
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

    )
}