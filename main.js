let root = document.getElementById("root");
let cv = (
  <div className="container">
    <h1 className="name">Shahad A. Alarifi</h1>
    <div className="contacts-div">
      <p className="contact">Phone: +966 5X XXX XXXX</p>
      <p className="contact">Location: Riyadh, Saudi Arabia</p>
      <p className="contact">GitHub: github.com/shahad0000</p>
    </div>
    <div>
      <h2 className="summary">Professional Summary</h2>
      <p className="summary-text">
        Motivated and detail-oriented front-end developer with hands-on
        experience in building responsive and interactive websites using React.
        Passionate about clean design, performance optimization, and user
        experience. Strong foundation in HTML, CSS, JavaScript, and modern
        frameworks. Eager to contribute to team success through hard work and
        continuous learning.
      </p>
    </div>

    <hr></hr>
    <div className="sections">
      <div>
        <h2 className="section">Education</h2>
        <br></br>
        <ul>
          <li>Bachelor in English</li>
          <li>Diploma in Supply Chain Management</li>
        </ul>
      </div>
      <div>
        <h2 className="section">Languages</h2>
        <br></br>
        <ul>
          <li>Arabic: Native</li>
          <li>English: Fluent</li>
        </ul>
      </div>
      <div>
        <h2 className="section">Skills</h2>
        <br></br>
        <ul>
          <li>Microsoft Office (Word, Excel, PowerPoint)</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Bootstrap & basic web development</li>
        </ul>
      </div>
    </div>
  </div>
);

ReactDOM.render(cv, root);
