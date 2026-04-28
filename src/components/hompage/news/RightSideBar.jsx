import { FaFacebook, FaGoogle } from "react-icons/fa";


const RightSideBar = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className="flex flex-col gap-2 mt-5">
                <button className="btn border-blue-500 text-blue-500 flex justify-center items-center gap-2"><FaGoogle></FaGoogle>Login with Goggle</button>
                <button className="btn flex justify-center items-center gap-2"><FaFacebook></FaFacebook>Login with Facebook</button>
            </div>
        </div>
    );
};

export default RightSideBar;