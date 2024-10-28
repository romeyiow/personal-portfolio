function UpperPart() {
    return (
        <>
            <div className="texts">
                <span className="elli-marks">My Skills</span>
                <h2>
                    Why Hire Me For Your <br />
                    Next <span>Project?</span>
                </h2>
                <p className="desc">
                    With a proven track record of delivering high-quality results and a
                    commitment to meeting deadlines, I bring your revolutionary vision to
                    ife.
                </p>
                <div className="cta-btn">
                    <a className="contact" href="">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="graphics">
                <div className="wrapper">
                    <div className="card card1">
                        <img src="assets/icons/diamond.png" alt="" />
                        <h2>UI &amp; UX Designing</h2>
                        <p>Create user interface design with unique &amp; modern ideas </p>
                    </div>
                    <div className="card card2">
                        <img src="assets/icons/pulse-outline.png" alt="" />
                        <h2>Responsive!</h2>
                        <p>My works function well across various screen sizes.</p>
                    </div>
                </div>
                <div className="card card3">
                    <img src="assets/icons/grad-toga.png" alt="" />
                    <h2> Programmer</h2>
                    <p>I am proficient in Python, JavaScript and C++</p>
                </div>
            </div>

        </>
    )
}
function LowerPart() {
    return (
        <>
            <div className="skills-lower">
                <div className="tech-skills">
                    <h4>Technical Skills</h4>
                    <div className="tech-skill tech-skill1">
                        <h5>HTML, CSS, JavaScript</h5>
                        <div className="skill-level-cont">
                            <div className="skill-level-ind"></div>
                        </div>
                    </div>
                </div>
                <div className="soft-skills">
                    <h4>Soft Skills</h4>
                </div>
            </div>
        </>
    )
}
export default function SkillsSection() {
    return (

        <section className="skills" id="skills">
            <UpperPart />
            <LowerPart />
        </section>

    )
}