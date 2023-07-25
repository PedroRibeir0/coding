
export default function Logo({hasName, color=1, size=1,}) {
    return (
    <div className={`logo size-${size} color-${color}`}>
        <span className="logo-icon">{'>'}</span>
        {hasName && <span className="logo-name">macode.</span>}
    </div>
  )
}
