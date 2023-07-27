'use client'
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
  return (
    <div className='home'>  
        <Header/>
        <Improve/>
        <section className='brands'>
          {['edx', 'udemy', 'coursera'].map(item=>{
            return <img className="brand-logo" src={`/images/${item}-logo.svg`} alt={`${item}-logo`} />
          })}
        </section>
        <Features/>
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