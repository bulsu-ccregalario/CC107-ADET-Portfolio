import { Mail, Phone, Github, MapPin } from 'lucide-react'
import { profile as p } from '../data/portfolio'

export default function Contact() {
  const items = [
    { Icon: Mail, label: 'Email', value: p.email, href: `mailto:${p.email}` },
    { Icon: Phone, label: 'Phone', value: p.phone, href: p.phoneHref },
    { Icon: Github, label: 'GitHub', value: p.githubLabel, href: p.github, external: true },
    { Icon: MapPin, label: 'Location', value: p.location },
  ]
  return (
    <section id="contact" className="section section--blush">
      <div className="container">
        <h2 className="section__title">Let’s Connect</h2>
        <p className="section__lead">Have an opportunity or just want to say hello? I’d love to hear from you.</p>
        <div className="contact">
          {items.map(({ Icon, label, value, href, external }) => {
            const inner = (
              <>
                <span className="skill__icon"><Icon size={22} /></span>
                <span><small>{label}</small><strong>{value}</strong></span>
              </>
            )
            return href ? (
              <a key={label} className="card contact__item" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
            ) : (
              <div key={label} className="card contact__item">{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
