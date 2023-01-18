import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useHolidysQuery, useLoginHooks, useAddUserMutation } from './api/data/useQuery'

const ImPort = () => {
    const [newUser, setNewUser] = useState({name: '', email: '', password: ''});
    const { isLoading, data, isError, error } = useHolidysQuery('kr');

    // 1) useLoginHooks 가져오기
    const { mutate: addUser, isLoading2, isError2, error2 } = useAddUserMutation(newUser);

    // 2) mutate() 함수 실행부
    const handleClickAddButton = () => {
        addUser(newUser);
        setNewUser({name: '', email: '',  password: ''});
    }

    const loginTest = () => {
        axios({
            method: 'POST',
            // url: `https://storicha.in/api/User/SiteSnsLogin`,
            url: `https://httpbin.org/post`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: {
                site_user_id: 'testkwy@test.com',
                pwd: '1234QWER!',
            },
            withCredentials: true,
        }).then((response) => {
            console.log(response);
        }).catch((error)=> {
            console.log(error);
        })
    } 
    return (
        <Container>
            {/* {
                isLoading ? 
                <h2>Loading...</h2> :
                data.data.map((content, i) => (
                    <Content key={i}>
                        {content.date} / {content.localName}
                    </Content>
                )) 
            } */}
            {/* <input
                type="text" 
                defaultValue={''}
                placeholder='email'
                value={newUser.email}
                onChange={(e)=> setNewUser((prev) => ({...prev, email: e.target.value}))}
            />
            <input
                type="text" 
                defaultValue={''}
                placeholder='password'
                value={newUser.password}
                onChange={(e)=> setNewUser((prev) => ({...prev, password: e.target.value}))}
            /> */}
            <ImportButton onClick={handleClickAddButton}>
                ADD-USER
            </ImportButton>
            <ImportButton onClick={loginTest}>
                LOGIN
            </ImportButton>
            <ImportButton onClick={()=> console.log(data)}>
                GET-DATA
            </ImportButton>
            <p>{newUser.email} / {newUser.password}</p>
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
    gap: 10px;
    h2 {
        font-size: 26px;
        color: #f00;
    }
    input {
        background-color: transparent;
        font-size: 18px;
        outline: none;
        padding: 5.5px 10.5px;
        font-family: 'Pretendard-Regular';
        border-radius: 4px;
        color: #000000;
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