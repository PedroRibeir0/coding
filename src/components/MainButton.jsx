
export default function MainButton({text}) {
  return (
    <button className="main-button">
        <span>{text}</span>
        <img src="/images/arrow-up-right.svg" alt="" />
    </button>
  )
}
