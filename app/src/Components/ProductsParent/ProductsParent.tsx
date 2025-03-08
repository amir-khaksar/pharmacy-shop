import ProductBox from "../ProductBox/ProductBox.tsx";

function ProductsParent() {
    return (
        <div className="container flex flex-wrap items-center justify-between mt-10 gap-x-4">
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
        </div>
    );
}

export default ProductsParent;