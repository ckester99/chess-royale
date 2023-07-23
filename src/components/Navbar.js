import Link from "next/link";
import { LiaHomeSolid } from "react-icons/lia";

export default function Navbar() {
    return (
        <div className="h-12">
            <nav className=" bg-zinc-800 text-green-600 fixed t-0 p-4 w-screen flex flex-row-reverse gap-2">
                <NavBarIcon navRoute={`/old`} icon={<LiaHomeSolid size={"32"} />}></NavBarIcon>
                <NavBarIcon navRoute={`/old`} icon={<LiaHomeSolid size={"32"} />}></NavBarIcon>
                <NavBarIcon navRoute={`/old`} icon={<LiaHomeSolid size={"32"} />}></NavBarIcon>
            </nav>
        </div>
    );
}

function NavBarIcon({ navRoute, icon }) {
    return (
        <a href={navRoute} className="bg-slate-800 h-12 w-12 flex flex-col justify-center items-center">
            {icon}
        </a>
    );
}
