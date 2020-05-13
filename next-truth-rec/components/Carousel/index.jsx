import React from "react";
import $ from "jquery";

class Carousel extends React.Component{
componentDidMount(){
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: false,
    
    });
    
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.carousel', {
      // options
      wrapAround: true,
      freeScroll: true,
freeScrollFriction: 0.03
    });
}

render(){
    return(
    <React.Fragment>
 

 

 <div className="carousel" data-flickity='{ "adaptiveHeight": true }'>

 <div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>


<div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>


<video controls className="carousel-cell" src="./img/carousel-media/test-video.mp4" poster="initial_static_picture.jpg" width="100%" height="100%">
</video>

 
<div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>

<div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>

<div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>

</div>


  </React.Fragment>
    );
}
}

export default Carousel;










<div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>




