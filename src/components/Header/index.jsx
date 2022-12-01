import Logotypes from '../Logotypes'
import Text from '../Text'
import Topbar from '../Topbar'
import './Header.css'

export default function Header() {
    return(
        <section className="header">
            <Topbar/>
            <Text/>
            <img className='square square01' src="/src/assets/Square01.png" alt="NFT Square" />
            <img className='square square02' src="/src/assets/Square02.png" alt="NFT Square" />
            <img className='square square03' src="/src/assets/Square03.png" alt="NFT Square" />
            <img className='square square04' src="/src/assets/Square04.png" alt="NFT Square" />
            <img className='square square05' src="/src/assets/Square05.png" alt="NFT Square" />
            <img className='square square06' src="/src/assets/Square06.png" alt="NFT Square" />
            <Logotypes/>
        </section>
    )
}