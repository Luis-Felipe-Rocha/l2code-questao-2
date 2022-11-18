import Logo from "../Logo";
import Menu from "../Menu";


export default function TopBar() {
    return (
        <header className="flex justify-between items-center h-32 ">
            <Logo />
            <Menu />
            <div className="flex gap-4">
                <button className="w-28 h-12 rounded-xl p-3 bg-transparent text-[#7780A1] border-2 border-[#7780A1] font-['Sora'] font-semibold text-xs">Contact</button>
                <button className="w-36 h-12 rounded-xl p-3 bg-gradient-to-r from-[#4745D0] to-[#2A27C9] text-white font-['Sora'] font-semibold text-xs mr-10">My account</button>
            </div>
        </header>
        
    )
}