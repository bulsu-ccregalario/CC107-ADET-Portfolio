import { profile } from '../data/portfolio'
import Flower from './Flower'

export default function Hero() {
  // "Casey Regalario" -> two stacked lines so the full name fits beside the photo
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section id="home" className="hero">
      <div className="hero__decor" aria-hidden="true">
        <Flower className="hero__flower hero__flower--tl" size={150} duration={10} amp={10} />
        <Flower className="hero__flower hero__flower--tr" size={52} variant="b" petal="#F6D4D5" center="#F4A6A8" duration={7} delay={-2} amp={8} />
        <Flower className="hero__flower hero__flower--br" size={70} variant="c" petal="#BFE6DE" center="#F6D4D5" duration={8} delay={-4} amp={9} />
        <Flower className="hero__flower hero__flower--bl" size={44} variant="b" petal="#F4A6A8" center="#FFF9DF" duration={6.5} delay={-1} amp={7} />
      </div>
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__kicker">Hello, My name is</p>
          <h1 className="hero__title" aria-label={profile.name}>
            <span className="hero__name-line" aria-hidden="true">{first.toUpperCase()}</span>
            <span className="hero__name-line" aria-hidden="true">{rest.join(' ').toUpperCase()}</span>
          </h1>
          <p className="pill pill--mint hero__role">{profile.title}</p>
          <p className="pill pill--blush hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a className="btn btn--forest" href="#projects">View my projects</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="hero__photo">
          <div className="hero__photo-float">
            <div className="hero__arch" />
            <img src={profile.photoFormal} alt="Casey Regalario in formal attire" />
          </div>
        </div>
      </div>
    </section>
  )
}
