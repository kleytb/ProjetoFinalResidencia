import React from 'react';

import './styles.css';

export function TimelineCard({card, timelineMonth, incrementCardHeight, setPopupIsVisible, setSelectedCard}) {
    
    let { id, nome, index, endWeek, startWeek, endsInStartMonth, endMonth, startMonth } = card

    let calculateWidth = `${100 * (endWeek - (startWeek - 1)) + 33.3 * ((endWeek - (startWeek - 1)) - 1)}%`

    let width = endsInStartMonth || timelineMonth === endMonth ? calculateWidth : '100vw'
    let left = !endsInStartMonth && timelineMonth + 1 !== startMonth ? `-${window.innerWidth * .047}px` : '0px'
    let paddingRight = Number(left.split('px')[0]) - Number(left.split('px')[0]) * 2


    return (
        <div
            key={id}
            className="increments"
            style={{
                marginTop: `${index * (1.5 * incrementCardHeight)}px`,
                width: width,
                left: left,
                paddingRight: `${paddingRight}px`,
            }}
            onClick={() => {
                setPopupIsVisible(true)
                setSelectedCard(card)
            }}
        >
            <div />
            <strong>{nome}</strong>
        </div>
    );
}