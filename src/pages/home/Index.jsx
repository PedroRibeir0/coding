'use client'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainButton from '../../components/MainButton'
import FAQ from './FAQ'
import Features from './Features'
import GetUp from './GetUp'
import Improve from './Improve'
import Packages from './Packages'
import WebPages from './WebPages'

export default function Index() {
  
  const [isMobile, setIsMobile] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);  

  useEffect(() => {
    function handleResize(){
      setIsMenuOpen(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleMenuClick(){
    setIsMenuOpen(true)
  }

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


  useEffect(() => {
    function handleScroll() {
      if (isMobile) setScrolled(window.scrollY > 0);
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <div className='home'>  
        <Header 
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        scrolled={scrolled}
        />
        <Improve/>
        <section className='brands'>
          {['edx', 'udemy', 'coursera'].map(item=>{
            return <img key={item} className="brand-logo" src={`/images/${item}-logo.svg`} alt={`${item}-logo`} />
          })}
        </section>
        <Features isMobile={isMobile}/>
        <WebPages/>
        <GetUp/>
        <Packages/>
        <FAQ/>
        <div className='start-container'>
          <div className='start'>
            <h3>Start upgrading your skills free for this month</h3>
            <p>Build your site for free and take as long as you need</p>
            <div className="buttons">
              <button className='try-yourself-button'>try yourself</button>
              <MainButton text={'get started'} width={'100%'} height={'40px'}/>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}