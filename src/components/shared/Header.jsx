import logo from "@/assets/logo.png"
import Image from "next/image";
import { format } from "date-fns";
const Header = () => {
    return (
        <div className="text-center mx-auto py-8 space-y-3">
            <Image src={logo} alt="Logo" width={400}></Image>
            <p className="opacity-70">Journalism Without Fear or Favour</p>
            <p className="">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;