import Navbar from "../Navbar/Navbar";
// import background from "../../assets/Images/pharmacy.jpg";
import Landing from "../Landing/Landing";
import {useEffect, useState} from "react";


const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <div className="relative">
            <div></div>
            {/* Navbar */}
            <div className="absolute top-0 left-0 w-full z-10">
                <Navbar/>
            </div>
            {/* Background Image */}
            {
                isMobile ? <div className="w-full h-[40vh] bg-center bg-no-repeat relative" style={{
                    backgroundImage: `url(/images/login.jpg)`,
                }}></div> : <div
                    className="h-[90vh] w-full bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: `url(/images/login.jpg)`,
                        clipPath:
                            "polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))",
                    }}
                ></div>
            }

            {/* Dark Overlay */}
            {
                isMobile ? "" : <div
                    style={{
                        clipPath:
                            "polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))",
                    }}
                    className="absolute inset-0 bg-[#111827] opacity-30"
                ></div>
            }

            {
                isMobile ? "" : <>
                    <span
                        className="absolute bottom-0 right-0 left-0 mx-auto text-secondary dark:text-bgDark w-[100px] h-[22]">
                <svg
                    className="text-secondary dark:text-bgDark"
                    width="100"
                    height="22"
                    viewBox="0 0 100 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
                    <span className="absolute bottom-0 right-0 left-1 mx-auto w-5 h-5">
                <svg
                    className="w-6 h-6 text-black dark:text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </span>
                </>
            }
            <Landing/>
        </div>
    );
}

export default Header
