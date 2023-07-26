
export default function MainButton({text, width}) {
  return (
    <button className="main-button" style={{width: width}}>
        <span>{text}</span>
        <img src="/images/arrow-up-right.svg" alt="" />
    </button>
  )
}
