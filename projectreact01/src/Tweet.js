import React from 'react';

function Tweet(props){
    return(
        <div className="tweet">
            <h1>Tweet Name.value = {props.name}</h1>
            <p>this is random tweet.</p>
        </div>
    );
}

export default Tweet;