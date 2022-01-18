import React, { useEffect } from 'react';
import { useState } from 'react';

// import { FiSearch } from 'react-icons/fi'
import { MembersCardContainer } from '../../components/MembersCardContainer'

import Navbar from '../../components/ProjetosNavbar'

import api from '../../service/api'

import './styles.css';

function Members() {

  const TEAM_ID = JSON.parse(localStorage.getItem('teamId'))

  const [members, setMembers] = useState([])
  const [contacts, setContacts] = useState([])

  const [visibleMembers, setVisibleMembers] = useState(members)
  const [visibleContacts, setVisibleContacts] = useState(contacts)

  const [teamName, setTeamName] = useState('')


  function handleFilter(inputValue) {

    let filteredMembers = members.filter(member => member.name.toLowerCase().includes(inputValue.toLowerCase()))
    setVisibleMembers(filteredMembers);

    let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(inputValue.toLowerCase()))
    setVisibleContacts(filteredContacts);
  }

  useEffect(() => {

    async function loadData() {

      let teamResponse = await api.get(`/api/timesPorId/${TEAM_ID}`)
      let membersResponse = await api.get(`/api/TeamPeople/${TEAM_ID}`)
      let contactsResponse = await api.get(`/api/team/${TEAM_ID}`)

      setTeamName(teamResponse.data.nome);

      const formatedMembers = membersResponse.data.map(({ pessoa }) => {
        let { id, nome, email, telefone, foto } = pessoa;
  
        return {
          id,
          name: nome,
          email,
          telephone: telefone,
          foto
        }
      })

      const formatedContacts = contactsResponse.data.map(({ id, nome, projeto, papel, email, telefone }) => {

        return {
          id,
          name: nome,
          project: projeto.nome,
          role: papel,
          email,
          telephone: telefone
        }
      })


      setMembers(formatedMembers)
      setContacts(formatedContacts)

      setVisibleMembers(formatedMembers)
      setVisibleContacts(formatedContacts)
    }

    loadData()
  }, [TEAM_ID])

  return (
    <>
      <Navbar />
      <div id='members-container'>

        <div id='members-header'>

          <div id='members-header-title'>
            <span>Team</span>
            <h1>{teamName}</h1>
          </div>

          <button>Convidar</button>
        </div>

        <div id='members-filter'>
          <h2>Membros</h2>
          <input type="text" placeholder={`Pesquisar pessoas`} onChange={e => handleFilter(e.target.value)} />
        </div>

        <MembersCardContainer title={'Membros do Escritório'} members={visibleMembers} />
        <MembersCardContainer title={'Outros contatos'} members={visibleContacts} />

      </div>
    </>
  )
}

export default Members;