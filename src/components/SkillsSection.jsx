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
            <div className="skill-show tech-skills">
                <h4>Technical Skills</h4>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>

            </div>
            <div className="skill-show  soft-skills">
                <h4>Soft Skills</h4>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Web Development </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind"></div>
                    </div>
                </div>
            </div>

        </>
    )
}


function SkillStack() {
    return (
        <>
            <div className="skill-stack">
                <h4>Skill Stack</h4>
                <div>

                    <img src="public\assets\images\skills\skill-stack.png" alt="" />
                </div>

            </div>

        </>
    )
}
export default function SkillsSection() {
    return (
        <>
            <section className="skills" id="skills">
                <UpperPart />
                <LowerPart />
            </section>
            <SkillStack />
        </>


    )
}