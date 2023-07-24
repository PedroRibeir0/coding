import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  useEffect(() => {
    if (!isMenuOpen) return;
  
    function handleClickOutsideMenu(e){
      let noMenu = window.innerWidth / 100 * 50;
      if (e.clientX <= noMenu) setIsMenuOpen(false);
    };
  
    window.addEventListener('click', handleClickOutsideMenu);
  
    return () => {
      window.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

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
    <header>
        <Logo 
          hasName
          color={1}
          size={1}
        />
        {isMenuOpen ? 
        <Menu/> : 
        <img 
          src="/images/menu-icon.svg" 
          alt="menu-icon"
          className="menu-icon"
          onClick={()=> setIsMenuOpen(true)}
        />}
    </header>
  )
}
