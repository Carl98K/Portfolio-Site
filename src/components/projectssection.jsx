import { HashLink as Link } from "react-router-hash-link";

export default function Projects() {
    return (

        <section id="projects" className="mt-[300px] flex flex-col justify-center items-center">
            <h2 className="max-[480px]:text-[1.8rem] max-[600px]:text-[2rem] max-[768px]:text-[2.3rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-center text-black font-bold tracking-wide">Projects</h2>

            <div className="mt-[100px] w-[1300px] flex flex-wrap max-[1024px]:flex-col flex-row justify-center max-[1024px]:items-center gap-10">

                <div className="border-2 border-gray-600 rounded-[15px] shadow-xl/20 bg-white max-[480px]:w-[280px] max-[768px]:w-[320px] w-[400px] max-[480px]:h-[400px] max-[768px]:h-[450px] h-[550px] flex flex-col justify-start items-center max-[480px]:gap-2 max-[768px]:gap-3 gap-5">
                    <img className="rounded-[7px] max-[480px]:w-[260px] max-[768px]:w-[305px] w-[390px] max-[480px]:h-[160px] max-[768px]:h-[190px] h-[240px] mx-1 mt-1" src="/src/assets/Gym Website.png" alt="" />

                    <p className="mt-[40px] max-[480px]:text-[1.3rem] max-[768px]:text-[1.4rem] text-[1.6rem] text-black font-semibold">Gym Fitness Website</p>

                    <p className="max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1rem] text-grayish">HTML, CSS, Javascript</p>

                    <Link to="https://carl98k.github.io/Gym-Responsive-Website/"> <button className="hover:bg-blue-500 hover:text-white mt-[40px] border-2 border-grayish rounded-3xl max-[480px]:w-[90px] max-[768px]:w-[100px] max-[480px]:h-[40px] max-[768px]:h-[45px] w-[120px] h-[50px] max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1.2rem] text-black tracking-wide">Demo</button></Link>

                </div>

                <div className="border-2 border-gray-600 rounded-[15px] shadow-xl/20 bg-white max-[480px]:w-[280px] max-[768px]:w-[320px] w-[400px] max-[480px]:h-[400px] max-[768px]:h-[450px] h-[550px] flex flex-col justify-start items-center max-[480px]:gap-2 max-[768px]:gap-3 gap-5">
                    <img className="rounded-[7px] max-[480px]:w-[260px] max-[768px]:w-[305px] w-[390px] max-[480px]:h-[160px] max-[768px]:h-[190px] h-[240px] mx-1 mt-1" src="/src/assets/To do.png" alt="" />

                    <p className="mt-[40px] max-[480px]:text-[1.3rem] max-[768px]:text-[1.4rem] text-[1.6rem] text-black font-semibold">To Do List App</p>

                    <p className="max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1rem] text-grayish">HTML, CSS, Javascript, React, Tailwind</p>

                    <Link to="https://carl98k.github.io/To-Do-List-App/"><button className="hover:bg-blue-500 hover:text-white mt-[40px] border-2 border-grayish rounded-3xl max-[480px]:w-[90px] max-[768px]:w-[100px] max-[480px]:h-[40px] max-[768px]:h-[45px] w-[120px] h-[50px] max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1.2rem] text-black tracking-wide">Demo</button></Link>


                </div>

                <div className="border-2 border-gray-600 rounded-[15px] shadow-xl/20 bg-white max-[480px]:w-[280px] max-[768px]:w-[320px] w-[400px] max-[480px]:h-[400px] max-[768px]:h-[450px] h-[550px] flex flex-col justify-start items-center max-[480px]:gap-2 max-[768px]:gap-3 gap-5">
                    <img className="rounded-[7px] max-[480px]:w-[260px] max-[768px]:w-[305px] w-[390px] max-[480px]:h-[160px] max-[768px]:h-[190px] h-[240px] mx-1 mt-1" src="/src/assets/Weather.png" alt="" />

                    <p className="mt-[40px] max-[480px]:text-[1.3rem] max-[768px]:text-[1.4rem] text-[1.6rem] text-black font-semibold">Weather App</p>

                    <p className="max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1rem] text-grayish">HTML, CSS, Javascript</p>

                    <Link to="https://carl98k.github.io/WeatherApp/"><button className="hover:bg-blue-500 hover:text-white mt-[40px] border-2 border-grayish rounded-3xl max-[480px]:w-[90px] max-[768px]:w-[100px] max-[480px]:h-[40px] max-[768px]:h-[45px] w-[120px] h-[50px] max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1.2rem] text-black tracking-wide">Demo</button></Link>


                </div>

                <div className="border-2 border-gray-600 rounded-[15px] shadow-xl/20 bg-white max-[480px]:w-[280px] max-[768px]:w-[320px] w-[400px] max-[480px]:h-[400px] max-[768px]:h-[450px] h-[550px] flex flex-col justify-start items-center max-[480px]:gap-2 max-[768px]:gap-3 gap-5">
                    <img className="rounded-[7px] max-[480px]:w-[260px] max-[768px]:w-[305px] w-[390px] max-[480px]:h-[160px] max-[768px]:h-[190px] h-[240px] mx-1 mt-1" src="/src/assets/RockPaperScissor.png" alt="" />

                    <p className="mt-[40px] max-[480px]:text-[1.3rem] max-[768px]:text-[1.4rem] text-[1.6rem] text-black font-semibold">Rock Paper Scissor Game</p>

                    <p className="max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1rem] text-grayish">HTML, CSS, Javascript</p>

                    <Link to="https://carl98k.github.io/Rock-Paper-Scissor/"><button className="hover:bg-blue-500 hover:text-white mt-[40px] border-2 border-grayish rounded-3xl max-[480px]:w-[90px] max-[768px]:w-[100px] max-[480px]:h-[40px] max-[768px]:h-[45px] w-[120px] h-[50px] max-[480px]:text-[0.8rem] max-[768px]:text-[0.9rem] text-[1.2rem] text-black tracking-wide">Demo</button></Link>


                </div>

            </div>

        </section>

    )
}