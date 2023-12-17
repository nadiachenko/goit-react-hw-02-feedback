import React from 'react';

export const Statistics = ({ title = 'Statistics', good, bad, neutral, total, positivePercentage }) => {
    return (<div> <h3>{title}</h3>
        <p className="load-more">Good: {good}</p>
        <p className="load-more">Neutral: {neutral}</p>
        <p className="load-more">Bad: {bad}</p>
        <p >Total: {total} </p>
        <p >Positive feedback: {positivePercentage}%</p>
    </div>)
}