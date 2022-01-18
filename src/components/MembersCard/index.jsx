import React from 'react';

import './styles.css';

import profilePic from '../../images/ProfilePic.png'
import contactPic from '../../images/contactPic.png'

export function MembersCard({ name, project, role, email, telephone, imageUrl }) {
    const projectVisibility = project ? 'unset' : 'hidden'
    const roleVisibility = role ? 'unset' : 'hidden'

    function formatTelephone(telephone) {

        if (telephone === null) return;

        let tell = telephone.split("")
        tell.splice(2, 0, " ")
        tell.splice(8, 0, "-")

        return tell.join('')
    }

    const image = project ? contactPic : profilePic

    return (

        <div className='members-card'>

            <div className='members-card-image'>
                <img
                className={ project && 'contact-pic'}
                    src={
                        imageUrl
                            ? `http://169.57.150.59:8012/images/${imageUrl}`
                            : image
                    }
                    alt='Foto do usuário'
                />
            </div>

            <div className='members-card-content-container'>

                <div className='members-card-content'>
                    <span>Nome</span>
                    <strong>{name}</strong>
                </div>

                <div className='members-card-content' style={{ visibility: projectVisibility }}>
                    <span>Projeto</span>
                    <strong>{project}</strong>
                </div>

                <div className='members-card-content' style={{ visibility: roleVisibility }}>
                    <span>Papel no projeto</span>
                    <strong>{role}</strong>
                </div>

                <div className='members-card-content'>
                    <span>email</span>
                    <strong>{email}</strong>
                </div>

                <div className='members-card-content'>
                    <span>telefone</span>
                    <strong>{formatTelephone(telephone)}</strong>
                </div>

            </div>
        </div>
    );
}