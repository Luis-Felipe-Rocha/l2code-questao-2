import Button from "../Button";
import './Footer.css'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container left">
                <img src="/src/assets/Logo.png" alt="NFT Market Logo" />
                <div className="left__list">
                    <a href="">Support</a>
                    <a href="">Term of service</a>
                    <a href="">License</a>
                </div>
            </div>
            <div className="footer-container mid">
                <div className="mid__list">
                    <a href="">Auctions</a>
                    <a href="">Roadmap</a>
                    <a href="">Discover</a>
                    <a href="">Community</a>
                </div>
                <Button primary text='My account'/>
                <div className="mid__icons">
                    <img src="/src/assets/Facebook.png" alt="Facebook Icon" />
                    <img src="/src/assets/LinkedIn.png" alt="LinkedIn Icon" />
                    <img src="/src/assets/Github.png" alt="Github Icon" />
                    <img src="/src/assets/Twitter.png" alt="Twitter Icon" />
                    <img src="/src/assets/Instagram.png" alt="Instagram Icon" />
                </div>
            </div>
            <div className="footer-container right">
                <p>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                <div className="right__div">
                    <input className="right__input" placeholder='Newsletter' type="text" maxLength={36}/>
                    <span className="signin">Sign in</span>
                </div>
            </div>
        </footer>
    )
}