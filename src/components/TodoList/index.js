import React, { useState } from "react";

const TodoList = function () {
    const [state, setState] = useState([]);

    function Keydown(event) {
        const { target, keyCode } = event;
        const value = target.value;
        const isResult = [13].includes(keyCode);
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
    function Input() {}
    return (
        <div>
            <TodoInput keydown={Keydown} input={Input} />
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
        state[index].status = true;
        setState([...state]);
    }
    return (
        <div>
            {state.map((data, index) => {
                const { status, value } = data;

                return (
                    <div data-index={index}>
                        <span
                            className={status ? "active" : ""}
                            onClick={valueClick}
                        >
                            {value}
                        </span>
                        <button onClick={deleteClick}>X</button>
                    </div>
                );
            })}
        </div>
    );
};
const TodoInput = function ({ keydown, input }) {
    return (
        <input
            type="text"
            placeholder="aaa"
            onKeyDown={keydown}
            onInput={input}
        />
    );
};

export default TodoList;
