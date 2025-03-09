import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

type BreadcrumbProps = {
    links: {
        id: number;
        title: string;
        to: string;
    }[];
};

const Breadcrumb = ({ links }: BreadcrumbProps) => {

    return (
        <div className="container">
            <section className="mb-8">
                <div className="">
                    <div className="flex  py-6 px-1 rounded-2xl">
                        <ul className="flex items-center">
                            {
                                links.map((link) => (
                                    <li key={link.id} className="list-none">
                                        <Link to={link.to} className="flex items-center text-[clamp(1rem,2vw,1.75rem)] text-[#7f8187] hover:text-[#7f8187]">
                                            {link.title}
                                            <FontAwesomeIcon icon={faAngleLeft} className="text-[#7f8187] text-2xl my-0 mx-[11.2px]" />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Breadcrumb;
