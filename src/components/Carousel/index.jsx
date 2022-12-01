import Card from '../Card'
import './Carousel.css'

export default function Carousel() {
    return(
        <section className='carousel-section'>
            <h1>Latest live auctions</h1>
            <Card img='/src/assets/Cards/Item1.png' h2='Dui accumsan leo vestibulum ornare eu' price={1.11} time={'22:59'} people={101} likes={570}/>
        </section>
    )
}