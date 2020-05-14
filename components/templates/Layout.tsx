import * as React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

type Props = {
    children: any;
};

const StyledDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Layout: React.FC<Props> = ({ children }) => (
    <StyledDiv>
        <Header />
        {children}
        <Footer />
    </StyledDiv>
);

export default Layout;
