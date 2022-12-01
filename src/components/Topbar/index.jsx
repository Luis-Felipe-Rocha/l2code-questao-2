import './Topbar.css'
import Button from '../Button'

export default function Topbar() {
    return (
        <section className='topbar'>
            <div className='logo'>
                <img src="src/assets/Logo.png" alt="Logo" />
            </div>
            <div className='menu'>
                <a href="">Auctions</a>

                <a href="">Roadmap</a>

                <a href="">Discover</a>

                <a href="">Community</a>
            </div>
            <div className='button_right'>
                <Button primary={false} text='Contact'/>
                <Button primary text='My account'/>
                
            </div>
        </section>
    )
}