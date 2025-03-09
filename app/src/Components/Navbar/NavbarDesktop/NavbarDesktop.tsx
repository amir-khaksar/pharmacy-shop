import {useContext} from "react";
import {ThemeContext} from "../../../Context/ThemeContext";
import {Link} from "react-router-dom";
import ShoppingCart from "../../ShoppingCart/ShoppingCart.tsx";

export default function NavbarDesktop() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        console.error(
            "ThemeContext is undefined. Make sure ThemeProvider is wrapping the component."
        );
        return null;
    }

    const {toggleDarkMode} = themeContext;

    return (
        <header
            className="flex items-center justify-between w-[85%] h-24 mx-auto backdrop-blur-[35px] mt-5 rounded-3xl px-3 py-5 shadow-xs">
            <div className="flex items-center justify-between w-full">
                <nav className="flex items-center justify-between gap-x-10">
                    <div>
                        <img src="" alt=""/>
                    </div>
                    <ul className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300">
                        <li>
                            <Link to="/">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link to="/shop">فروشگاه</Link>
                        </li>
                        <li>
                            <Link to="/about-us">درباره ما</Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 ">
                    <div className="flex items-center gap-x-4 lg:gap-x-5">
                        <div className="relative group">
                            <div className="py-3 cursor-pointer text-gray-300 hover:text-primary transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </div>
                            <ShoppingCart/>
                        </div>

                        <div
                            className="cursor-pointer text-gray-300 hover:text-primary transition-colors"
                            onClick={toggleDarkMode}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 inline-block dark:hidden"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 hidden dark:inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <span className="block w-px h-14 bg-white/20 font-medium"></span>
                    <Link
                        className="flex items-center gap-2.5 text-gray-300 hover:text-primary transition-colors"
                        to="/auth"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                            />
                        </svg>
                        <span className="hidden xl:inline-block font-medium ml-2">ورود | ثبت نام</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
