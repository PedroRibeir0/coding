import Logo from "./Logo";

export default function Header({isMenuOpen, handleMenuClick, scrolled}) {

  function Menu(){
    return(
      <nav className="menu" >
        <ul className="menu-container">
          {['Home', 'Tutorials', 'Case studies', 'Resources'].map((item, index)=>{
            return <li key={index} className="menu-opt">{item}</li>
          })}
        </ul>
    </nav>
    )
  }
  
  return (
    <>
    <header className={`${scrolled ? 'shadow' : ''}`}>
        <Logo 
          hasName
          color={1}
          size={1}
        />
        <img 
          src="/images/menu-icon.svg" 
          alt="menu-icon"
          className="menu-icon"
          onClick={handleMenuClick}
        />
    </header>
    {isMenuOpen && <Menu/>}
    </>
  )
}
