import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChalkboardTeacher, faUsers, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const ProductBox = () => {
    return (
        <div className="w-1/4">
            <div>
                <div
                    className="bg-white shadow rounded-2xl my-8 mx-0 transition-all ease hover:transform -translate-y-[9.6px]">
                    <a href="#">
                        <img src="/images/img.jpg" alt="Product img" className="w-full rounded-t-lg"/>
                    </a>
                    <div className="py-0 px-[19.2px]">
                        <a href="#" className="block py-4">قرص سر درد</a>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faChalkboardTeacher} className="text-[#6c757d] text-[28.8px]"/>
                                <a href="#" className="text-[#6c757d]">قرص های مسکن</a>
                            </div>
                            <div className="course-box__rating">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4">
                            <div className="course-box__users">
                                <FontAwesomeIcon icon={faUsers} className="text-[#6c757d] text-[25.6px]"/>
                                <span className="text-[#6c757d] text-[22.4px]">500</span>
                            </div>
                            <span className="text-[#9c9c9c] text-[28.8px]">2$</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center py-[20.8px] border-t border-[#e8e8e8]">
                        <a href="#" className="flex items-center justify-center text-primary text-sm font-bold">
                            مشاهده اطلاعات
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-[30.4px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;
