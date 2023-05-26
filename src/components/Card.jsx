import React from 'react'

const Card = ({shirt}) => {
    return (
        <div className='product-card'>
            <div className='top-card'>
                <img src={shirt.imgShirt} className="shirt_image" />
            </div>

            <div className='bottom-card'>
                <div className='product_name'>
                    <h4>{shirt.name}</h4>
                </div>

                <div className='product_description'>
                    <p>
                        {shirt.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card