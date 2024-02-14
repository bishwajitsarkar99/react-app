import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function PopularIconButton() {
    return (
        <>
            <span className='btn__icon__mini popular__btn__icon'>
                <a className='common__plate__box view__btn__icon__mini' href="#" data-tooltip-id="popular-view-btn-icon" data-tooltip-content="view" data-tooltip-place="left">
                    <i class="fa-regular fa-eye"></i>
                    <Tooltip id="popular-view-btn-icon" />
                </a>
            </span>
        </>
    )
}

export default PopularIconButton;
