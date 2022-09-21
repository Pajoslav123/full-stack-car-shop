import { useState } from "react";

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

   

    const slideStyles = {
        backgroundImage:`url(${slides[currentIndex].url})`
    }

    return ( 
        <div class="slider-style">
            <div class="slide-style" style={slideStyles}></div>
        </div>
     );
}
 
export default ImageSlider;