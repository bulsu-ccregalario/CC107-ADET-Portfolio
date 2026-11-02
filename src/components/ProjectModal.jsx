import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project: p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const rows = [['Project type', p.type], ['My role', p.role], ['Technologies', p.tech], ['Key features', p.features]]

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" role="dialog" aria-modal="true" aria-label={p.name} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><X size={22} /></button>
        <img className="modal__img" src={p.image} alt={`${p.name} screenshot`} />
        <div className="modal__body">
          <h3>{p.name}</h3>
          <p className="project__sub">{p.subtitle}</p>
          <p>{p.description}</p>
          <dl className="modal__details">
            {rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
          {p.live && (
            <a className="btn btn--forest" href={p.live} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Visit live site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
