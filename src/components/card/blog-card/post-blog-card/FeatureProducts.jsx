import { useProductContext } from "./BlogContext";
import Product from "./Product";


function FeatureProducts() {
    const {isLoading, featureProducts} = useProductContext();

    
    if(isLoading){
        return <div>..........Loading</div>
    }

    return (
        <>
            <h1>Feature Products</h1>
            <div className="grid grid-three-column">
                {featureProducts.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />;
                })}
            </div>
            
        </>
    )
}

export default FeatureProducts;
