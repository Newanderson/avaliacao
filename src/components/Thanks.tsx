import "./Thanks.css";
import React, { ReactElement } from "react";

import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
  } from "react-icons/bs";


  type emojiObject = {
    unsatisfied:ReactElement,
    neutral:ReactElement,
    satisfield:ReactElement,
    vary_satisfield:ReactElement,

  };

  type ThanksProps = {
    data:{
        name:string,
        review:string,
        comment: string
    }
  }

const emojiData: emojiObject = {

    unsatisfied:<BsFillEmojiFrownFill/>,
    neutral:<BsFillEmojiNeutralFill/>,
    satisfield:<BsFillEmojiSmileFill/>,
    vary_satisfield:<BsFillEmojiHeartEyesFill/>


};

const Thanks = ({data}:ThanksProps) =>{
    return(
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>
                A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua proxima compra.
            </p>
            <p>
                Para concluir sua avaliação clique no botão de Enviar abaixo
            </p>
            <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com o Produto:</span>
                {emojiData[data.review as keyof typeof emojiData]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>

        </div>
    )

}

export default Thanks;