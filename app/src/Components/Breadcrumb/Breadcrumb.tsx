import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Breadcrumb = () => {
    return (
        <div className="container mt-52 sm:mt-32 lg:mt-20 -mb-16">
            <section className="mb-8">
                <div className="">
                    <div className="flex  py-6 px-1 rounded-2xl">
                        {/*<div className="flex items-center justify-center w-[57.6px] h-[57.6px] bg-white rounded-2xl">*/}
                        {/*    <FontAwesomeIcon icon={faShoppingCart} className="text-3xl text-[#909aa7]" />*/}
                        {/*</div>*/}
                        <ul className="flex items-center">
                            <li className="list-none">
                                <Link to="/shop" className="flex items-center text-[clamp(1rem,2vw,1.75rem)] text-[#7f8187] hover:text-[#7f8187]">
                                    فروشگاه
                                    <FontAwesomeIcon icon={faAngleLeft} className="text-[#7f8187] text-2xl my-0 mx-[11.2px]" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Breadcrumb;
