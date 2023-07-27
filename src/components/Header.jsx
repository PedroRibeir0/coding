import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    function handleScroll(){
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          onClick={()=> setIsMenuOpen(true)}
        />
    </header>
    {isMenuOpen && <Menu/>}
    </>
  )
}
