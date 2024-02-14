import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function RecentProductButton() {
    return (
        <>
            <span className='btn__icon prod__btn__icon'>
                <a href="#" className='product__plate__box' data-tooltip-id="wishlist-view-btn-icon" data-tooltip-content="Add to wishlist" data-tooltip-place="top">
                    <i class="fa-regular fa-heart"></i>
                    <Tooltip id="wishlist-view-btn-icon" />
                </a>
                <a href="#" className="product__plate__box" data-tooltip-id="card-view-btn-icon" data-tooltip-content="Add to card" data-tooltip-place="top">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <Tooltip id="card-view-btn-icon" />
                </a>
                <a href="#" className="product__plate__box" data-tooltip-id="compare-view-btn-icon" data-tooltip-content="Add to compare" data-tooltip-place="top">
                    <i class="fa-solid fa-arrows-rotate"></i>
                    <Tooltip id="compare-view-btn-icon" />
                </a>
                <a className='common__plate__box' href="#" data-tooltip-id="product-view-btn-icon" data-tooltip-content="view" data-tooltip-place="top">
                    <i class="fa-regular fa-eye"></i>
                    <Tooltip id="product-view-btn-icon" />
                </a>
            </span>
        </>
    )
}

export default RecentProductButton;
