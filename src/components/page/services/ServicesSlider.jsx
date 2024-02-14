import React,{useEffect, useState} from 'react'
import imageSlider from '../services/ServicesData';

function ServicesSlider() {
    const [currentState,setCurrentState] = useState(0)
    const imageBackgroundStyle ={
        backgroundImage:`url(${imageSlider[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%',
        borderRadious:'5px'
    }
    const GoToNext =(currentState)=>{
        setCurrentState(currentState)
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            if(currentState===3){
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState+1)
            }
        }, 5000);
        return ()=>clearTimeout(timer)
    },[currentState])
    return (
        <>
            <div className='card-body'>
                <div className='image-body service-image-skeletone' style={imageBackgroundStyle}></div>
                <div className='text-part service__title__text__skeletone'>
                    <h1>{imageSlider[currentState].title}</h1>
                    <p>{imageSlider[currentState].body}</p>
                </div>
                <div className='carousel-button'>
                    {
                        imageSlider.map((imageSlider,currentState)=>(
                            <span key={currentState} onClick={()=> GoToNext(currentState)}></span>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ServicesSlider;
