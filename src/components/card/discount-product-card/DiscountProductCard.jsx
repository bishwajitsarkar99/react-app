import React from 'react'
import DiscountProductData from './DiscountProductData';
import Svg from '../../svg/Svg';
import StarSvg from '../../svg/StarSvg';
import DiscountButton from '../../button/DiscountButton';
import DiscountIconButton from '../../button/DiscountIconButton';

function DiscountProductCard() {
    return (
        <>
            <div className="container product-discount-container">
                <div className="row category-head">
                    <div className="col-10">
                        <h6>
                            <span className='category-skeletone discount__title'></span>
                        </h6>
                    </div>
                    <div className="col-2">
                        <DiscountButton/>
                    </div>
                </div>
                <div className="row">
                    {DiscountProductData.map((d) =>(
                        <div className="col-3 product__category__box card">
                            <div className="catebox">
                                <div className="svg__doted doted-skeletone">
                                    <Svg />
                                    <img className="mini__img" src="../demo-background/mini-box.png" alt="demo-background" />
                                </div>
                            </div>
                            <div className="category-image category-display">
                                <img className="cate__img" src={d.discountProductImage} alt="category_image" />
                            </div>
                            <img className="mini__img2" src="../demo-background/mini-box.png" alt="demo-background" />
                            <div className="card_title">
                                <span className='price price-rate-skeletone'>
                                    <span className='price__display'> <span style={{fontWeight:900}}>৳</span> {d.discountProductPrice}</span>
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
                                    <p className='card-name-display'>{d.discountProductTitle}</p>
                                </span>
                                <span>
                                    <p className='view__btn__display'><DiscountIconButton/></p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DiscountProductCard;
