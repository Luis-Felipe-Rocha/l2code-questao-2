import './Card.css'

export default function Card({img, h2, price, time, people, likes}) {
    return(
        <section className='card'>
            <img className='card__img' src={img} alt="NFT image" />
            <div>
                <div className='card-container card__title'>
                    <h2>{h2}</h2>
                    <span>{`${price} ETH`}</span>
                </div>
                <div className='card-container card__time'>
                    <img src="/src/assets/Clock.png" alt="Clock Icon" />
                    <p>{`${time} min left`}</p>
                </div>
                <hr />
                <div className='card-container card__social'>
                    <div>
                        <img src="/src/assets/People/person13.png" alt="" />
                        <img src="/src/assets/People/person5.png" alt="" />
                        <img src="/src/assets/People/person7.png" alt="" />
                        <img src="/src/assets/People/person4.png" alt="" />
                    </div>
                    <p>{`${people} people are binding`}</p>
                    <div className='social__likes'>
                        <img src="/src/assets/Heart.png" alt="Heart Icon" />
                        <p>{`${likes}`}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}