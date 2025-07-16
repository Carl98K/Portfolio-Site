import emailPic from "/src/assets/images/email.png";
import linkedinPic from "/src/assets/images/linkedin.png";

export default function Contact() {
    return (
        <footer id="contact" className="max-[768px]:mt-[250px] mt-[300px] pb-[20px] flex flex-col justify-center items-center">
            <h2 className="max-[480px]:text-[1.8rem] max-[600px]:text-[2rem] max-[768px]:text-[2.3rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-center text-black font-bold tracking-wide">Contact Me</h2>

            <div className="mt-[80px] flex max-[1024px]:flex-col flex-row justify-center items-center gap-10">
                <div className="flex flex-row justify-center items-center gap-2 text-darkergray">
                    <img className="max-[480px]:w-[25px] max-[600px]:w-[29px] max-[1024px]:w-[31px] w-[33px]" src={emailPic} alt="" />
                    <p className="max-[480px]:text-[1rem] max-[600px]:text-[1.1rem] max-[1024px]:text-[1.2rem] text-[1.3rem]">carldrewx@gmail.com</p>
                </div>

                <div className="flex flex-row justify-center items-center gap-2 text-darkergray">
                    <img className="max-[480px]:w-[25px] max-[600px]:w-[29px] max-[1024px]:w-[31px] w-[33px]" src={linkedinPic} alt="" />
                    <p className="max-[480px]:text-[1rem] max-[600px]:text-[1.1rem] max-[1024px]:text-[1.2rem] text-[1.3rem]"><a href="https://www.linkedin.com/in/carl-abalos">linkedin</a></p>
                </div>
            </div>

            <p className="max-[1024px]:mt-[80px] mt-[100px] max-[480px]:text-[0.9rem] max-[600px]:text-[1rem] max-[1024px]:text-[1.1rem] text-[1.15rem] text-gray-600">Copyright &copy; 2025</p>
        </footer>
    )
}