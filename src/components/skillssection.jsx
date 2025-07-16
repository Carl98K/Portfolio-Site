import Csharp from "./icons/csharpicon"
import Css from "./icons/cssicon"
import Github from "./icons/githubicon"
import Git from "./icons/giticon"
import Html from "./icons/htmlicon"
import Javascript from "./icons/javascripticon"
import React from "./icons/reacticon"
import SourceTree from "./icons/sourcetreeicon"
import TailwindIcon from "./icons/tailwindicon"
import Unity from "./icons/unityicon"
import VsCode from "./icons/vscodeicon"


export default function Skills() {
    return (

        <section id="skills" className="mt-[300px] flex flex-col justify-center items-center">
            <h2 className="max-[480px]:text-[1.8rem] max-[600px]:text-[2rem] max-[768px]:text-[2.3rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-center text-black font-bold tracking-wide">Skills</h2>

            <div className="max-[480px]:mt-[100px] max-[768px]:mt-[100px] max-[1024px]:mt-[150px] mt-[150px] border-2 border-gray-700 rounded-[30px] max-[480px]:w-[290px] max-[768px]:w-[450px] max-[1024px]:w-[710px] w-[950px] max-[480px]:h-[550px] max-[1024px]:h-[650px] h-[680px] flex flex-row flex-wrap justify-center items-center max-[480px]:gap-x-[40px] max-[768px]:gap-x-[40px] max-[1024px]:gap-x-[80px] gap-x-[120px]">

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Html />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">HTML</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Css />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">CSS</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Javascript />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">Javascript</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Csharp />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">C#</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <React />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">React</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <TailwindIcon />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">Tailwind</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Git />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">Git</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Github />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">Github</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <SourceTree />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">SourceTree</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <VsCode />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">Vs Code</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        <Unity />
                    </div>
                    <p className="max-[480px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.4rem] text-[1.5rem] text-darkergray font-semibold">Unity Engine</p>
                </div>
            </div>

        </section>

    )
}