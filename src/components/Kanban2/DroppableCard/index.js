import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd'

import './styles.css'

import plus from '../assets/plus.svg'
import { FiX } from 'react-icons/fi'

import DraggableCard from '../DraggableCard'

function DroppableCard({ cards, id, handleOnDragEnd, title, priorityColor, handleDelete }) {

    const [cardCreationDisplay, setCardCreationDisplay] = useState('none')

    function handleCardCreationDisplay() {
        let display = cardCreationDisplay === 'none' ? 'flex' : 'none'

        setCardCreationDisplay(display)
    }

    return (
        <>
            <div className="droppable-container">
                <div className='droppable-header' >

                    <div className='header-content-container'>
                        <div className='priority-color' style={{ background: priorityColor }} />
                        <h1 className='header-text'>{title}</h1>
                    </div>

                    <img src={plus} className='plus-img' onClick={handleCardCreationDisplay}/>

                </div>

                <Droppable droppableId={id}>
                    {provided => (
                        <div className='droppable' {...provided.droppableProps} ref={provided.innerRef}>

                            {cards.map(({ id, title, points, criationDate }, index) => (
                                <DraggableCard 
                                key={id} 
                                id={id} 
                                index={index} 
                                title={title} 
                                points={points}
                                criationDate={criationDate}
                                handleDelete={handleDelete}
                                 />
                            ))}

                            {provided.placeholder}
                        </div>

                    )}
                </Droppable>
            </div>



            <div id='card-creation' style={{display: cardCreationDisplay}}>
                <div id='card-creation-header'>
                    <FiX id='card-creation-header-x' onClick={handleCardCreationDisplay} />
                </div>
                
                <form id='card-creation-form'>
                    <label className='card-creation-label'>Título</label>
                    <input id='title-input' type={'text'} />

                    <label className='card-creation-label' >Descrição</label>
                    <textarea />
                </form>
            </div>
        </>
    );
}

export default DroppableCard;