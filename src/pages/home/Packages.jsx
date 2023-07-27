import BuyButton from "../../components/BuyButton"

export default function Packages() {

    const packagesInfo = [
        {
            name: 'development',
            price: 10,
            benefits: [
                '1 Module Javascript',
                '1 Module Human Resources'
            ]
        },
        {
            name: 'it & software',
            price: 30,
            benefits: [
                '1 Module Javascript',
                '1 Module Human Resources',
                '2 Module Sales Teams',
                'Pack Marketing Skills',
                '5 Module Study Case'
            ]
        },
        {
            name: 'business',
            price: 25,
            benefits: [
                '1 Module Javascript',
                '1 Module Human Resources',
                '2 Module Sales Teams',
            ]
        },
    ]


    return (
    <section className="packages">
        <h3>Choose your package</h3>
        <p>
        We provide various types of packages just for you
        </p>
        <ul className="packages-list">
            {packagesInfo.map((item, index)=>{
                return(
                    <li key={index} className="package-container">
                        {index == 1 && <img src="/images/new.svg" alt="" className="new" />}
                        <span className="package-name">{item.name}</span>
                        <span className="package-price">
                            <span className="dollar">$</span>
                            <span className="price">{item. price}</span>
                        </span>
                        <ul className="packages-benefits">
                            {item.benefits.map(benefit=>{
                                return <li key={benefit} className="benefit">{benefit}</li>
                            })}
                        </ul>
                        <BuyButton color={index == 1 ? 2 : 1}/>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}