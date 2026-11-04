import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

const EXIT_MS = 220

export default function ProjectModal({ project: p, onClose }) {
  const [closing, setClosing] = useState(false)
  const timer = useRef(null)

  // Play the exit animation, then tell the parent to unmount. Skipped for reduced motion.
  const requestClose = useCallback(() => {
    if (timer.current) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { onClose(); return }
    setClosing(true)
    timer.current = setTimeout(onClose, EXIT_MS)
  }, [onClose])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && requestClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [requestClose])

  useEffect(() => () => clearTimeout(timer.current), [])

  const rows = [['Project type', p.type]]

  return (
    <div className={`modal ${closing ? 'is-closing' : ''}`} onClick={requestClose}>
      <div className="modal__panel" role="dialog" aria-modal="true" aria-label={p.name} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={requestClose} aria-label="Close"><X size={22} /></button>
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
