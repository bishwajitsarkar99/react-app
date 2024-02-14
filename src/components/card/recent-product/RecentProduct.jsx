import React from 'react'
import RecentData from './RecentData';
import Svg from '../../svg/Svg';
import StarSvg from '../../svg/StarSvg';
import RecentProductButton from '../../button/RecentProductButton';
import AllRecentProductDetails from '../../button/AllRecentProductDetails';

function RecentProduct() {
    return (
        <>
            <div className="container category-container">
                <div className="row category-head">
                    <div className="col-10">
                        <h6>
                            <span className='recent-skeletone'></span>
                        </h6>
                    </div>
                    <div className="col-2">
                        <AllRecentProductDetails />
                    </div>
                </div>
                <div className="row">
                    {RecentData.map((d) =>(
                        <div className="col-3 product__category__box card">
                            <div className="catebox">
                                <div className="svg__doted doted-skeletone">
                                    <Svg />
                                    <img className="mini__img" src="../demo-background/mini-box.png" alt="demo-background" />
                                </div>
                            </div>
                            <div className="recent-product-image">
                                <img className="cate__img" src={d.recentProductImage} alt="category_image" />
                            </div>
                            <img className="mini__img2" src="../demo-background/mini-box.png" alt="demo-background" />
                            <div className="card_title">
                                <span className='price price-rate-skeletone'>
                                    <span className='price__display'><span style={{fontWeight:900}}>৳</span> {d.recentProductPrice}</span>
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
                                    <p className='card-name-display'>{d.recentProductTitle}</p>
                                </span>
                                <span>
                                    <p className='recent__product__btn__display'><RecentProductButton/></p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecentProduct;
