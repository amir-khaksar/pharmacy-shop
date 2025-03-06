import {Typewriter} from "react-simple-typewriter";
import SearchIcon from "@mui/icons-material/Search";

export default function Landing() {
    return (
        <div
            className="absolute top-[5%] sm:top-[20%] lg:top-[25%] inset-x-0 flex items-center justify-center font-sansBold mt-16">
            <div
                className="flex w-full px-4 sm:px-6 max-w-[440px] sm:max-w-[668px] lg:max-w-[840px] flex-col items-center justify-center">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary mt-4 sm:mt-8 lg:mt-10">
                    <Typewriter
                        words={["سالم بمانید, ما در کنار شما هستیم!"]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={3000}
                    />
                </h1>

                <p className="w-full text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 text-center text-gray-300 px-2">
                    به کمک چت هوشمند و فروشگاه به راحتی خود را درمان کنید
                </p>

                <form
                    className="relative w-full max-w-[440px] sm:max-w-[668px] lg:max-w-[840px] my-4 sm:my-6 bg-white rounded-full overflow-hidden">
                    <input
                        className="w-full h-12 sm:h-14 lg:h-[70px] text-sm sm:text-base lg:text-[18px] text-gray-500 outline-none px-4 pr-16"
                        type="text"
                        placeholder="دنبال چی میگردی؟"
                    />
                    <button
                        type="submit"
                        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 sm:p-3 bg-primary text-white rounded-full transition-all hover:bg-primary-dark"
                    >
                        <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6"/>
                    </button>
                </form>
            </div>
        </div>
    );
}
