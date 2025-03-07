import {Typewriter} from "react-simple-typewriter";
// import SearchIcon from "@mui/icons-material/Search";

export default function Landing() {
    return (
        <div
            className="absolute top-[5%] sm:top-[18%] lg:top-[20%] inset-x-0 flex items-center justify-center font-sansBold mt-16">
            <div
                className="flex w-full px-4 sm:px-6 max-w-[440px] sm:max-w-[668px] lg:max-w-[840px] flex-col items-center justify-center">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mt-4 sm:mt-8 lg:mt-10">
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

                <p className="w-full text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 text-center text-blue-500 px-2">
                    به کمک چت هوشمند و فروشگاه به راحتی خود را درمان کنید
                </p>

                {/*<form*/}
                {/*    className="relative w-full max-w-[90vw] sm:max-w-[75vw] lg:max-w-[60vw] my-4 sm:my-6 bg-white rounded-full overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">*/}
                {/*    <input*/}
                {/*        className="w-full h-12 sm:h-14 lg:h-[70px] text-xs sm:text-sm lg:text-base text-gray-700 outline-none px-4 pr-16 placeholder-blue-400/80 focus:ring-2 focus:ring-purple-300"*/}
                {/*        type="text"*/}
                {/*        placeholder="دنبال چی میگردی؟"*/}
                {/*    />*/}
                {/*    <button*/}
                {/*        type="submit"*/}
                {/*        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 sm:p-3 bg-purple-500 text-white rounded-full transition-all hover:bg-purple-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"*/}
                {/*    >*/}
                {/*        <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6"/>*/}
                {/*    </button>*/}
                {/*</form>*/}

                <div className="mt-8 w-full max-w-[440px] sm:max-w-[668px] lg:max-w-[840px] space-y-4">

                    <div className="flex flex-wrap gap-3 justify-center">
                        <a href="#"
                           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            مشاهده محصولات
                        </a>
                        <button
                            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                            💬 مشاوره آنلاین
                        </button>
                    </div>

                    <div className="bg-purple-800/10 p-4 rounded-2xl border border-purple-500/20 text-center">
                        <p className="text-blue-600 font-medium mb-1">آدرس مرکز اصلی</p>
                        <p className="text-purple-600 text-sm">اصفهان، خیابان چهارباغ پایین، پلاک ۱</p>
                        <p className="text-purple-500 text-xs mt-2">ساعات کاری: ۸ صبح تا ۱۲ شب</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <p className="text-blue-600 text-sm">داروهای خاص</p>
                        </div>
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <p className="text-purple-600 text-sm">ارسال اکسپرس</p>
                        </div>
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <p className="text-blue-600 text-sm">چت آنلاین</p>
                        </div>
                        <div className="p-2 bg-purple-800/10 rounded-lg">
                            <p className="text-purple-600 text-sm">پشتیبانی ۲۴/۷</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}