import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { IReduxStore } from '../interfaces/index';

const StyledDiv = styled.div`
    width: 50%;
    margin: 2rem auto;
`;

const StyledTitle = styled.h2`
    margin-bottom: 2rem;
    text-align: center;
`;

const StyledBody = styled.p`
    margin-bottom: 2rem;
    text-align: center;
`;

const StyledLink = styled.a`
    width: 173px;
    text-decoration: none;
    display: block;
    background-color: #090a0b;
    margin: 2rem auto 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    padding: 10px;
    border: 1px solid hsla(0, 0%, 100%, 0.6);
    color: #fff;
    border-radius: 999px;
    cursor: pointer;
    text-align: center;
`;

const PostDetail = () => {
    const currentPost = useSelector((state: IReduxStore) => state.currentPost);
    return (
        <StyledDiv>
            <StyledTitle>{currentPost && currentPost.title}</StyledTitle>
            <StyledBody>{currentPost && currentPost.body}</StyledBody>
            {/*<StyledBody>{currentPost && currentPost.comments}</StyledBody>*/}
            <Link href="/">
                <StyledLink>To all posts</StyledLink>
            </Link>
        </StyledDiv>
    );
};

export default PostDetail;
