import React from 'react';

function Description({children}) {
    return (
        <div>
            <h2>{children.title}</h2>
            <h2>{children.description}</h2>
        </div>
    );
}

export default Description;