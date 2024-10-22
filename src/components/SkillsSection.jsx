export default function SkillsSection() {
    return (
        <section className="skills" id="skills">
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
                    <div className="card">
                        <img src="assets/icons/diamond.png" alt="" />
                        <h2>UI &amp; UX Designing</h2>
                        <p>Create user interface design with unique &amp; modern ideas </p>
                    </div>
                    <div className="card">
                        <img src="assets/icons/pulse-outline.png" alt="" />
                        <h2>Responsive!</h2>
                        <p>My works function well across various screen sizes.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/icons/grad-toga.png" alt="" />
                    <h2> Programmer</h2>
                    <p>I am proficient in Python, JavaScript and C++</p>
                </div>
            </div>
        </section>
    )
}