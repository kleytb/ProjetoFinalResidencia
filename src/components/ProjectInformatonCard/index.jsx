import React from 'react';
import {
    FiTrash2,
    FiClock,
    FiDownload,
    FiFlag,
    FiFileText,
    FiLink
} from 'react-icons/fi'

import contact from '../../images/contactPic.png'
import api from '../../service/api';

import {
    Container,
    ImageContainer,
    InformationContainer,
    Information,
    IconsContaner
} from './styles';

function ProjectInformatonCard({ type = 'contact', item, setChangedItem }) {

    function returnImage() {
        const images = {
            'contact': <img src={contact} alt="Ícone de usuário" />,
            'impediment': <FiFlag size={24} fill='#FF3434' />,
            'attachment': <FiFileText size={24} />,
            'link': <FiLink size={24} />,
        }

        return images[type]
    }

    function formatTelephone(telephone) {

        if (telephone === null) return;

        let tell = telephone.split("")
        tell.splice(2, 0, " ")
        tell.splice(8, 0, "-")

        return tell.join('')
    }

    function formatDate(date) {
        let splitedDate = date.split('-')

        const months = [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
        ]
        
        return `${splitedDate[2]} de ${months[Number(splitedDate[1]) - 1]}`
    }

    async function handleDelete() {

        if (type === 'contact') {
            await api.delete(`/api/deletarContatos/${item.id}`)
            setChangedItem(item.id)
            return;
        }

        if (type === 'impediment') {
            await api.delete(`/api/deletarImpedimentos/${item.id}`)
            setChangedItem(item.id)
            return;
        }

        await api.delete(`/api/deletaranexos/${item.id}`)
        setChangedItem(item.id)
    }

    return (
        <Container>
            <ImageContainer>{returnImage()}</ImageContainer>

            <InformationContainer type={type} >

                <Information type={type}>
                    <span>Nome</span>
                    <strong>{item.nome}</strong>
                </Information>

                {
                    type === 'link'
                        ?
                        (
                            <>
                                <Information type={type}>
                                    <span>Papel no projeto</span>
                                    <strong 
                                    style={{cursor: 'pointer'}}
                                    onClick={() => window.open(item.anexo) }
                                    >
                                        {item.anexo}
                                    </strong>
                                </Information>
                            </>
                        )
                        :
                        (
                            <>


                                <Information type={type}>
                                    <span>Papel no projeto</span>
                                    <strong style={{color: '#000'}}>{item.papel}</strong>
                                </Information>

                                <Information type={type}>
                                    <span>e-mail</span>
                                    <strong>{item.email}</strong>
                                </Information>

                                <Information type={type}>
                                    {
                                        type === 'contact'
                                            ?
                                            (
                                                <>
                                                    <span>Telefone</span>
                                                    <strong>{formatTelephone(item.telefone)}</strong>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <span>Criado em</span>
                                                    <strong style={{ display: 'flex', alignItems: 'center', color: '#656565' }}>
                                                        <FiClock style={{ marginRight: '5px' }} />
                                                        {item.dataCriacao !== undefined && formatDate(item.dataCriacao)}
                                                    </strong>
                                                </>
                                            )
                                    }

                                </Information>
                            </>
                        )
                }

            </InformationContainer>

            <IconsContaner type={type}>

                {
                    type === 'attachment'
                        ?
                        (
                            <>
                                <FiDownload className='download-icon' size={24} />
                                <FiTrash2 className='trash-icon' size={24} onClick={handleDelete} />
                            </>
                        )
                        : <FiTrash2 className='trash-icon' size={24} onClick={handleDelete} />
                }

            </IconsContaner>

        </Container>
    );
}

export default ProjectInformatonCard;