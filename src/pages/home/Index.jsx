'use client'
import Header from '../../components/Header'
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
          <img className="brand-logo" src="/images/edx-logo.svg" alt="edx-logo" />
          <img className="brand-logo" src="/images/udemy-logo.svg" alt="udemy-logo" />
          <img className="brand-logo" src="/images/coursera-logo.svg" alt="coursera-logo" />
        </section>
        <Features/>
        <WebPages/>
        <GetUp/>
        <Packages/>
    </div>
  )
}