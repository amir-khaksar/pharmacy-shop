import {Typewriter} from "react-simple-typewriter";
import {Link} from "react-router-dom";

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


                <div className="mt-8 w-full max-w-[440px] sm:max-w-[668px] lg:max-w-[840px] space-y-4">

                    <div className="flex flex-wrap gap-3 justify-center mt-16">
                        <Link to="/shop"
                           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            مشاهده محصولات
                        </Link>
                        <Link to="/chat"
                            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                            💬 مشاوره آنلاین
                        </Link>
                    </div>

                    <div className="bg-purple-800/10 p-4 rounded-2xl border border-purple-500/20 mt-12 text-center">
                        <p className="text-blue-600 font-medium mb-1">آدرس مرکز اصلی</p>
                        <p className="text-purple-600 text-sm">اصفهان، خیابان چهارباغ پایین، پلاک ۱</p>
                        <p className="text-purple-500 text-xs mt-2">ساعات کاری: ۸ صبح تا ۱۲ شب</p>
                    </div>
                </div>

            </div>
        </div>
    );
}