
const ShoppingCart = () => {
    return (
        <>
        <div
            className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 bg-white dark:bg-black/50 border-t-[3px] border-t-primary shadow-normal rounded-2xl transition-all delay-75 font-medium">
            <div className="flex items-center justify-between text-xs tracking-tighter">
                <span className="text-gray-700 ">1 مورد</span>
                <a href="#" className="flex items-center text-primary">
                    مشاهده سبد خرید
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </a>
            </div>
            <div
                className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10">
                <div className="flex gap-x-2.5 py-5 ">
                    <img
                        src="images/products/p1.png"
                        className="w-30 h-30"
                        alt="Product1"
                    />
                    <div className="flex flex-col justify-between">
                        <h4 className="text-zinc-700 dark:text-white line-clamp-2">
                            قرص مسکن برای افراد بالای 18سال
                        </h4>
                        <div>
                        <span className="text-primary text-xs tracking-tight">
                          14,500 تومان تخفیف
                        </span>
                            <div className="text-zinc-700 dark:text-white">
                                175,000
                                <span className="text-sm">تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-5">
                    <div>
                      <span className="text-gray-700 text-xs tracking-tight">
                        مبلغ قابل پرداخت
                      </span>
                        <div className="text-zinc-700 dark:text-white">
                            350,000
                            <span className="text-sm">تومان</span>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center h-14 w-[144px] text-white bg-primary hover:bg-amber-300 rounded-xl transition-colors tracking-tighter"
                    >
                        ثبت سفارش
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default ShoppingCart;

