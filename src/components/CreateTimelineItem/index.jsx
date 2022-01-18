import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar'

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import 'react-calendar/dist/Calendar.css';
import './styles.css';

export function CreateTimelineItem({ popupIsVisible, setPopupIsVisible, setAllIncrements, allIncrements, selectedCard, setSelectedCard }) {

    const [calendarValue, setCalendarValue] = useState([new Date(), new Date()])
    const [incrementPeriod, setIncrementPeriod] = useState({})
    const [inputValue, setInputValue] = useState('')

    function formatDate(dates) {

        let formatedDates = dates.map(date => {
            let dateObject = new Date(date),
                day = dateObject.getDate().toString().padStart(2, '0'),
                month = (dateObject.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
                year = dateObject.getFullYear();


            return `${year}-${month}-${day}`;
        })

        return formatedDates
    }

    function detailDate(date) {
        let formatedDate = formatDate(date)

        formatedDate.sort((a, b) => {
            let aMiliSecondsCreationDate = new Date(a.dataCriacao).getTime()
            let bMiliSecondsCreationDate = new Date(b.dataCriacao).getTime()

            if (aMiliSecondsCreationDate > bMiliSecondsCreationDate) return 1; // classifica "b" como menor que "a"
            if (aMiliSecondsCreationDate < bMiliSecondsCreationDate) return -1; // classifica "a" como menor que "b"
            return 0; // considera igual e não altera as posições
        })

        return {
            dataCriacao: formatedDate[0],
            dataTermino: formatedDate[1]
        };
    }

    function handleCreate() {
        let newIcrement = {
            id: 10,
            nome: inputValue,
            ...incrementPeriod
        }

        setAllIncrements([...allIncrements, newIcrement])
    }


    return (
        <>
            <div
                className='timeline-popup-container'
                style={{
                    pointerEvents: popupIsVisible ? 'unset' : 'none',
                }}
            >
                <div
                    className='timeline-popup-backdrop'
                    style={{
                        opacity: popupIsVisible ? 1 : 0,
                        pointerEvents: popupIsVisible ? 'unset' : 'none',
                    }}
                    onClick={() => {
                        if (popupIsVisible) {
                            setPopupIsVisible(!popupIsVisible)

                            setTimeout(() => {
                                setCalendarValue([new Date(), new Date()])
                                setSelectedCard({})
                            }, 300);

                        }
                    }}
                />
    

                <div
                    className='timeline-popup'
                    style={{
                        opacity: popupIsVisible ? 1 : 0,
                        pointerEvents: popupIsVisible ? 'unset' : 'none',
                    }}
                >

                    <div className="timeline-popup-header">
                        <span>Novo evento na linha do tempo</span>
                    </div>

                    <div className="timeline-popup-input-container">
                        <strong>Nome do evento</strong>
                        <input
                            value={selectedCard.nome ? selectedCard.nome : ''}
                            placeholder="Termo de abertura"
                            onChange={e => setInputValue(e.target.value)}
                        />
                    </div>

                    <div className="timeline-popup-calendar-container">
                        <Calendar
                            onChange={date => {
                                setCalendarValue(date)
                                setIncrementPeriod(detailDate(date))
                            }}

                            
                            // defaultValue={[new Date(2022, 0, 15), new Date(2022, 0, 25)]}
                            value={calendarValue}

                            selectRange={true}

                            prevLabel={<MdArrowBackIos />}
                            prev2Label=''

                            nextLabel={<MdArrowForwardIos />}
                            next2Label=''

                            calendarType='US'
                        />
                    </div>

                    <div className="timeline-popup-button-container">
                        <button onClick={handleCreate} >
                            {selectedCard.nome ? 'Salvar' : 'Criar'}
                        </button>
                    </div>

                </div>


            </div>


        </>

    );
}