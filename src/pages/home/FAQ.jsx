import { useState, useEffect } from "react"

export default function FAQ() {

    const faqInfo = [
        {
            q_number: 1,
            question: '01. Can I Find the right information faster?',
            answer: 'Absolutely! Our platform offers an intuitive search function and a well-organized navigation system. Finding the information you need has never been easier.'
        },
        {
            q_number: 2,
            question: '02. How to share feature demos and ideas?',
            answer: 'Sharing feature demos and ideas is a breeze with our collaborative platform. Simply upload your demos and invite team members to contribute and provide feedback effortlessly.'
        },
        {
            q_number: 3,
            question: '03. How to get insights from users?',
            answer: 'Gathering insights from users is a critical aspect of our platform. You can easily conduct interactive surveys to obtain valuable feedback and understand your users needs better.'
        },
        {
            q_number: 4,
            question: '04. Can I develop my website without code?',
            answer: 'Yes, you can! Our user-friendly tools enable you to develop your website without the need for coding knowledge. Embrace creativity and build your website hassle-free.'
        },
    ]

    const [faqOpen, setFaqOpen] = useState(0)


    function openFaq(e){
        let id = Number(e.target.parentNode.parentNode.id)
        if (id == faqOpen){
            setFaqOpen(0)
            return
        }
        setFaqOpen(id)
    }

    return (
    <section className="faq">
        <h2 className="main-header">FAQs</h2>
        <ul className="faq-list">
            {faqInfo.map(item=>{
                return(
                    <li key={item.q_number} className={`faq-item ${item.q_number == faqOpen ? 'open' : ''}`} id={item.q_number}>
                        <div className="question-button">
                            <span className="question" onClick={openFaq}>{item.question}</span>
                            <button 
                            className="faq-button"
                            onClick={openFaq}>
                            {item.q_number == faqOpen ? '-' : '+'}
                            </button>
                        </div>
                        <span className="answer">{item.answer}</span>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
