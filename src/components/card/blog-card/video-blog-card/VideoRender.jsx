import React from 'react'
import ReactPlayer from 'react-player';
import NewVideoButton from '../../../button/NewVideoButton';
import OldVideoButton from '../../../button/OldVideoButton';
import BlockBackButton from '../../../button/BlockBackButton';
import BlogVideoData from './BlogVideoData';

function VideoRender() {
    const renderVideo = ()=>{
        return(
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=UoeTA0E7ZcQ'
                controls={true}
                light={true}
                volume={true}
                muted={true}
                pip={true}
                loop={true}
                playIcon={true}
                progressInterval={1000}
                height={367}
                width={650}
            />
        )
    }

    return (
        <>
            <div className='media-section__left'>
                <div className='med-carousel'>
                    <div className='slider__list'>
                        <div className='slider__container__left' style={{marginTop:127,borderRadius:5}}>
                            {renderVideo()}
                        </div>
                    </div>
                </div>
            </div>
            <div className='slider__container__right video-list' style={{marginTop:127}}>
                <div className='slider-collection '>
                    <div className='sub__slider '>
                        <div className="card mini-video-list-card">
                            <span className=' text-center video-heading'>Video-List</span>
                            <div className="card video-mini-card">
                                <span>{BlogVideoData.title}</span>
                                <span>{BlogVideoData.id}</span>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="group-media-button">
                <NewVideoButton />
                <OldVideoButton />
                <BlockBackButton />
            </div>
        </>
    )
}

export default VideoRender;
