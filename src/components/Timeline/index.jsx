import React, { useState, useEffect } from 'react';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import { CreateTimelineItem } from '../../components/CreateTimelineItem'
import { TimelineCard } from '../../components/TimelineCard'

import './styles.css';

function Timeline({reference}) {

    const INCREMENTS = [
        {
            id: 1,
            nome: 'Termo de abertura',
            dataCriacao: '2021-11-01',
            dataTermino: '2021-11-05',
        },

        {
            id: 5,
            nome: 'Visão de alguma coisa',
            dataCriacao: '2021-11-01',
            dataTermino: '2022-01-14',
        },

        {
            id: 2,
            nome: 'Visão do produto',
            dataCriacao: '2021-10-01',
            dataTermino: '2021-12-14',
        },



        {
            id: 3,
            nome: 'Backlog',
            dataCriacao: '2022-01-09',
            dataTermino: '2022-01-16',
        },

        {
            id: 4,
            nome: 'Backlog',
            dataCriacao: '2022-01-09',
            dataTermino: '2022-01-16',
        },


    ]


    const date = new Date()
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    const [allIncrements, setAllIncrements] = useState(INCREMENTS)

    const [timelineMonth, setTimelineMonth] = useState(date.getMonth())
    const [timelineYear, setTimelineYear] = useState(date.getFullYear())

    const [week1, setWeek1] = useState([])
    const [week2, setWeek2] = useState([])
    const [week3, setWeek3] = useState([])
    const [week4, setWeek4] = useState([])

    const [incrementCardHeight, setIncrementCardHeight] = useState(1)

    const [popupIsVisible, setPopupIsVisible] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})



    function separeteByWeek() {

        var scopeVariable = {
            index: 0,
            simulationIndex: 0,
        }


        function getTimelineIncrements(month, year) {

            let increments = allIncrements.filter(increment => {
                let splitedStartDate = increment.dataCriacao.split('-')
                let splitedEndDate = increment.dataTermino.split('-')


                let startMonth = Number(splitedStartDate[1])
                let startYear = Number(splitedStartDate[0])

                let endMonth = Number(splitedEndDate[1])
                let endYear = Number(splitedEndDate[0])


                // Caso o ano de inicio seja igual ao ano de termino
                // E o mes de inicio seja igual ao mes de termino
                // E os meses e os anos sejam iguais ao atual

                // Caso o ano de inicio e ano de termino sejam iguals
                // E o mes de inicio e o mes de fim sejam diferentes
                // E o ano atual seja igual ao ano de inicio ou de fim
                // E o mes atual seja igual ao mes de incio ou de fim

                // Caso os anos de incio e fim sejam diferentes
                // O ano deve ser maior ou igual que o ano de incio
                // O ano deve ser menor ou igual o ano de termino
                // O mes de incio só pode ser menor que o mes atual caso o ano atual seja maior que o ano de incio
                // o mes de termino só pode ser maior que o mes atual caso o ano atual seja menor que o ano de termino

                if (
                    (startYear === endYear && startMonth === endMonth && startYear === Number(year) && startMonth === Number(month)) ||
                    (startYear === endYear && startMonth !== endMonth && startYear === Number(year) && (startMonth <= Number(month) && endMonth >= Number(month))) ||
                    (startYear !== endYear && (Number(year) >= startYear && Number(year) <= endYear))

                ) {

                    if (startYear !== endYear) {
                        if (startMonth <= Number(month) && Number(year) >= startYear && Number(year) < endYear) {
                            return increment;
                        }

                        if (endMonth >= Number(month) && Number(year) <= endYear && Number(year) > startYear) {
                            return increment;
                        }


                    } else {
                        return increment;
                    }

                }
            })

            increments.sort((a, b) => {
                let aMiliSecondsCreationDate = new Date(a.dataCriacao).getTime()
                let bMiliSecondsCreationDate = new Date(b.dataCriacao).getTime()

                if (aMiliSecondsCreationDate > bMiliSecondsCreationDate) return 1; // classifica "b" como menor que "a"
                if (aMiliSecondsCreationDate < bMiliSecondsCreationDate) return -1; // classifica "a" como menor que "b"
                return 0; // considera igual e não altera as posições
            })

            return increments;
        }

        function simulateIndexGeneration(increments, simulatedMonth) {

            let simulation = increments.map((increment) => {

                let splitedStartDate = increment.dataCriacao.split('-')
                let splitedEndDate = increment.dataTermino.split('-')

                let weekStartNumber = setWeekByDate(splitedStartDate[2])
                let weekEndNumber = setWeekByDate(splitedEndDate[2])

                let startMonth = Number(splitedStartDate[1])
                let startYear = Number(splitedStartDate[0])

                let endMonth = Number(splitedEndDate[1])



                if (startMonth !== endMonth && startMonth !== simulatedMonth) {
                    scopeVariable.simulationIndex = 0;

                    let timelineStartIncrements = getTimelineIncrements(startMonth, startYear)
                    let simulation = simulateIndexGeneration(timelineStartIncrements, startMonth)
                    let simulationIncrement = simulation.filter(simulationIncrement => simulationIncrement.id === increment.id)

                    return {
                        ...increment,
                        startWeek: weekStartNumber,
                        index: simulationIncrement[0].index,
                        endWeek: weekEndNumber,
                        endMonth: (endMonth - 1),
                        startMonth,
                        endsInStartMonth: startMonth === endMonth,
                    };
                }


                return {
                    ...increment,
                    startWeek: weekStartNumber,
                    index: scopeVariable.simulationIndex++,
                    endWeek: weekEndNumber,
                    endMonth: (endMonth - 1),
                    endsInStartMonth: startMonth === endMonth,
                };
            })

            return simulation;
        }



        function detailIncrements(increments) {
            scopeVariable.index = 0

            let detailed = increments.map((increment) => {

                let splitedStartDate = increment.dataCriacao.split('-')
                let splitedEndDate = increment.dataTermino.split('-')

                let weekStartNumber = setWeekByDate(splitedStartDate[2])
                let weekEndNumber = setWeekByDate(splitedEndDate[2])

                let startMonth = Number(splitedStartDate[1])
                let startYear = Number(splitedStartDate[0])

                let endMonth = Number(splitedEndDate[1])
                // let endYear = Number(splitedEndDate[0])

                let currentMonth = timelineMonth + 1


                if (startMonth !== endMonth && startMonth !== currentMonth) {
                    scopeVariable.simulationIndex = 0;

                    let timelineStartIncrements = getTimelineIncrements(startMonth, startYear)
                    let simulation = simulateIndexGeneration(timelineStartIncrements, startMonth)
                    let simulationIncrement = simulation.filter(simulationIncrement => simulationIncrement.id === increment.id)


                    scopeVariable.index++
                    return {
                        ...increment,
                        startWeek: weekStartNumber,
                        index: simulationIncrement[0].index,
                        endWeek: weekEndNumber,
                        endMonth: (endMonth - 1),
                        startMonth,
                        endsInStartMonth: startMonth === endMonth,
                    };
                }

                return {
                    ...increment,
                    startWeek: weekStartNumber,
                    index: scopeVariable.index++,
                    endWeek: weekEndNumber,
                    endMonth: (endMonth - 1),
                    startMonth,
                    endsInStartMonth: startMonth === endMonth,
                };
            })

            return detailed;
        }



        let currentTimeLineIncrements = getTimelineIncrements((timelineMonth + 1), timelineYear)
        let detailedIncrements = detailIncrements(currentTimeLineIncrements)
        // console.log(detailedIncrements);


        for (let i = 0; i < detailedIncrements.length; i++) {

            for (let j = 0; j < detailedIncrements.length; j++) {

                if (detailedIncrements[i].index === detailedIncrements[j].index && detailedIncrements[i].id !== detailedIncrements[j].id) {
                    if (detailedIncrements[j].endsInStartMonth) {
                        detailedIncrements[j].index++
                    }
                }

            }

        }



        let incrementsWeek1 = detailedIncrements.filter(increment => increment.startWeek === 1)
        let incrementsWeek2 = detailedIncrements.filter(increment => increment.startWeek === 2)
        let incrementsWeek3 = detailedIncrements.filter(increment => increment.startWeek === 3)
        let incrementsWeek4 = detailedIncrements.filter(increment => increment.startWeek === 4)

        setWeek1(incrementsWeek1)
        setWeek2(incrementsWeek2)
        setWeek3(incrementsWeek3)
        setWeek4(incrementsWeek4)
    }



    function setWeekByDate(data) {

        if (Number(data) <= 7) {
            return 1
        } else if (Number(data) >= 8 && Number(data) <= 14) {
            return 2
        } else if (Number(data) >= 15 && Number(data) <= 21) {
            return 3
        } else {
            return 4
        }
    }

    function formatMonth(monthNumber) {
        let months = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ]

        return months[monthNumber]
    }

    function formatWeekDay(weekDayNumber) {
        let weekDays = [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sab'
        ]

        return weekDays[weekDayNumber]
    }

    function timelineEnd() {
        if (
            timelineMonth === date.getMonth() &&
            timelineYear === date.getFullYear()) {
            return true
        }

        return false
    }

    function changeTimelineDate(direction) {


        if (direction === 'next') {

            if (timelineEnd()) return;

            if (timelineMonth === 11) {
                setTimelineMonth(0)
                setTimelineYear(timelineYear + 1)
                return;
            }

            setTimelineMonth(timelineMonth + 1)
            return;

        }

        if (direction === 'previous') {

            if (timelineMonth === 0) {
                setTimelineMonth(11)
                setTimelineYear(timelineYear - 1)
                return;
            }

            setTimelineMonth(timelineMonth - 1)
            return;
        }
    }

    useEffect(() => {
        separeteByWeek()

    }, [timelineMonth, timelineYear, allIncrements])


    useEffect(() => {

        const card = document.querySelector('.increments')
        const cardHeight = card ? card.clientHeight : 1
        setIncrementCardHeight(cardHeight)

    }, [week1, week2, week3, week4])



    return (
        <div id='timeline-page' ref={reference}>

            <CreateTimelineItem
                popupIsVisible={popupIsVisible}
                setPopupIsVisible={setPopupIsVisible}
                setAllIncrements={setAllIncrements}
                allIncrements={allIncrements}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
            />

            <div id="timeline-container">

                <div id="timeline-header">
                    <h1>Linha do tempo</h1>

                    <div>
                        <h2>
                            <div>{formatMonth(timelineMonth)} {timelineYear}</div>
                            <MdArrowBackIos
                                className='arrows'
                                onClick={() => changeTimelineDate('previous')}
                            />

                            <MdArrowForwardIos
                                className={`arrows ${timelineEnd() && 'diseble'}`}
                                onClick={() => changeTimelineDate('next')}
                            />
                        </h2>

                        <span onClick={() => setPopupIsVisible(true)} >+ Criar novo</span>
                    </div>

                </div>


                <div id="timeline">

                    <div className="week-container">

                        <div className='week-header'>
                            <strong>SEMANA 1</strong>
                            <span>1-7 {formatWeekDay(new Date(timelineYear, timelineMonth, 1).getDay())}</span>
                        </div>

                        {week1.map(card => (
                            <TimelineCard
                                key={card.id}
                                card={card}
                                timelineMonth={timelineMonth}
                                incrementCardHeight={incrementCardHeight}
                                setPopupIsVisible={setPopupIsVisible}
                                setSelectedCard={setSelectedCard}
                            />
                        ))}

                    </div>

                    <div className="week-container">

                        <div className='week-header'>
                            <strong>SEMANA 2</strong>
                            <span>8-14 {formatWeekDay(new Date(timelineYear, timelineMonth, 8).getDay())}</span>
                        </div>

                        {week2.map(card => (
                            <TimelineCard
                                key={card.id}
                                card={card}
                                timelineMonth={timelineMonth}
                                incrementCardHeight={incrementCardHeight}
                                setPopupIsVisible={setPopupIsVisible}
                                setSelectedCard={setSelectedCard}
                            />
                        ))}

                    </div>

                    <div className="week-container">

                        <div className='week-header'>
                            <strong>SEMANA 3</strong>
                            <span>15-21 {formatWeekDay(new Date(timelineYear, timelineMonth, 15).getDay())}</span>
                        </div>

                        {week3.map(card => (
                            <TimelineCard
                                key={card.id}
                                card={card}
                                timelineMonth={timelineMonth}
                                incrementCardHeight={incrementCardHeight}
                                setPopupIsVisible={setPopupIsVisible}
                                setSelectedCard={setSelectedCard}
                            />
                        ))}

                    </div>

                    <div className="week-container">

                        <div className='week-header'>
                            <strong>SEMANA 4</strong>
                            <span>22-{lastDayOfMonth} {formatWeekDay(new Date(timelineYear, timelineMonth, 22).getDay())}</span>
                        </div>

                        {week4.map(card => (
                            <TimelineCard
                                key={card.id}
                                card={card}
                                timelineMonth={timelineMonth}
                                incrementCardHeight={incrementCardHeight}
                                setPopupIsVisible={setPopupIsVisible}
                                setSelectedCard={setSelectedCard}
                            />
                        ))}


                    </div>

                </div>
            </div>

        </div>

    );
}

export default Timeline;