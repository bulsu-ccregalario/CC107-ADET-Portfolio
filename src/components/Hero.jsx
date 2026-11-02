import { profile } from '../data/portfolio'
import Flower from './Flower'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Flower className="hero__flower hero__flower--tl" size={150} />
      <Flower className="hero__flower hero__flower--br" size={70} petal="#BFE6DE" center="#F6D4D5" />
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__kicker">Hello, I’m {profile.name}</p>
          <h1 className="hero__title">PORTFOLIO</h1>
          <p className="pill pill--mint hero__role">{profile.title}</p>
          <p className="pill pill--blush hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a className="btn btn--forest" href="#projects">View my projects</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="hero__photo">
          <div className="hero__arch" />
          <img src={profile.photoFormal} alt="Casey Regalario in formal attire" />
        </div>
      </div>
    </section>
  )
}
