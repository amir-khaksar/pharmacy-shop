import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
    return (
        <div className={'flex justify-center items-center'}>
            <form
                className="relative w-full max-w-[90vw] sm:max-w-[75vw] lg:max-w-[60vw] my-4 sm:my-6 bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <input
                    className="w-full h-12 sm:h-14 lg:h-[70px] text-xs sm:text-sm lg:text-base text-gray-700 outline-none px-4 placeholder-gray-400 focus:ring-2 focus:ring-purple-300"
                    type="text"
                    placeholder="دنبال چی میگردی؟"
                />
                <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 sm:p-3 bg-purple-500 text-white rounded-full transition-all hover:bg-purple-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                >
                    <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6"/>
                </button>
            </form>
        </div>
    );
}

export default Searchbar;