export default function NewBio() {
    return (
        <section className="bio" id="bio">
            <div className="texts">
                <span className="elli-marks">Biography</span>
                <h2>
                    Curious <span>About Me?</span>
                </h2>
            </div>
            <div className="newbio-content">
                <div className="interest">
                    <div className="gitem-illustration"><img src="assets/images/bio/interest-soccer.png" alt="" /></div>
                    <h4 className="gitem-header">Interests</h4>
                    <p className="gitem-des">If I have the time, I enjoy playing soccer or any sport that keeps me active and engaged.</p>
                </div>
                <div className="achievements">
                    <div className="gitem-illustration"><img className="achievements-img" src="assets/images/bio/balloons.png" alt="" /></div>
                    <h4 className="gitem-header">Achievements</h4>
                    <p className="gitem-des">I led a team to design and launch a responsive web application for campus events, boosting student engagement by 40% and simplifying event management for organizations.
                    </p>
                </div>
                <div className="education"></div>
                <div className="pbackground"></div>
                <div className="motto"></div>

            </div>
        </section>
    )
}