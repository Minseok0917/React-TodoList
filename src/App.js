import React from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";

const Container = styled.div`
    width: 500px;
    margin: 0 auto;
`;
const Title = styled.h1`
    padding-top: 40px;
    font-size: 2rem;
    line-height: 3;
    text-align: center;
    opacity: 0.7;
`;

const App = function () {
    return (
        <Container>
            <Title>TodoList</Title>
            <TodoList></TodoList>
        </Container>
    );
};

export default App;

/* 
TodoList 계획
1. 생성
2. 삭제
3. 업데이트


Form 
 Input 
 Button 
*/
