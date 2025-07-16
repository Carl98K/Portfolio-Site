import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {

    const [isBurgerBtnClicked, setIsBurgerBtnClicked] = useState(false);

    function burgerBtnClick() {
        console.log("Burger!");

        if (!isBurgerBtnClicked) {
            setIsBurgerBtnClicked(true);
        }
        else {
            setIsBurgerBtnClicked(false);
        }

    }

    return (
        <nav id="home" className="flex flex-row items-center justify-around py-[60px]">
            <h1 className="max-[480px]:text-[1.5rem] max-[768px]:text-[1.8rem] max-[1024px]:text-[2rem] text-[2rem] font-poppins text-gray-700">Carl Abalos</h1>

            <div className="flex flex-row justify-center gap-[30px]">
                <Link to="#about" className="max-[1024px]:hidden hover:underline hover:underline-offset-[10px] hover:text-blue-500 text-[1.5rem] font-poppins text-gray-700 tracking-wide">About Me</Link>
                <Link to="#skills" className="max-[1024px]:hidden hover:underline hover:underline-offset-[10px] hover:text-blue-500 text-[1.5rem] font-poppins text-gray-700 tracking-wide">Skills</Link>
                <Link to="#projects" className="max-[1024px]:hidden hover:underline hover:underline-offset-[10px] hover:text-blue-500 text-[1.5rem] font-poppins text-gray-700 tracking-wide">Projects</Link>
                <Link to="#contact" className="max-[1024px]:hidden hover:underline hover:underline-offset-[10px] hover:text-blue-500 text-[1.5rem] font-poppins text-gray-700 tracking-wide">Contact</Link>

                <div className="max-[1024px]:block hidden" onClick={burgerBtnClick}>
                    <div className={"max-[480px]:my-[7px] max-[480px]:mx-[0px] max-[480px]:w-[30px] max-[480px]:h-[2px] max-[1024px]:my-[10px] max-[1024px]:w-[50px] max-[1024px]:h-[2px]" + (isBurgerBtnClicked ? " bg-orange-400 duration-[0.4s] translate-x-[0px] max-[480px]:translate-y-[9px] max-[1024px]:translate-y-[5px] rotate-[-45deg]" : " bg-black duration-[0.4s] translate-x-[0px] translate-y-[0px] rotate-[0deg]")}></div>

                    <div className={isBurgerBtnClicked ? "opacity-0 my-[7px] mx-[0px] max-[480px]:w-[30px] max-[480px]:h-[2px] bg-black duration-[0.4s]" : "opacity-100 my-[7px] mx-[0px] max-[480px]:w-[30px] max-[480px]:h-[2px] max-[1024px]:w-[50px] max-[1024px]:h-[2px] bg-black duration-[0.4s]"}></div>

                    <div className={"max-[480px]:my-[7px] max-[480px]:mx-[0px] max-[480px]:w-[30px] max-[480px]:h-[2px] max-[1024px]:my-[10px] max-[1024px]:w-[50px] max-[1024px]:h-[2px]" + (isBurgerBtnClicked ? " bg-orange-400 duration-[0.4s] translate-x-[0px] max-[480px]:translate-y-[-9px] max-[1024px]:translate-y-[-5px] rotate-[45deg]" : " bg-black duration-[0.4s] translate-x-[0px] translate-y-[0px] rotate-[0deg]")}></div>
                </div>
            </div>

            <div className={"bg-white border-2 border-black rounded-[3%] mr-[10px] max-[480px]:h-[190px] max-[480px]:w-[120px] max-[768px]:h-[220px] max-[768px]:w-[160px] max-[1024px]:h-[240px] max-[1024px]:w-[180px] max-[1024px]:flex hidden absolute flex-col justify-center items-center gap-[17px] ease-in-out duration-[0.5s] " + (isBurgerBtnClicked ? "max-[480px]:top-[120px] max-[480px]:right-[10px] max-[768px]:top-[130px] max-[768px]:right-[10px] max-[1024px]:top-[130px] max-[1024px]:right-[10px]" : "max-[480px]:top-[120px] max-[480px]:right-[-100%] max-[768px]:top-[130px] max-[768px]:right-[-100%] max-[1024px]:top-[130px] max-[1024px]:right-[-100%]")}>

                <Link to="#about" className="hover:underline hover:underline-offset-[3px] hover:text-orange-400 max-[480px]:text-[1.1rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] duration-[0.2s]">About Me</Link>

                <Link to="#skills" className="hover:underline hover:underline-offset-[3px] hover:text-orange-400 max-[480px]:text-[1.1rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] duration-[0.2s]">Skills</Link>

                <Link to="#projects" className="hover:underline hover:underline-offset-[3px] hover:text-orange-400 max-[480px]:text-[1.1rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] duration-[0.2s]">Projects</Link>

                <Link to="#contact" className="hover:underline hover:underline-offset-[3px] hover:text-orange-400 max-[480px]:text-[1.1rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] duration-[0.2s]">Contact</Link>
            </div>
        </nav>
    )
}