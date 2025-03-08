import Navbar from "../../Components/Navbar/Navbar.tsx";
import ProductsParent from "../../Components/ProductsParent/ProductsParent.tsx";
import Searchbar from "../../Components/Searchbar/Searchbar.tsx";
function Shop() {
    return (
        <>
            <Navbar/>
            <Searchbar />
            <ProductsParent/>
        </>
    );
}

export default Shop;