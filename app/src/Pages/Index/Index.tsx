import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.tsx";
import Slider from "../../Components/Slider/Slider.tsx";
import ProductsParent from "../../Components/ProductsParent/ProductsParent.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import AboutUs from "../../Components/AboutUs/AboutUs.tsx";

export default function Index() {


    return (
        <>
            <Header/>
            {/*<Breadcrumb/>*/}
            <AboutUs />
            <Breadcrumb  links={[
                { id: 1, title: "فروشگاه", to: '/shop' },
            ]}/>
            <Slider/>
            <ProductsParent />
            <Slider/>
            <Footer/>
        </>
    );
}
