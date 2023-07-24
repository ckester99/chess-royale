import { LiaHomeSolid } from "react-icons/lia";
import { FaRegChessKnight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
        <div className="h-16 w-screen">
            <nav className=" bg-zinc-800 text-green-600 fixed t-0 p-4 w-screen flex flex-row justify-end gap-3.5">
                <NavBarIcon navRoute={`/old`} icon={<FaRegChessKnight size={"32"} />}></NavBarIcon>
                <NavBarIcon navRoute={`/old`} icon={<CgProfile size={"32"} />}></NavBarIcon>
                <NavBarIcon navRoute={`/old`} icon={<LiaHomeSolid size={"32"} />}></NavBarIcon>
            </nav>
            <div className=" w-full fixed justify-center align-middle text-center pt-6 text-4xl pointer-events-none">
                <h1>Chess Royale!</h1>
            </div>
        </div>
    );
}

function NavBarIcon({ navRoute, icon }) {
    return (
        <a
            href={navRoute}
            className="bg-slate-200 h-16 w-16 flex flex-col justify-center items-center rounded-[2rem] hover:rounded-2xl transition-all duration-300 ease-linear">
            {icon}
        </a>
    );
}
