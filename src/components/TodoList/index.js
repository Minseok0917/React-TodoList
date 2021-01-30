import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const TodoList = function () {
    const [state, setState] = useState([]);

    function Keydown(event) {
        const { target, keyCode } = event;
        const value = target.value;
        const isResult = [13, 9].includes(keyCode);
        if (isResult) {
            event.preventDefault();
            if (value.length) {
                setState([
                    ...state,
                    {
                        status: false,
                        value: value,
                    },
                ]);
                target.value = "";
            }
        }
    }
    function Input(event) {
        const target = event.target;
        const value = target.value.replaceAll(
            /[^A-Za-z가-힣ㄱ-ㅎ0-9\_\-]/gi,
            ""
        );
        target.value = value;
    }
    return (
        <div>
            <TodoInput
                type="text"
                placeholder="Add Todo"
                onKeyDown={Keydown}
                onInput={Input}
            />
            <TodoContent state={state} setState={setState} />
        </div>
    );
};

const TodoContent = function ({ state, setState }) {
    function deleteClick(event) {
        const index = event.target.parentNode.getAttribute("data-index");
        state.splice(index, 1);
        setState([...state]);
    }
    function valueClick(event) {
        const index = event.target.parentNode.getAttribute("data-index");
        state[index].status = !state[index].status;
        setState([...state]);
    }
    return (
        <TodoContentStyle>
            {state.map((data, index) => {
                const { status, value } = data;

                return (
                    <Row data-index={index}>
                        <RowValue
                            className={status ? "active" : ""}
                            onClick={valueClick}
                        >
                            {value}
                        </RowValue>
                        <Button onClick={deleteClick}>X</Button>
                    </Row>
                );
            })}
        </TodoContentStyle>
    );
};
const TodoContentStyle = styled.div`
    margin-top: 20px;
`;
const RowFadeTop = keyframes`
    0%{
        transform:translateY(-10px);
        opacity:0;
    }
    100%{
        transform:translateY(0px);
        opacity:1;
    }
`;
const Row = styled.div`
    height: 50px;
    line-height: 50px;
    animation: ${RowFadeTop} 0.2s linear both;
`;

const RowValue = styled.span`
    font-size: 1.4rem;
    color: #666;
    font-weight: 300;
`;
const Button = styled.button`
    background: transparent;
    border: 0;
    outline: none;
    padding: 3px 20px;
`;
const TodoInput = styled.input`
    width: 100%;
    height: 50px;
    outline: unset;
    padding: 0 15px;
    font-size: 1.6rem;
    border: unset;
    box-shadow: 2px 2px 8px #ddd;
    transition: 0.5s;
    position: relative;
    &:focus {
        background: #333;
        color: #fff;
    }
    &::placeholder {
        color: #bbb;
    }
`;

export default TodoList;
