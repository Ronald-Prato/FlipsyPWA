import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';


export const FCStudying = () => {

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <CreateFCBox key="front">
                This is the front of the card.
                        <button onClick={() => setFlipped(!flipped)}>Click to flip</button>
            </CreateFCBox>

            <CreateFCBox key="back">
                This is the back of the card.
                        <button onClick={() => setFlipped(!flipped)}>Click to flip</button>
            </CreateFCBox>
        </ReactCardFlip>
    )
}