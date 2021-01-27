import React, { useState } from "react";
import styled from "styled-components";
import { TodoForm } from "../../modules/Form";

const MaxLength = 12;

const TodoWrapStyle = styled.div``;
const TodoContent = function ({ state }) {
    return <div>{state.map(tlqkf)}</div>;
};
const tlqkf = function (text) {
    return <p>{text}</p>;
};
const TodoWrap = function () {
    const [state, setState] = useState([]);
    const HandleFormInput = function (event) {
        const target = event.target;
        const value = target.value.replace(/[^0-9가-힣ㄱ-ㅎA-Za-z\_\-]/g, "");
        target.value =
            value.length > MaxLength ? value.substr(0, MaxLength) : value;
    };
    const HandleFormKeyDown = function (event) {
        const { target, keyCode } = event;
        const value = target.value;
        const isResult = [13, 32, 9].includes(keyCode);
        if (isResult) {
            event.preventDefault();
            if (value.length) {
                setState([...state, value]);
                target.value = "";
            }
        }
    };
    return (
        <div>
            <TodoForm
                InputEvent={HandleFormInput}
                KeyDownEvent={HandleFormKeyDown}
            />
            <TodoContent state={state} />
        </div>
    );
};

export default TodoWrap;
