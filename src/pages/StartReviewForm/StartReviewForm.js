import React ,{useState} from 'react';
import "./StartReviewForm.css"
const StartReviewForm = () => {
    const [rating, setRating] = useState(3); // Default rating value
    const [comments, setComments] = useState('');
  
    const handleRatingChange = (event) => {
      setRating(parseInt(event.target.value, 10));
    };
  
    const handleCommentsChange = (event) => {
      setComments(event.target.value);
    };
  
    const handleSubmit = () => {
      console.log('Rating:', rating);
      console.log('Comments:', comments);
    };
  
  return (
    <div className="rating-form">
    <div className="rating-stars">
      <input type="radio" name="rating" id="rs0" value="0" onChange={handleRatingChange} />
      <label htmlFor="rs0"></label>
      <input type="radio" name="rating" id="rs1" value="1" onChange={handleRatingChange} />
      <label htmlFor="rs1"></label>
      <input type="radio" name="rating" id="rs2" value="2" onChange={handleRatingChange} />
      <label htmlFor="rs2"></label>
      <input type="radio" name="rating" id="rs3" value="3" onChange={handleRatingChange}  />
      {/* <input type="radio" name="rating" id="rs3" value="3" onChange={handleRatingChange} checked /> */}
      <label htmlFor="rs3"></label>
      <input type="radio" name="rating" id="rs4" value="4" onChange={handleRatingChange} />
      <label htmlFor="rs4"></label>
      <input type="radio" name="rating" id="rs5" value="5" onChange={handleRatingChange} />
      <label htmlFor="rs5"></label>
      <span className="number"></span>
      </div>
      <textarea
        placeholder="Comments..."
        value={comments}
        onChange={handleCommentsChange}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StartReviewForm;
