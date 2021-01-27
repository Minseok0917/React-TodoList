import React from "react";
import styled from "styled-components";
import { SearchInput } from "../../atoms/Input";

const TodoFormStyle = styled.form`
    width: 600px;
`;

export const TodoForm = function ({ InputEvent, KeyDownEvent }) {
    return (
        <TodoFormStyle>
            <SearchInput
                onInput={InputEvent}
                onKeyDown={KeyDownEvent}
            ></SearchInput>
        </TodoFormStyle>
    );
};
