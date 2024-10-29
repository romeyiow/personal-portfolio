export default function BioSection() {
    return (
        <section className="bio" id="bio">
            <div className="texts">
                <span className="elli-marks">Biography</span>
                <h2>
                    Curious <span>About Me?</span>
                </h2>
            </div>
            <div className="content">
                <div className="left">

                    <div className="personal-background">
                        <h4>Personal Background</h4>
                        <p>I began my journey as a web developer in high school, where I discovered my passion for creating dynamic online experiences. Now, as an undergraduate, I continue to expand my skills by exploring modern technologies like Next.js, TypeScript, Nest.js, and Tailwind CSS. I approach every challenge with confidence, understanding that setbacks are opportunities for growth. With a positive mindset and determination, I strive to make a meaningful impact in the tech world while wishing wellness for everyone around me.</p>
                        <br />
                    </div>
                    <div className="interests">
                        <h4 className="bio-right-h4">Interests</h4>
                        <p>Outside of my professional interests, I am also passionate about soccer, playing the guitar, and singing. I enjoy playing retro games as they bring back nostalgic memories and provide a fun way to unwind. These activities help me stay balanced and constantly curious about the world around me. I am also actively involved in various clubs and organizations at my school, which provide opportunities for personal growth and foster my connections with peers. These experiences help me grow as both a person and a professional.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="motto">
                        <h4>Life Motto</h4>
                        <div className="box">
                            Obsession beats <br /> talent 🏆 🐢...🐇
                        </div>
                        <div className="quote">”</div>
                        <div className="blocker"></div>
                    </div>
                    <div className="education">
                        <h4 className="bio-right-h4">Education</h4>
                        <p>Graduating magna cum laude with a BS in Computer Science from La Verdad Christian College (2022-2026), I developed a strong foundation in software development and problem-solving. My academic journey began at Philippine Science High School - Bicol Region Campus, where I graduated with high honors (2016-2022). These experiences have equipped me with both technical skills and a commitment to excellence, driving my passion for impactful and innovative tech solutions.
                        </p>
                    </div>

                    <div className="achievements">
                        <h4 className="bio-right-h4">Achievement</h4>
                        <p>
                            Led a team project to create and launch a responsive web application for managing campus events. This platform improved event visibility, streamlined organization processes, and increased student engagement by 40%, making it easier for student groups to connect with attendees.
                        </p>
                        <p>I have little fear when aiming for towering goals. I might fail, but with God's help, my 'failure' (if you can call it that) will be better than most successes. Nonetheless, I pray for everyone's wellness 😉.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}