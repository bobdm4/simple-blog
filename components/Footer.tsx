import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    background-color: #090a0b;
    display: flex;
    justify-content: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <span>I'm a Footer</span>
        </StyledFooter>
    );
};

export default Footer;
