import React from 'react';
import ScrollData from './ScrollData';
import "../marque-text/marque.css";

function MarqueText() {
    const marqueData = ScrollData;

    return (
        <>
            <div className='marque-area marque-area-skeletone'>
                <div id='movingText'>
                    {marqueData.map((item)=>(
                        <div className='scrollText'>
                            <div id='marbel'></div>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MarqueText;
