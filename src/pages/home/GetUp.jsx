
export default function GetUp() {
  return (
    <section className="get-up">
        <div className="texts">
            <h3>Get up and running fast together</h3>
            <ul className="showcase-university">
                <li className="university">
                    <img src="/images/university-icon.svg" alt="" />
                    <h4>University</h4>
                    <p>
                    Browse hundreds of in-depth videos, courses, and guides to get up and running fast
                    </p>
                </li>
                <li className="showcase">
                    <img src="/images/showcase-icon.svg" alt="" />
                    <h4>Showcase</h4>
                    <p>
                    Get inspired by the incredible websites built by members of the community
                    </p>
                </li>
            </ul>
        </div>
        <div className="card-container">
            <div className="card">
                <span className="tutor">Tutors</span>
                <span className="tutor-name">Anthoney Mills</span>
                <img src="/images/anthoney-mills.svg" alt="tutor-photo" />
            </div>
        </div>
    </section>
  )
}
