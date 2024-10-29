export default function ResumeSection() {
    return (
        <>
            <section className="resume" id="resume">
                <div className="texts">
                    <span className="elli-marks">Resume</span>
                    <h2>
                        Explore My <span className="text-highlight">Professional</span> Background and <span className="text-highlight">Qualifications</span>
                    </h2>
                </div>
                <div className="resume-content">
                    <div className="resume-half left-half">
                        <div className="resume-entry summary">
                            <h3 className="entry-header">Summary</h3>
                            <div className="entry-card">
                                <div className="marker"></div>
                                <h4 className="card-header">Jerome C. Imperial</h4>
                                <p className="card-desc">

                                    An original thinker with great passion for problem
                                    solving. Experienced UI developer trained in JavaScript,
                                    HTML5, and CSS3. Developed two big projects over the
                                    span of four years. Devoted to lifelong learning and
                                    personal development.
                                    Over the years, I've dived into numerous projects, constantly honing my skills and expanding my knowledge. I'm excited about the opportunity to help businesses thrive in the digital age and can't wait to contribute to meaningful projects. Feel free to explore and test my works :)
                                    <br /><br />

                                    📧 jeromeimperial@gmail.com<br />
                                    📞 +63-916-348-4785<br />
                                    🌎 MCGI Street, Sampaloc Apalit, Pampanga<br />
                                </p>
                            </div>
                        </div>
                        <div className="resume-entry education">
                            <h3 className="entry-header">Education</h3>
                            <div className="entry-card">
                                <div className="marker"></div>
                                <h4 className="card-header">Magna cum laude</h4>
                                <p className="card-desc">
                                    BS Computer Science <br />
                                    La Verdad Christian College<br />
                                    2022 - 2026<br />
                                </p>
                            </div>
                            <div className="entry-card">
                                <div className="marker"></div>
                                <h4 className="card-header">With High Honors</h4>
                                <p className="card-desc">
                                    Philippine Science High School - Bicol Region Campus <br />
                                    2016 - 2022 <br />
                                </p>
                            </div>
                        </div>
                        <div className="resume-entry education"></div>
                    </div>
                    <div className=" resume-half right-half">
                        <div className="resume-entry experience">
                            <h3 className="entry-header">Professional Experience</h3>
                            <div className="entry-card">
                                <div className="marker"></div>
                                <h4 className="card-header">Full Stack Developer</h4>
                                <p className="card-desc">
                                    January 2021 - Present <br />
                                    Tech Solutions Inc. <br />
                                    <br />⚜️ Designed and implemented RESTful APIs and integrated third-party services, boosting application performance by 30%.
                                    <br />⚜️ Led the development of an e-commerce platform using React, Node.js, and MongoDB, reducing page load time by 20% with optimized code and caching.
                                    <br />⚜️ Integrated OAuth2 and JWT for secure user authentication across web and mobile applications.
                                    {/* <br />⚜️ Collaborated with UI/UX designers to enhance the user experience on web and mobile, achieving a 15% increase in user engagement. */}
                                </p>
                            </div>
                            <div className="entry-card">
                                <div className="marker"></div>
                                <h4 className="card-header">Web Developer (Front-End)</h4>
                                <p className="card-desc">
                                    August 2019 - December 2020 <br />
                                    Digital Wave <br />
                                    <br />⚜️Built responsive and accessible UIs using React and Sass, improving SEO scores by 25% for various client websites.
                                    <br />⚜️Converted Figma prototypes into interactive pages with animations and dynamic data binding, resulting in 10% faster turnaround times.
                                    <br />⚜️Conducted A/B testing to analyze user interaction, leading to a redesign that increased user retention by 18%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}