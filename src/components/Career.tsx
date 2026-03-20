import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech | 2nd Year | 4th Semester</h4>
                <h5>JECRC Foundation Jaipur</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing BTech, building full-stack projects using MERN and Next.js.
              Developing strong foundations in Data Structures, Algorithms, and
              Object-Oriented Programming (OOP) using C and Java.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
