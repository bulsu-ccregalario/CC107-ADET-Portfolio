import { Mail, Phone, Github, MapPin } from 'lucide-react'
import { profile as p } from '../data/portfolio'
import Flower from './Flower'
import Reveal from './Reveal'

export default function Contact() {
  const items = [
    { Icon: Mail, label: 'Email', value: p.email, href: `mailto:${p.email}` },
    { Icon: Phone, label: 'Phone', value: p.phone, href: p.phoneHref },
    { Icon: Github, label: 'GitHub', value: p.githubLabel, href: p.github, external: true },
    { Icon: MapPin, label: 'Location', value: p.location },
  ]
  return (
    <section id="contact" className="section section--blush">
      <Flower className="section__flower section__flower--contact" size={72} petal="#FFF9DF" center="#F4A6A8" variant="b" duration={9} delay={-1} amp={8} />
      <Flower className="section__flower section__flower--tl" size={46} variant="c" petal="#BFE6DE" center="#FFF9DF" duration={8.5} delay={-3} amp={8} />
      <div className="container">
        <Reveal><h2 className="section__title">Let’s Connect</h2></Reveal>
        <Reveal delay={80}><p className="section__lead">Have an opportunity or just want to say hello? I’d love to hear from you.</p></Reveal>
        <div className="contact">
          {items.map(({ Icon, label, value, href, external }, i) => {
            const inner = (
              <>
                <span className="skill__icon"><Icon size={22} /></span>
                <span><small>{label}</small><strong>{value}</strong></span>
              </>
            )
            return (
              <Reveal key={label} className="reveal--fill" delay={i * 80}>
                {href ? (
                  <a className="card contact__item" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
                ) : (
                  <div className="card contact__item">{inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
