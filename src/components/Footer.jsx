import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
        <div className="layer-1">
            <Logo 
            hasName
            size={2}
            color={2}
            />
            <ul className="footer-menu">
                {['Tutorials', 'Resources', 'Case Studies'].map(item=>{
                    return(
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
        <div className="layer-2">
            <ul className="social-links">
                {['facebook', 'instagram', 'linkedin', 'twitter', 'email'].map(item=>{
                    return <img key={item} src={`/images/${item}-logo.svg`} alt="" />
                })}
            </ul>
            <span className="macode-copyright">&copy; 2023 Copyright <span className="macode">Macode.io</span></span>
        </div>
    </footer>
  )
}
