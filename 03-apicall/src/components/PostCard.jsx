import react from "react";

const postCards = (props)=>{
    return (
        <div className="post-cards">
          <h3>{props.title}</h3>
          <p>{props.body}</p>   
        </div>
    );
};

export default postCards;