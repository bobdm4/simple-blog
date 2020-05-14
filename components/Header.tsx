import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    padding: 2rem;
    background-color: #090a0b;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledNav = styled.nav`
    width: 230px;
    display: flex;
    justify-content: space-between;
`;

const StyledH2Logo = styled.h2`
    margin: 0;
    padding: 0;
    color: #fff;
    cursor: pointer;
    font-size: 25px;
    font-weight: 500;
    font-style: italic;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    &:hover {
        color: grey;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link href="/">
                <StyledH2Logo>simpleBlog</StyledH2Logo>
            </Link>

            <StyledNav>
                <Link href="/">
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/posts/new">
                    <StyledLink>Create new post</StyledLink>
                </Link>
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;
