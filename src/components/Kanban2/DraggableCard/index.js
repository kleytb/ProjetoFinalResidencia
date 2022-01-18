import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

import { AiOutlineMinusSquare, AiOutlineClockCircle } from "react-icons/ai";

import './styles.css'

function DraggableCard({ id, index, title, points, criationDate, handleDelete }) {

    

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {provided => (
                <div
                    className='draggable-card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className='draggable-card-header'>
                        <h1>{title}</h1>

                        <AiOutlineMinusSquare className='draggable-card-minus' onClick={() => handleDelete(id)} />
                    </div>

                    <div className='draggable-card-footer'>

                        <div className='draggable-card-footer-points'>
                            <span>Pontos</span>
                            <strong>{points}</strong>
                        </div>

                        <div className='draggable-card-footer-date'>
                            <div>
                                <AiOutlineClockCircle className='draggable-card-footer-iconTime' />
                                <span>{criationDate}</span>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default DraggableCard;