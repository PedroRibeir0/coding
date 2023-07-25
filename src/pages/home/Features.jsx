import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { motion } from 'framer-motion'

export default function Features() {

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

    const [current, setCurrent] = useState(1)
    // const [width, setWidth] = useState(0)
    const carrousel = useRef()

    function handleDragEnd(e){
        console.log(e)
    }    

    return (
    <section className="features">
        <div className="feature-text-area">
            <h2>Our Features Special for your</h2>
            <p>
                We provide various special features for all of you
            </p>
        </div>
        <motion.div className="features-carrousel">
            <motion.ul 
            onDragEnd={handleDragEnd}
            className="carrousel-container" 
            whileTap={{cursor: 'grabbing'}}
            drag="x"
            dragConstraints={{right: 300, left: -300}}
            ref={carrousel}>

                {FeaturesList.map((item, index)=>{
                    return(
                        <motion.li className="feature-card" key={index}>
                            <img src={item.src} alt="" className="feature-icon"/>
                            <div className="card-txt">
                                <h3>{item.tittle}</h3>
                                <p>{item.paragraph}</p>
                            </div>
                        </motion.li>
                    )})}
            </motion.ul>
        </motion.div>
        <div className="carrousel-bar">
            <ul className="bars-list">{[0,1,2].map(item=><li key={item} className={`bar ${item == current ? 'current': ''}`}></li>)}</ul>
        </div>
    </section>
  )
}
