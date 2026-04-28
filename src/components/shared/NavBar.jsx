import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";
const NavBar = () => {
    const default_category_id = "01";
    return (
        <div className="flex justify-between items-center container mx-auto mt-6">
            <div className="w-30"></div>
            <ul className="flex gap-6 text-gray-700">
                <li><NavLink href={`/category/${default_category_id}`}>Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className="flex items-center gap-2">
                <Link href="/profile"><Image src={userAvatar} alt="User Avatar" width={40} height={40}></Image></Link>
                <button className="btn bg-gray-700 text-white"><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;