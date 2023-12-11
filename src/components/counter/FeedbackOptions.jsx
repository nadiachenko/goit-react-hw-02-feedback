import React from 'react';


export const FeedbackOptions = ({addFeedback}) => {
    return (<div>
       <button name="good" className="load-more" onClick={addFeedback} >Good</button>
            <button name="neutral" className="load-more" onClick={addFeedback}>Neutral</button>
            <button name="bad" className="load-more" onClick={addFeedback}>Bad</button>
      </div>)
  }