import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
function CategoryViewButton() {
    return (
        <>
            <span className='btn__icon view__btn__icon'>
                <a className='common__plate__box' href="#" data-tooltip-id="category-view-btn-icon" data-tooltip-content="View" data-tooltip-place="right">
                    <i class="fa-regular fa-eye"></i>
                    <Tooltip id="category-view-btn-icon" />
                </a>
            </span>
        </>
    )
}

export default CategoryViewButton;
