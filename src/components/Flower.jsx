// Decorative flower. Pass `float` to give it a slow, gentle drift (CSS keyframes in global.css).
// `duration` / `delay` (seconds), `amp` (vertical px), `sway` (horizontal px) and `variant` (a | b | c drift path)
// vary the motion so flowers never move in sync.
export default function Flower({
  size = 80, petal = '#F4A6A8', center = '#FBE8A6', className = '', style,
  float = true, duration = 9, delay = 0, amp = 10, sway = 12, variant = 'a',
}) {
  const motion = float
    ? { '--f-dur': `${duration}s`, '--f-delay': `${delay}s`, '--f-amp': `${amp}px`, '--f-sway': `${sway}px` }
    : undefined
  return (
    <svg
      className={`flower ${float ? `flower--float flower--${variant}` : ''} ${className}`.trim()}
      style={{ ...motion, ...style }}
      width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false"
    >
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="50" cy="26" rx="14" ry="22" fill={petal} transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="12" fill={center} />
    </svg>
  )
}
