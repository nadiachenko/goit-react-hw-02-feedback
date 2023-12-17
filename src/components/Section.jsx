import React from 'react';

export const Section = ({ title = "Please leave a feedback", children }) => {
    return (<div> <h2>{title}</h2>
        {children}
    </div>)
}