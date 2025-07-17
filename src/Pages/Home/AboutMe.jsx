export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm Satyam Sule, a B.Tech student passionate about data science and building practical web applications. I love turning ideas into code—whether it's tracking competitive programming progress with CodeTrack or designing e-commerce platforms.
          </p>
          <p className="hero--section-description">
             When I'm not working on projects, you'll find me analyzing data to drive efficiency
            (like boosting reporting by 40% at my uni's climate lab) or collaborating with teams to solve problems creatively!
          </p>
        </div>
      </div>
    </section>
  );
}
