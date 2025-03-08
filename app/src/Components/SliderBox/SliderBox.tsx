import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faUsers, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProductBox = () => {
    return (
        <div className="w-full p-2 group transition-all duration-300 hover:scale-[1.02]">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                    <img
                        src="/images/python.png"
                        alt="Product img"
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white hover:text-primary transition-colors">
                        <a href="#">قرص سر درد</a>
                    </h3>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faChalkboardTeacher}
                                className="text-gray-500 dark:text-gray-400 text-lg"
                            />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">قرص های مسکن</span>
                        </div>
                        <div className="flex space-x-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faUsers}
                                className="text-gray-500 dark:text-gray-400 text-lg"
                            />
                            <span className="text-gray-600 dark:text-gray-300">500+</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg text-lg font-bold">
                            ۲$
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <a
                        href="#"
                        className="flex items-center justify-center p-3 text-sm font-semibold bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            افزودن به سبد خرید
                        </span>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="mr-2 text-blue-500 ml-1 transition-transform group-hover:-translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;