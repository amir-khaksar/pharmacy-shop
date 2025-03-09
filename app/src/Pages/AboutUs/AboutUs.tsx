import Navbar from "../../Components/Navbar/Navbar.tsx";

export default function AboutPage() {
    return (
        <>
            <Navbar/>
            <div className="min-h-screen  py-16">
                <div className="container mx-auto px-4 lg:px-8">

                    <h1 className="text-4xl lg:text-5xl font-bold text-purple-500 dark:text-purple-400 mb-8 text-center">
                        درباره ما
                    </h1>

                    <div className="max-w-3xl mx-auto mb-16">
                        <p className="text-lg lg:text-xl text-blue-500 dark:text-blue-400 leading-relaxed text-center">
                            داروخانه آنلاین ما با بیش از یک دهه تجربه در حوزه سلامت دیجیتال،
                            همواره تلاش کرده با ارائه جدیدترین داروها و محصولات بهداشتی با تضمین اصالت کالا،
                            همراه همیشگی سلامت خانواده‌های ایرانی باشد. ما با بهره‌گیری از تکنولوژی روز
                            و تیم متخصص داروسازی، نیازهای سلامت شما را به سریع‌ترین شکل ممکن برطرف می‌کنیم.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-500 mb-8 text-center">
                            امکانات ویژه ما
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "ارسال فوری",
                                    desc: "تحویل دارو در کمتر از ۲ ساعت در تهران",
                                    color: "bg-purple-500"
                                },
                                {
                                    title: "مشاوره تخصصی",
                                    desc: "۲۴ ساعته با داروسازان مجرب",
                                    color: "bg-blue-500"
                                },
                                {
                                    title: "ضمانت اصالت",
                                    desc: "تضمین کیفیت و اصالت تمام محصولات",
                                    color: "bg-purple-600"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl text-white ${item.color} shadow-lg transition-transform hover:scale-105`}
                                >
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-sm opacity-90">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-purple-500/20">
                            <h2 className="text-2xl font-bold text-purple-500 dark:text-purple-400 mb-4">
                                امیرمحمد خاکسار
                            </h2>
                            <p className="text-blue-500 dark:text-blue-400 mb-4">
                                توسعه دهنده سمت کاربر(Front-End)
                            </p>
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl">
                                    <img className={'rounded-full'} src="/images/amir.jpg" alt="profile"/>
                                </div>
                                <div>
                                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                                        فناوری ها : Reactjs, tailwindcss, react-query, zustand
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-blue-500/20">
                            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-4">
                                ماهان رضایی
                            </h2>
                            <p className="text-purple-500 dark:text-purple-400 mb-4">
                                توسعه دهنده سمت سرور(back-end)
                            </p>
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                                    mh-r
                                </div>
                                <div>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                                        فناوری ها: Django, drf, auth with JWT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
