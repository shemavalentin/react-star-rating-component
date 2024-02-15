
import { useState, useCallback, useEffect } from "react";
import React from "react"; 
import './StarRating.css'; 

const StarRating = ({ maxRatingStart = 5, onChange = () => {} }) => {

    const [currentRating, setCurrentRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0)

    const setCurrentRatingclickHandler = useCallback((ratingValue) => {
        currentRating === ratingValue
            ? setCurrentRating(0)
            : setCurrentRating(ratingValue)
    }, [currentRating])

    useEffect(() => {
        onChange(currentRating);
    }, [currentRating, onChange])

    return (
        <div className="star-container">
            {
                [...Array(maxRatingStart)].map((_, id) => {
                    const ratingValue = id + 1;
                    return(
                        <p
                            key={id}
                            className={ ` star ${ratingValue <= (hoveredRating || currentRating)? 'active' : ''}`}
                            onClick={() => setCurrentRatingclickHandler(ratingValue)}
                            onMouseEnter={() => setHoveredRating(ratingValue)}
                            onMouseLeave={() => setHoveredRating(0)}
                        >
                            &#9733;
                        </p>
                    )
                })
            }
        </div>
    )
}

export default StarRating;