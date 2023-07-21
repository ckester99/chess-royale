import Link from "next/link";
import { LiaHomeSolid } from "react-icons/lia";

export default function Navbar() {
    return (
        <nav className="">
            <Icon navRoute={"/old"} img={LiaHomeSolid}></Icon>
        </nav>
    );
}

function Icon({ navRoute, img }) {
    return (
        <Link href={`${navRoute}`}>
            <LiaHomeSolid></LiaHomeSolid>
        </Link>
    );
}
