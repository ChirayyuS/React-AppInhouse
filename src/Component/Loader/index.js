import React from 'react'
import loaderSrc from '../../assets/UserPhoto.png'

const Loader = props => {
    return (
        
        <div>
            <img 
            style={{
            width: 200,
            float: 'left',
            height: 200,
            padding: 25
            }}
            alt="User Icon"
            src={loaderSrc}
            />
        </div>
    )
}

export default Loader;