import React from 'react'
import ProductData from './ProductData';
import Svg from '../../svg/Svg';
import StarSvg from '../../svg/StarSvg';
import CategoryIconButton from '../../button/CategoryIconButton';
import ProductDetailsButton from '../../button/ProductDetailsButton';
function ProductFeature() {
    return (
        <>
            <div className="container category-container">
                <div className="row category-head">
                    <div className="col-10">
                        <h6>
                            <span className='product-skeletone'></span>
                        </h6>
                    </div>
                    <div className="col-2">
                        <ProductDetailsButton />
                    </div>
                </div>
                <div className="row">
                    {ProductData.map((d)=>(
                        <div className="col-3 product__category__box card">
                            <div className="catebox">
                                <div className="svg__doted doted-skeletone">
                                    <Svg />
                                    <img className="mini__img" src="../demo-background/mini-box.png" alt="demo-background" />
                                </div>
                            </div>
                            <div className="product-image product-display">
                                <img className="cate__img" src={d.productImage} alt="product_image" />
                            </div>
                            <img className="mini__img2" src="../demo-background/mini-box.png" alt="demo-background" />
                            <div className="card_title">
                                <span className='price price-rate-skeletone'>
                                    <span className='price__display'> <span style={{fontWeight:900}}>৳</span> {d.productPrice}</span>
                                </span>
                                <span className='star__group rating-skeletone'>
                                    <span className='rating__display'>
                                        <StarSvg />
                                        <StarSvg />
                                        <StarSvg />
                                        <StarSvg />
                                        <StarSvg />
                                    </span>
                                </span>
                                <span className='card-title-skeletone'>
                                    <p className='card-name-display'>{d.productTitle}</p>
                                </span>
                                <span>
                                    <p className='product__btn__display'><CategoryIconButton/></p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductFeature;
