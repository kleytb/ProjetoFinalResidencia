import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai'

import { 
    Container,
    Content,
    Footer

} from './styles';

import ProjectInformatonCard from '../ProjectInformatonCard';

function ProjectInformation({title, setPopupIsVisible, reference, data, setChangedItem}) {
  return (
    <Container ref={reference}>
        <h1>{title}</h1>
        <div>
            <Content>
                {data.map(item => {
                    return <ProjectInformatonCard key={item.id} type={item.type} item={item} setChangedItem={setChangedItem} />
                })}
            </Content>

            <Footer>
                <div>
                    <AiOutlinePlus onClick={() => setPopupIsVisible(true)} />
                    <span onClick={() => setPopupIsVisible(true)}>
                        Adicionar um {title.substring(0, title.length - 1).toLowerCase()}
                    </span>
                </div>
            </Footer>
        </div>
    </Container>
  );
}

export default ProjectInformation;