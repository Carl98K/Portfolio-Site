import { HashLink as Link } from "react-router-hash-link";

export default function MainSection() {
    return (
        <section className="max-[480px]:mt-[80px] max-[768px]:mt-[200px] max-[1024px]:mt-[200px] mt-[250px] max-[480px]:flex-col max-[768px]:flex-col max-[1024px]:flex-col flex flex-row justify-center items-center gap-[50px]">
            <div>
                <img className="border-4 rounded-[50%] max-[480px]:w-[150px] max-[768px]:w-[250px] max-[1024px]:w-[300px] max-[1280px]:w-[350px] w-[390px]" src="./src/assets/images/My Pic.jpg" alt="sample picture of developer" />
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center max-[480px]:gap-2 max-[768px]:gap-2 max-[1024px]:gap-2">
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.25rem] text-[1.2rem] font-bold text-gray-500">Hello, I'm</p>
                    <h2 className="max-[480px]:text-[2.7rem] max-[768px]:text-[4rem] max-[1024px]:text-[5rem] max-[1280px]:text-[6rem] text-[7rem] text-center font-bold text-gray-900 tracking-wide">Carl Abalos</h2>
                    <p className="animate-pulse max-[480px]:text-[1.15rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] text-[1.3rem] font-bold text-gray-500 tracking-wide">Aspiring web developer</p>
                </div>

                <div className="mt-[50px] flex max-[480px]:flex-col max-[768px]:flex-col max-[1024px]:flex-col flex-row justify-center items-center gap-4">

                    <Link to="https://drive.google.com/file/d/18TlVk1NKzfUgxOMt3rsgulKgdIFVWWLC/view?usp=sharing"><button className="hover:bg-blue-600 cursor-pointer bg-blue-500 border-1 border-black rounded-[30px] p-[10px] max-[480px]:w-[135px] max-[768px]:w-[140px] max-[1024px]:w-[150px] w-[140px] max-[1024px]:h-[62px] h-[60px] font-bold max-[480px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] text-[1rem] text-gray-100">CV/Resume</button></Link>

                    <Link to="https://github.com/Carl98K"><button className="hover:bg-orange-500 cursor-pointer bg-orange-400 border-1 border-black rounded-[30px] p-[10px] max-[480px]:w-[135px] max-[768px]:w-[140px] max-[1024px]:w-[150px] w-[140px] max-[1024px]:h-[62px] h-[60px] font-bold max-[480px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] text-[1rem] text-gray-100">GitHub</button></Link>
                </div>
            </div>
        </section>
    )
}