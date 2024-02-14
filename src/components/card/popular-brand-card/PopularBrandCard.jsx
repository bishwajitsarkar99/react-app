import React from 'react'
import PopularBrandData from './PopularBrandData';
import PopularSvg from '../../svg/PopularSvg';
import StarSvg from '../../svg/StarSvg';
import PopularBrandButton from '../../button/PopularBrandButton';
import PopularBrandIconButton from '../../button/PopularBrandIconButton';

function PopularBrandCard() {
    return (
        <>
            <div className="container popular-category-container">
                <div className="row category-head">
                    <div className="col-10">
                        <h6>
                            <span className='popular-category-skeletone popular-brand'></span>
                        </h6>
                    </div>
                    <div className="col-2">
                        <PopularBrandButton/>
                    </div>
                </div>
                <div className="row">
                    {PopularBrandData.map((d) =>(
                        <div className="col-3 popular__category__box card">
                            <div className="catebox">
                                <div className="svg__doted popular-doted-skeletone">
                                    <PopularSvg />
                                    <img className="popular__img" src="../demo-background/mini-box.png" alt="demo-background" />
                                </div>
                            </div>
                            <div className="category-image category-display">
                                <img className="popular__category__img" src={d.categoryImage} alt="category_image" />
                            </div>
                            <img className="popular__img2" src="../demo-background/mini-box.png" alt="demo-background" />
                            <div className="card_title">
                                <span className='star__popular__group popular-rating-skeletone'>
                                    <span className='rating__display'>
                                        <StarSvg />
                                        <StarSvg />
                                        <StarSvg />
                                        <StarSvg />
                                        <StarSvg />
                                    </span>
                                </span>
                                <span className='popular-category-title-skeletone popular-show demo-popular-text-off'>
                                    <p className='popular-title-display-off popular-catg'>{d.categoryTitle}</p>
                                </span>
                            </div>
                            <span className='popular__text__demo'>
                                <img className="popular__demo__bg__text" src="../demo-background/mini-box.png" alt="demo-background" />
                            </span>
                            <PopularBrandIconButton />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PopularBrandCard;
