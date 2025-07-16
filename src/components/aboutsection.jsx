import educPic from "/src/assets/images/Education.png";
import workPic from "/src/assets/images/Work.png";

export default function AboutMe() {
    return (
        <section id="about" className="max-[768px]:mt-[250px] mt-[400px]">
            <h2 className="max-[480px]:text-[1.8rem] max-[600px]:text-[2rem] max-[768px]:text-[2.3rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-center text-black font-bold tracking-wide">About Me</h2>

            <div className="max-[480px]:mt-[100px] mt-[150px] flex flex-col items-center">

                <div className="flex max-[480px]:flex-col max-[600px]:flex-col max-[768px]:flex-col max-[1024px]:flex-col flex-row justify-center max-[480px]:items-center max-[600px]:items-center max-[768px]:items-center max-[480px]:gap-10 max-[600px]:gap-10 max-[768px]:gap-10 max-[1024px]:gap-15 gap-30">
                    <div className="border-2 border-gray-600 max-[480px]:rounded-[30px] rounded-[50px] max-[480px]:w-[280px] max-[600px]:w-[330px] max-[768px]:w-[380px] w-[380px] max-[480px]:h-[170px] max-[600px]:h-[200px] max-[768px]:h-[210px] h-[230px] flex flex-col items-center justify-center gap-2">
                        <img className="max-[480px]:w-[2rem] max-[600px]:w-[2.1rem] max-[768px]:w-[2.2rem] w-[2.5rem]" src={educPic} alt="" />
                        <h3 className="max-[480px]:text-[1rem] max-[600px]:text-[1.15rem] max-[768px]:text-[1.2rem] text-[1.25rem] font-semibold tracking-wide">Experience</h3>
                        <p className="max-[480px]:text-[0.9rem] max-[600px]:text-[1rem] max-[768px]:text-[1.1rem] text-[1.15rem] tracking-wide text-gray-700 text-center">3+ years Game Developer</p>
                    </div>

                    <div className="border-2 border-gray-600 max-[480px]:rounded-[30px] rounded-[50px] max-[480px]:w-[280px] max-[600px]:w-[330px] max-[768px]:w-[380px] w-[380px] max-[480px]:h-[170px] max-[600px]:h-[200px] max-[768px]:h-[210px] h-[230px] flex flex-col items-center justify-center gap-2">
                        <img className="max-[480px]:w-[2rem] max-[600px]:w-[2.1rem] max-[768px]:w-[2.2rem] w-[2.5rem]" src={workPic} alt="" />
                        <h3 className="max-[480px]:text-[1rem] max-[600px]:text-[1.15rem] max-[768px]:text-[1.2rem] text-[1.25rem] font-semibold tracking-wide">Education</h3>
                        <p className="max-[480px]:text-[0.9rem] max-[600px]:text-[1rem] max-[768px]:text-[1.1rem] text-[1.15rem] tracking-wide text-gray-700 text-center">B.S Entertainment and Multimedia Computing</p>
                    </div>
                </div>

                <p className="max-[480px]:mt-[60px] max-[600px]:mt-[60px] max-[768px]:mt-[100px] max-[1024px]:mt-[120px] mt-[130px] max-[480px]:w-[270px] max-[600px]:w-[420px] max-[768px]:w-[500px] max-[1024px]:w-[700px] w-[1100px] text-justify max-[480px]:text-[0.85rem] max-[600px]:text-[1rem] max-[768px]:text-[1.15rem] max-[1024px]:text-[1.2rem] text-[1.25rem] text-gray-700 tracking-normal max-[480px]:leading-8 max-[600px]:leading-11 max-[768px]:leading-12 max-[1024px]:leading-12.5 leading-15">I'm an aspiring web developer with a passion for bringing creative ideas to life through code. My journey began with a fascination for how websites are built and also their usefulness to the users, leading me to dive headfirst into <span className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.35rem] max-[1024px]:text-[1.4rem] text-[1.5rem] font-bold">HTML</span>, <span className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.35rem] max-[1024px]:text-[1.4rem] text-[1.5rem] font-bold">CSS</span>, and <span className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.35rem] max-[1024px]:text-[1.4rem] text-[1.5rem] font-bold">JavaScript </span><span className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.35rem] max-[1024px]:text-[1.4rem] text-[1.5rem] font-bold">(ES6+)</span>. I've solidified my frontend skills by learning <span className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.35rem] max-[1024px]:text-[1.4rem] text-[1.5rem] font-bold">React</span> and <span className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.35rem] max-[1024px]:text-[1.4rem] text-[1.5rem] font-bold">Tailwind CSS</span>, building a strong foundation in creating responsive and stylish websites..</p>
            </div>

        </section>
    )
}