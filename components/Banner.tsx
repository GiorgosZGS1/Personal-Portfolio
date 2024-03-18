import Image from "next/image";
import profileImg from "../public/imges/imgProfile.png"

const Banner = () => {
    return (
        <div className="wrapper flex flex-col md:flex-row items-center gap-10 ">
            {/* Profile Image */}
            <div className=" w-44 h-44 rounded-full bg-gray-900">
                <Image className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover " 
                src={profileImg} 
                alt="profileImg"/>
            </div>
            {/* Description */}
            <div className="w-3/4 flex flex-col items-center md:items-start gap-3">
                <h1 className="text-3xl md:text-5xl text-center text-gray-200 font-bold">Giorgos Zagaris</h1>
                <h3 className="text-xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">software engineer</h3>
                <p className="text-md  tracking-wider text-center md:text-left">Welcome to my website! I am  passionate about software development and tech. </p>
            </div>
        </div>
    );
}

export default Banner;