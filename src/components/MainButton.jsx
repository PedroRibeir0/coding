
export default function MainButton({text, className}) {
  return (
    <button className={`main-button ${className}`}>
        <span>{text}</span>
        <img src="/images/arrow-up-right.svg" alt="" />
    </button>
  )
}
