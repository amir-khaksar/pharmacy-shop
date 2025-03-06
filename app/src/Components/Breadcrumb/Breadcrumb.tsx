import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = () => {
    return (
        <div className="mt-16">
            <section className="mb-8">
                <div className="container">
                    <div className="flex  py-6 px-8 rounded-2xl">
                        <div className="flex items-center justify-center w-[57.6px] h-[57.6px] bg-white rounded-2xl">
                            <FontAwesomeIcon icon={faHome} className="text-3xl text-[#909aa7]" />
                        </div>
                        <ul className="flex items-center mr-6">
                            <li className="list-none">
                                <a href="#" className="flex items-center text-2xl text-[#7f8187] hover:text-[#7f8187]">
                                    فروشگاه
                                    <FontAwesomeIcon icon={faAngleLeft} className="text-[#7f8187] text-2xl my-0 mx-[11.2px]" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Breadcrumb;
