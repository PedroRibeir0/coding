import { useState, useRef, useEffect } from "react"

export default function Features({isMobile}) {

    const FeaturesList = [
        {
            src: '/images/one-two-yellow-icon.svg',
            tittle: 'Best Tutors',
            paragraph: 'Bring your design vision to life in clean, semantic HTML5'
        },
        {
            src: '/images/one-one-icon.svg',
            tittle: 'Flexible',
            paragraph: 'Connect your marketing tools with built-in integrations'
        },
        {
            src: '/images/one-three-yellow-icon.svg',
            tittle: 'Easy Access',
            paragraph: 'Unlock boundless possibilities. Elevate your learning journey.'
        },
    ]

    const [current, setCurrent] = useState(0)
    const [width, setWidth] = useState(0)
    const carrousel = useRef()
    const intervalTime = 3000

    
    useEffect(()=>{
        setWidth(carrousel.current.scrollWidth/ FeaturesList.length)
    },[])
    
    useEffect(()=>{
        function handleInterval(){
            if (current >= FeaturesList.length-1){
                setCurrent(0)
                return
            }
            setCurrent(current+1)
        }
        const carrouselInterval =  setInterval(handleInterval, intervalTime)

        return ()=>{
            clearInterval(carrouselInterval)
        }
    }, [current])

    function changeSelectedBar(e){
        setCurrent(e.target.id)
    }

    return (
    <section className="features">
        <div className="feature-text-area">
            <h2 className="main-header">Our Features Special for your</h2>
            <p>
                We provide various special features for all of you
            </p>
            <div className="carrousel-bar">
            <ul className="bars-list">
                {FeaturesList.map((item, index)=>
                <li 
                id={index}
                onClick={changeSelectedBar} 
                key={index} 
                className={`bar ${index == current ? 'current': ''}`}>
                </li>)}
            </ul>
        </div>
        </div>
        <div className="features-carrousel">
            <ul 
                style={{transform : `translateX(${
                    current == 0 ? width : current == 1 ? 0 : -width
                }px)`}}
                className="carrousel-container" 
                ref={carrousel}>
                {FeaturesList.map((item, index)=>{
                    return(
                        <li className="feature-card" key={index}>
                            <img src={item.src} alt="" className="feature-icon"/>
                            <div className="card-txt">
                                <h3>{item.tittle}</h3>
                                <p>{item.paragraph}</p>
                            </div>
                        </li>
                    )})}
            </ul>
        </div>
    </section>
  )
}
