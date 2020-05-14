import React, { useState } from 'react';
import { createComOperation } from '../store/posts/operations';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const StyledForm = styled.form`
    width: 600px;
    margin: 1.5rem auto;
    padding: 3rem 0;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    border: 1px solid #f7f7f7;
`;

const StyledTextArea = styled.textarea`
    width: 80%;
    margin: 1rem auto;
    padding: 10px;
`;

const StyledButton = styled.button`
    width: 30%;
    margin: 1rem auto;
    padding: 0 20px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    line-height: 39px;
    font-weight: 400;
    text-align: center;
    background: linear-gradient(#4fb7f0, #29a0e0 60%, #29a0e0 90%, #36a6e2);
    border-radius: 5px;
`;

const StyledTitle = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
`;

const PostsList: React.FC = () => {
    const dispatch = useDispatch();

    const [comBody, setComBody] = useState<string>('');
    const hahdleComBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComBody(e.target.value);
    };

    const handleAddCom = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createComOperation({ id: 113, body: comBody }));
        setComBody('');
    };

    return (
        <StyledForm onSubmit={handleAddCom}>
            <StyledTitle>Add comment</StyledTitle>
            <StyledTextArea value={comBody} required onChange={hahdleComBody} placeholder="Comment..." />
            <StyledButton type="submit">Publish comment</StyledButton>
        </StyledForm>
    );
};

export default PostsList;
