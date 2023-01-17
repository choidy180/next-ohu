import { useQuery } from "react-query";
import styled from "styled-components";
import { handler } from './api/data/query-test';

const QueryTest = () => {
    const query = useQuery('fetchData', handler);
    return (
        <Container>
            <QueryButton onClick={()=> console.log(query)}>QUERY-BUTTON</QueryButton>
            {
                !query.isLoading && (
                    query.data.dataseries.map((i:any, index:number)=>(
                        <p key={index}>{i.cloudcover}</p>
                    ))
                )
            }
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
    gap: 8px;
    p {
        color: #000000;
    }
`
const QueryButton = styled.button`
    font-size: 24px;
    padding: 10px 18px;
    border-radius: 4px;
    cursor: pointer;
`
export default QueryTest;