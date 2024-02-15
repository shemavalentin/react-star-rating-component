import { useState } from 'react';
import StarRating from './StarRating';
import './App.css';

export default function App() {
  const [productRating, setProductRating] = useState(0);

  return (
    <>
    The current product rating: {productRating}
      < StarRating maxRatingStart={10} onChange={setProductRating} />
    </>
  )
}


