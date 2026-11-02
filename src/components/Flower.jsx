export default function Flower({ size = 80, petal = '#F4A6A8', center = '#FBE8A6', className = '', style }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="50" cy="26" rx="14" ry="22" fill={petal} transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="12" fill={center} />
    </svg>
  )
}
