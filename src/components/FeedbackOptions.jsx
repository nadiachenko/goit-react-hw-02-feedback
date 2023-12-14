import React from 'react';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div>
        {options.map(option => (
            <button key={option} name={option} className="load-more" onClick={onLeaveFeedback}>
                {option}
            </button>
        ))}
    </div>)
}