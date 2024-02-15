
import "./Reviewform.css";

import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
  } from "react-icons/bs";

  type ReviewForm = {
    data:{
        review:string,
        comment:string
    };
    updateFieldHandler:(key:string, value:string) => void;
  };

const ReviewForm = ( {data, updateFieldHandler}:ReviewForm) =>{

    return <div className="review-form">
        <div className="form-control score-container">
            <label className="radio-container">
                <input 
                type="radio"
                 value="unsatisfied" 
                 name="review"
                 required
                 //persistir os dados
                 checked={data.review === "unsatisfied"}
                 onChange={(e) => updateFieldHandler("review", e.target.value)}
                 
                 />
                <BsFillEmojiFrownFill/>
                <p>Insatisfeito</p>
              

            </label>
            <label className="radio-container">
                <input 
                type="radio"
                value="neutral" 
                name="review" required 
                 //persistir os dados
                checked={data.review === "neutral"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                />
                
                <BsFillEmojiNeutralFill/>
                <p>Poderia melhorar</p>
                
            </label>
            <label className="radio-container">
                <input
                 type="radio" 
                 value="satisfield"
                 name="review" 
                 required 
                  //persistir os dados
                 checked={data.review === "satisfield"}
                 onChange={(e) => updateFieldHandler("review", e.target.value)}
                 />
                <BsFillEmojiSmileFill/>
                <p>Satisfeito</p>
                
            </label>
            <label className="radio-container">
                <input 
                type="radio" 
                value="very_satisfield" 
                name="review" 
                required 
                 //persistir os dados
                checked={data.review === "very_satisfield"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                
                />
                <BsFillEmojiHeartEyesFill/>
                <p>Muito Satisfeito</p>
                
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="comment">Comentário</label>
            <textarea 
            name="comment" 
            id="commnet" 
            placeholder="Conte como foi sua experiência com o produto..."
            required
             //persistir os dados
            value={data.comment  || ""}
            onChange={(e) => updateFieldHandler("comment", e.target.value)}
            
            ></textarea>
        </div>

    </div>
    

}

export default ReviewForm;