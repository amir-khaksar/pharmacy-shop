import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faUsers, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProductBox = () => {
    return (
        <div className="w-full p-2 sm:w-[45%] lg:w-[30%] xl:w-[30%] 2xl:w-[24%] group">
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