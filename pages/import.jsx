import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useHolidysQuery, useLoginHooks } from './api/data/useQuery'

const ImPort = () => {
    const [newUser, setNewUser] = useState({name: '', email: ''});
    const { isLoading, data, isError, error } = useHolidysQuery('kr');

    // 1) useLoginHooks 가져오기
    
    return (
        <Container>
            {
                isLoading ? 
                <h2>Loading...</h2> :
                data.data.map((content, i) => (
                    <Content key={i}>
                        {content.date} / {content.localName}
                    </Content>
                )) 
            }
            <ImportButton onClick={()=> console.log('123')}>
                IMPORT
            </ImportButton>
            <ImportButton onClick={()=> console.log(data)}>
                GET-DATA
            </ImportButton>
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    h2 {
        font-size: 26px;
        color: #f00;
    }
`
const ImportButton = styled.button`
    width: 180px;
    font-size: 24px;
    padding: 10px 18px;
    border-radius: 4px;
    cursor: pointer;
`

const Content = styled.div`
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`
export default ImPort;