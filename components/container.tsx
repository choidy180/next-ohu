import Head from "next/head";
import styled from "styled-components";

const Container = ({children}:any) => {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <ContainerBox>
                {children}
            </ContainerBox>
        </>
    )
}

const ContainerBox = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 140px;
    background-color: #FFFFFF;
`

export default Container;