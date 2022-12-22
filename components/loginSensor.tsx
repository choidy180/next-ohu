import * as React from 'react';
import { signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';

const LoginSensor = () => {
    const [ menuToggle, setMenuToggle ] = React.useState(false);
    const { data: session, status } = useSession();
    if(status === "authenticated") console.log("session", session);
    return (
        <Container>
            <nav className="bg-gray-100">
                <span>HOME</span>
            </nav>
        </Container>
        // <Container>
        //     <span>Home</span>
        //     <span>Features</span>
        //     <span>Pricing</span>
        // </Container>
    )
}

const Container = styled.div`
    position: absolute;
    bottom: 30px;
    right: 40px;
    background-color: #000000;
    color: #FFFFFF;
    padding: 8px 18.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    gap: 32px;
    span{
        font-size: 14px;
    }
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default LoginSensor;