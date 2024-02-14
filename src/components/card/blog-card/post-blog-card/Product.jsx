import React from 'react'
import { NavLink } from 'react-router-dom';


function Product(curElem) {

    const {id, slug, post_title, category_name, sub_category_name, meta_title, meta_keywords, meta_description, description, image} = curElem;

    return( 
        <>
            <NavLink to={`/singleproduct/:${id}`} >
                <div className="card">
                    <figure>
                        <img src={image} alt={slug} />
                        <figcaption className='caption'>{post_title}</figcaption>
                    </figure>
                </div>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h2>{category_name}</h2>
                        <h5>{sub_category_name}</h5>
                        <span>{meta_title}</span>
                        <p className="card-data-title">{meta_keywords}</p>
                        <p className="card-data-short">{meta_description}</p>
                        <p className="card-data-description">{description}</p>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default Product;
