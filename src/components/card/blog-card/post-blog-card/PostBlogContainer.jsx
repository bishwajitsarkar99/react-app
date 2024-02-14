import React  from 'react';
import FeatureProducts from './FeatureProducts';

function PostBlogContainer() {

  return (
    <>
      <div className="post-blog-container">

            <div className="card post-blog-main-card" >
              <div className="row">
                <div className="post-title">
                  <span className='title-text'></span>
                </div>
              </div>
              <div className="row">
                <div className='media-section__left'>
                  <div className='med-carousel'>
                      <div className='slider__list'>
                          <div className='slider__container__left' style={{marginTop:127}}>

                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

          <div className='slider__container__right video-list' style={{marginTop:127}}>
            <div className='slider-collection '>
                <div className='sub__slider '>
                    <div className="card mini-video-list-card">
                      <span className=' text-center video-heading'>Popular</span>
                        <div className="card video-mini-card">
                          <div className='popular-mini-image'>
                            <FeatureProducts />
                          </div>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
      </div>
    </>
  );
}

export default PostBlogContainer;