import * as React from 'react';
import styled from "styled-components";
import ShowState from '../hooks/showState';

const Memo = () => {
    const [number, setNumber] = React.useState(0);
    const [text, setText] = React.useState('');

    const increaseNumber = () => {
        setNumber((prevState) => prevState + 1);
    };

    const decreaseNumber = () => {
        setNumber((prevState) => prevState - 1);
    };
    const onChangeTextHandler = (e:any) => {
        setText(e.target.value);
    }

    return (
        <Container>
            <div>
                <button onClick={increaseNumber}>+</button>
                <button onClick={decreaseNumber}>-</button>
                <input 
                    type="text" 
                    placeholder='Last Name'
                    onChange={onChangeTextHandler}
                />
            </div>
            <ShowState number={number} text={text}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        gap: 4px;
        margin-bottom: 24px;
    }
    div.value {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-size: 20px;
    }
    button {
        width: 30px;
        padding: 2px 8px;
        font-size: 20px;
        cursor: pointer;
    }
    input {
        font-size: 18px;
        padding: 3px 10px;
        margin-left: 8px;
        outline: none;
    }
`
export default Memo;