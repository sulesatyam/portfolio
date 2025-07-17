export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Satyam</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Tech Enthusiast</span>{" "}
          </h1>
          <p className="hero--section-description">
            <b>B.Tech in Data Science | Full-Stack Developer | Data Analyst </b><br />
Passionate about building web apps & turning data into solutions. Created CodeTrack, optimized reporting by 40%, and thrive in collaborative problem-solving.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
