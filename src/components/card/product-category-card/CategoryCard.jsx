import React from 'react'
import CategoryData from './CategoryData';
import Svg from '../../svg/Svg';
import StarSvg from '../../svg/StarSvg';
import CategoryViewButton from '../../button/CategoryViewButton';
import CategoryDetailButton from '../../button/CategoryDetailButton';
// import { Zoom } from 'react-slideshow-image';
// import ReactImageMagnify from 'react-image-magnify';

function CategoryCard() {

    return (
        <>
            <div className="container category-container">
                <div className="row category-head">
                    <div className="col-10">
                        <h6>
                            <span className='category-skeletone'></span>
                        </h6>
                    </div>
                    <div className="col-2">
                        <CategoryDetailButton />
                    </div>
                </div>
                <div className="row">
                    {CategoryData.map((d) =>(
                        <div className="col-3 product__category__box card">
                            <div className="catebox">
                                <div className="svg__doted doted-skeletone">
                                    <Svg />
                                    <img className="mini__img" src="../demo-background/mini-box.png" alt="demo-background" />
                                </div>
                            </div>
                            <div className="category-image category-display">
                                <img className="cate__img" src={d.categoryImage} alt="category_image" />
                            </div>
                            <img className="mini__img2" src="../demo-background/mini-box.png" alt="demo-background" />
                            <div className="card_title">
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
                                    <p className='card-name-display'>{d.categoryTitle}</p>
                                </span>
                                <span>
                                    <p className='view__btn__display'><CategoryViewButton/></p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryCard;
