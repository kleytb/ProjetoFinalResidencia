import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'

import api from '../../service/api'

import { Contain } from './style'

import DroppableCard from './DroppableCard';

const data = [
  {
    id: 'column-1',
    name: 'A fazer',
    priorityColor: '#C4C4C4',
    cards: []
  },

  {
    id: 'column-2',
    name: 'Fazendo',
    priorityColor: '#FDFF89 ',
    cards: []
  },

  {
    id: 'column-3',
    name: 'Feito',
    priorityColor: '#26C05B',
    cards: []
  },
]



function App() {
  const [columns, setColumns] = useState(data)
  const [deletedCardsIds, setDeletedCardsIds] = useState([])


  function formatDate(dates) {

    let day = dates.getDate().toString().padStart(2, '0'),
    month = (dates.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    year = dates.getFullYear();


    return `${year}-${month}-${day}`;

  }


  async function updateIncrement(increment) {
    console.log(increment);
    await api.put(`/api/incrementos/${Number(increment.id)}`, {
      id: Number(increment.id),
      nome: increment.title,
      status: increment.status,
      pontos: increment.points,
      dataCriacao: increment.criationDate,
      dataTermino: increment.endDate,
      projeto: increment.projectId
    })

  }

  async function deleteIncrement(id) {
    await api.delete(`/api/incrementos/${id}`)

    setDeletedCardsIds([...deletedCardsIds, id])
}


  function handleOnDragEnd(result) {
    const { source, destination } = result

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) return



    function reorganizeCards(column) {

      const items = [...column.cards]

      if (source.droppableId === destination.droppableId) {
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        return items;
      }


      let nextItems = items.slice(destination.index) // armazenando todos os elementos que estão depois do index q foi alterado
      let reorderedItem = nextItems.pop() // retirando o ultimo card
      nextItems.unshift(reorderedItem) // colocando ultimo card na primera posição

      items.splice(destination.index) // apagando todos os elementos depois do index alterado
      items.push(...nextItems)

      return items;
    }


    var draggedCard
    if (source.droppableId !== destination.droppableId) {
      columns.forEach(column => {

        column.cards.forEach(card => {
          if (card.id === result.draggableId) {
            draggedCard = card
          }
        })

      })
    }


    const newColumns = columns.map((column) => {

      if (source.droppableId !== destination.droppableId) {

        if (column.id === destination.droppableId) {
          let cards = column.cards

          draggedCard.status = column.name

          if (column.name.toLocaleLowerCase() === 'feito') {
            draggedCard.endDate = formatDate(new Date())
          }else {
            draggedCard.endDate = null;
          }

          updateIncrement(draggedCard)

          cards.push(draggedCard)

          return {
            ...column,
            cards: reorganizeCards(column)
          }
        }

        if (column.id === source.droppableId) {
          let cardIndex = column.cards.indexOf(draggedCard)
          let cards = column.cards
          cards.splice(cardIndex, 1)

          return {
            ...column,
            cards: cards
          }
        }

      }

      if (source.droppableId === destination.droppableId && column.id === destination.droppableId) {
        return {
          ...column,
          cards: reorganizeCards(column)
        }
      }

      return column
    })


    setColumns(newColumns)
  }


  useEffect(() => {

    async function getIncrements() {
      let increments = await api.get(`/api/incrementos`)
      increments = increments.data

      increments = increments.map(increment => {
        return {
          id: String(increment.id),
          title: increment.nome,
          status: increment.status,
          points: increment.pontos,
          criationDate: increment.dataCriacao,
          endDate: increment.dataTermino,
          projectId: increment.projeto.id
        }
      })


      let toDoIncrements = increments.filter(increment => increment.status.toLowerCase() === 'a fazer')
      let doingIncrements = increments.filter(increment => increment.status.toLowerCase() === 'fazendo')
      let doneIncrements = increments.filter(increment => increment.status.toLowerCase() === 'feito')

      let newColumns = columns.map(column => {
        if (column.name.toLocaleLowerCase() === 'a fazer') {

          return {
            ...column,
            cards: toDoIncrements
          }

        } else if (column.name.toLocaleLowerCase() === 'fazendo') {

          return {
            ...column,
            cards: doingIncrements
          }
        }


        return {
          ...column,
          cards: doneIncrements
        }
      })


      setColumns(newColumns)

    }

    getIncrements()

  }, [deletedCardsIds])

  return (
    <Contain>
      <div id="container">

        <DragDropContext onDragEnd={handleOnDragEnd}>

          {columns.map(({ id, name, priorityColor, cards }) => (
            <DroppableCard
              key={id}
              id={id}
              cards={cards}
              handleOnDragEnd={(result) => handleOnDragEnd(result)}
              title={name}
              priorityColor={priorityColor}
              handleDelete={deleteIncrement}
            />
          ))}

        </DragDropContext>
      </div>
    </Contain>
  );
}

export default App;