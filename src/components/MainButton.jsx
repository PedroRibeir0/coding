
export default function MainButton({text, width, height}) {
  return (
    <button className="main-button" style={{width: width, height: height}}>
        <span>{text}</span>
        <img src="/images/arrow-up-right.svg" alt="" />
    </button>
  )
}
