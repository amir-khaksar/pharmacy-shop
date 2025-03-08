import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import SliderBox from "../SliderBox/SliderBox.tsx";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
];

const Slider = () => {
    const sliderContainerRef = useRef<HTMLDivElement | null>(null);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 5,
            spacing: 5,
        },
        breakpoints: {
            "(max-width: 1440px)": {
                slides: { perView: 4 },
            },
            "(max-width: 1024px)": {
                slides: { perView: 3 },
            },
            "(max-width: 768px)": {
                slides: { perView: 2 },
            },
            "(max-width: 480px)": {
                slides: { perView: 1 },
            },
        },
    });

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const startAutoPlay = () => {
            intervalRef.current = setInterval(() => {
                instanceRef.current?.next();
            }, 3000);
        };

        const stopAutoPlay = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        startAutoPlay();

        if (sliderContainerRef.current) {
            sliderContainerRef.current.addEventListener("mouseenter", stopAutoPlay);
            sliderContainerRef.current.addEventListener("mouseleave", startAutoPlay);
        }

        return () => {
            stopAutoPlay();
            if (sliderContainerRef.current) {
                sliderContainerRef.current.removeEventListener("mouseenter", stopAutoPlay);
                sliderContainerRef.current.removeEventListener("mouseleave", startAutoPlay);
            }
        };
    }, [instanceRef]);

    return (
        <div ref={sliderContainerRef} className="container relative w-full mt-24">
            <div ref={sliderRef} className="keen-slider w-full max-w-full overflow-hidden">
                {products.map((product) => (
                    <div key={product.id} className="keen-slider__slide flex">
                        <SliderBox />
                    </div>
                ))}
            </div>
            <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute w-10 h-10 -top-16 left-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-colors shadow-md"
            >
                <ArrowBackIosIcon className="pl-1" fontSize="small" />
            </button>
            <button
                onClick={() => instanceRef.current?.next()}
                className="absolute w-10 h-10 -top-16 left-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-colors shadow-md"
            >
                <ArrowForwardIosIcon className="pl-1" fontSize="small" />
            </button>
        </div>
    );
};

export default Slider;
