import {useState} from 'react'
import {useContext} from "react";
import {ThemeContext} from "../../../Context/ThemeContext.tsx";
import {Link} from "react-router-dom";


export default function NavbarMobile() {

    const {toggleDarkMode} = useContext(ThemeContext);


    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

    return (
        <header className='flex md:hidden items-center justify-between  h-16 bg-white dark:bg-bgDark px-4'>
            {/* Nav Icon */}
            <div className={`${isOpenMenu && "hidden"}`}>
                <svg onClick={() => {setIsOpenMenu(prevMode => !prevMode)}} className="w-6 h-6 text-zinc-700 dark:text-white"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </div>
            {/* Nav */}
            {isOpenMenu && (
                <div
                    className='fixed top-0 bottom-0 right-0 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-bgDark z-20'>
                    {/* Nav Header */}
                    <div
                        className='flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10'>
                        <div className='flex gap-x-3.5'>
                            {/*  svg for logo  */}
                        </div>
                        <svg onClick={() => {setIsOpenMenu(prevMode => !prevMode)}} className='w-6 h-6 text-z dark:text-primary'
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </div>

                    {/* Nav Menu */}
                    <div className='flex items-center text-primary pr-2.5 h-10 mb-4 rounded-md font-bold'>
                        <a href="#" className='flex items-center gap-x-2'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                            </svg>
                            صفحه اصلی
                        </a>
                    </div>
                    <ul className='text-zinc-600 pb-8 space-y-6 dark:text-white font-medium'>
                        <li className='pr-2.5'>
                            <div
                                className={isOpenSubMenu ? "text-primary flex items-center justify-between transition-all duration-300" : "flex items-center justify-between"}>
                                <a href="#" className='flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>
                                    فروشگاه
                                </a>
                                <span onClick={() => {setIsOpenSubMenu(prevMode => !prevMode)}} className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                </span>
                            </div>
                            {
                                isOpenSubMenu && (
                                    <div
                                        className={`submenu flex flex-col gap-y-3 pr-7 mt-3 text-sm text-zinc-600 dark:text-white transition-all duration-300 ${isOpenSubMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <a href='#'>تست</a>
                                        <a href='#' className='submenu-item--active'>تست</a>
                                        <a href='#'>تست</a>
                                        <a href='#'>تست</a>
                                        <a href='#'>تست</a>
                                        <a href='#'>تست</a>
                                    </div>
                                )
                            }
                        </li>
                        <li className='pr-2.5'>
                            <a href="#" className='flex items-center gap-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                                </svg>
                                درباره ما
                            </a>
                        </li>
                        <li className='pr-2.5'>
                            <a href="#" className='flex items-center gap-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"/>
                                </svg>
                                تماس با ما
                            </a>
                        </li>
                    </ul>
                    {/* Nav Footer */}
                    <div
                        className='space-y-6 text-zinc-600 dark:text-white pt-8 px-2.5 mb-8 border-t border-t-gray-100 dark:border-t-white/10 font-medium'>
                        <Link to="/auth" className='inline-flex items-center gap-x-2'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"/>
                            </svg>
                            ورود | ثبت نام
                        </Link>
                        <span onClick={toggleDarkMode} className='flex items-center gap-x-2'>
                            <div className='flex items-center gap-x-2 dark:hidden'>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                                </svg>
                                <span>تم تیره</span>
                            </div>
                            <div className='hidden dark:flex items-center gap-x-2'>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                     fill="currentColor">
                                    <path
                                        d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z"/>
                                </svg>
                                <span>تم روشن</span>
                            </div>
                        </span>
                        <a href="#" className='inline-flex items-center gap-x-2'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                            </svg>
                            سبد خرید
                        </a>
                    </div>
                </div>
            )}

            {/* Logo Type */}
            <div className=''>
                {/* Header Logo Icon */}
            </div>
            {/* Cart Icon */}
            <div onClick={() => {setIsOpenShopMenu(prevMode => !prevMode)}} className={`${isOpenShopMenu && "hidden"}`}>
                <svg className="w-6 h-6 text-zinc-700 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                </svg>
            </div>

            {/* Cart */}
            {isOpenShopMenu && (
                <div
                    className='fixed top-0 bottom-0 left-0 w-64 flex flex-col min-h-screen pt-5 px-4 bg-white dark:bg-bgDark z-20 overflow-y-auto transition-all font-medium'>
                    {/* Cart Header */}
                    <div
                        className='flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10'>
                        <svg onClick={() => {setIsOpenShopMenu(prevMode => !prevMode)}} className='w-6 h-6 text-z dark:text-white'
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                        <span className='text-zinc-700 dark:text-white'>سبد خرید</span>
                    </div>

                    {/* Cart Body */}
                    <div className='child:pb-5 child:mb-5 child:border-b'>
                        <div className='flex gap-x-1 border-b-gray-100 dark:border-b-white/10'>
                            <img src="images/products/p2.png" className='w-[90px] h-[90px]' alt="Product1"/>
                            <div className='flex flex-col justify-between gap-y-1.5'>
                                <h4 className='text-zinc-700 dark:text-white text-sm line-clamp-2'>قرص مسکن مناسب برای افراد بالای 18 سال</h4>
                                <div>
                                    <span className='text-secondary text-xs tracking-tight font-light'>14,500 تومان تخفیف</span>
                                    <div className='text-zinc-700 dark:text-white'>
                                        175,000
                                        <span className='text-xs'>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cart Footer */}
                    <div className='flex items-end gap-x-4 mt-auto mb-8'>
                        <a href="#"
                           className='flex items-center justify-center w-28 h-11 text-white bg-primary rounded-xl'>ثبت
                            سفارش</a>
                        <div>
                            <span className='text-gray-300 text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                            <div className='text-zinc-700 dark:text-white'>
                                350,000
                                <span className='text-xs'>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
