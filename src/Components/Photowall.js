import React from 'react'
import Photo from'./Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'





function Photowall(props){

    return(
        <div>
            <Link className = "addIcon" to = "/AddPhoto"> </Link>
      
          
        <div className="photo-grid">
            {
            props.posts
            .sort(function(x,y){
                return y.id - x.id
            })
            .map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
            
        </div>
        </div>
    )

}

Photowall.prototypes = {

    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
 
}



export default Photowall