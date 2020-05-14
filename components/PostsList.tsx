import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { deletePostOperation } from '../store/posts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { IReduxStore } from '../interfaces/index';

const StyledDiv = styled.div`
    width: 80%;
    margin: 1.5rem auto;
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h2`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
`;

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
`;

const StyledListItem = styled.li`
    width: 30%;
    height: 30vh;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f7f7f7;
    margin-bottom: 1rem;
`;

const StyledButtonDelete = styled.button`
    outline: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;

    &:hover {
        color: grey;
    }
`;

const StyledButtonReadMore = styled.button`
    outline: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;

    &:hover {
        color: grey;
    }
`;

const StyledLink = styled.a`
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;

const PostsList: React.FC = () => {
    const posts = useSelector((state: IReduxStore) => state.posts);
    posts.reverse();
    const dispatch = useDispatch();
    return (
        <StyledDiv>
            <StyledTitle>Posts</StyledTitle>
            <StyledList>
                {posts.map((el: any) => (
                    <StyledListItem key={el.id}>
                        <Link as={`/posts/${el.id}?_embed=comments`} href="/posts/[id]">
                            <StyledLink>
                                <span>{el.title}</span>
                                <StyledButtonReadMore>Read more</StyledButtonReadMore>
                            </StyledLink>
                        </Link>
                        <StyledButtonDelete onClick={() => dispatch(deletePostOperation(el.id))}>
                            Delete post
                        </StyledButtonDelete>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledDiv>
    );
};

export default PostsList;
