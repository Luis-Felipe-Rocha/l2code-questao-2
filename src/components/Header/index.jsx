import nft_text from "./nft_text.svg"
import TopBar from "../TopBar";
export default function Header() {
    return (
        <header className="">
            <TopBar />
            <img className="m-auto mt-80 z-10 relative" src={nft_text} alt="NFT Text" />
        </header>
    )
}