import React from 'react';

import './styles.css';

import { MembersCard } from '../MembersCard';

export function MembersCardContainer({ title, members }) {

    return (
        <div className='members-members-container'>

            <div className='members-title'>
                <strong>{title}</strong>
            </div>

            {
                members !== undefined ? members.map(member => {
                    return (
                        <MembersCard
                            key={member.id}
                            name={member.name}
                            email={member.email}
                            telephone={member.telephone}
                            imageUrl={member.foto}
                            project={member.project}
                            role={member.role}
                        />
                    )
                })
                : null
            }


        </div>
    );
}