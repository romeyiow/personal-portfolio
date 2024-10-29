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
                        <h2>AI Integration</h2>
                        <p>Need AI in your website? I got your back!</p>
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
                    <h5>Front-End Technologies ( HTML, CSS, JavaScript, React ) </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '88%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Back-End Development (Node.js, Python, Ruby, PHP) </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Version Control (Git)</h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '99%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Data Science & Machine</h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '40%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Database Management (SQL, NoSQL)</h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '70%' }}></div>
                    </div>
                </div>

            </div>
            <div className="skill-show  soft-skills">
                <h4>Soft Skills</h4>
                <div className="chart tech-skill tech-skill1">
                    <h5>Problem-Solving </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Communication </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Time Management </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Resourcefulness </h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="chart tech-skill tech-skill1">
                    <h5>Team Collaboration</h5>
                    <div className="skill-level-cont">
                        <div className="skill-level-ind" style={{ width: '70%' }}></div>
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

                    <img src="assets/images/skills/skill-stack.png" alt="" />
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