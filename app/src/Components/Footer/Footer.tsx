import FooterItem from '../FooterItem/FooterItem'

export default function Footer() {
    return (
        <footer className="container w-full mt-12">
            <div className="mx-auto ">
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl py-8 px-4 sm:px-6 mb-12 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">

                        <FooterItem
                            title="درباره ما"
                            titleClass="text-xl font-bold text-purple-600 dark:text-purple-400"
                        >
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed lg:text-base lg:leading-loose mt-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, sequi?
                            </p>
                        </FooterItem>

                        <FooterItem
                            title="آخرین مطالب"
                            titleClass="text-xl font-bold text-purple-600 dark:text-purple-400"
                        >
                            <div className="space-y-3 mt-6">
                                {[...Array(5)].map((_, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="block text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors truncate"
                                    >
                                        عنوان مطلب نمونه {i + 1}
                                    </a>
                                ))}
                            </div>
                        </FooterItem>

                        <FooterItem
                            title="دسترسی سریع"
                            titleClass="text-xl font-bold text-purple-600 dark:text-purple-400"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 mt-6">
                                {[...Array(6)].map((_, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors px-2 py-1"
                                    >
                                        دسترسی سریع {i + 1}
                                    </a>
                                ))}
                            </div>
                        </FooterItem>
                    </div>
                </div>

                <div className="py-4 text-center border-t border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        کلیه حقوق برای {' '}
                        <a
                            href="https://sabzlearn.ir/"
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                        >
                            محیا
                        </a>{' '}
                        محفوظ است.
                    </span>
                </div>
            </div>
        </footer>
    )
}