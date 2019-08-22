import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeCompelte = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.done();
}

const Logo = styled.h1`
    font-size: 3rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    animation: skew 3s infinite;
    transform: skew(20deg);
    animation-direction: alternate;
    @keyframes skew {
    0% { 
        transform: skewX(20deg);
    }
    100% {
        transform: skewX(-20deg);
    }
    }

    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.blueberry};
        color: ${props => props.theme.offWhite};
        text-transform: uppercase;
        text-decoration: none;
        }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }

`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.apricot};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${props => props.theme.citrus}
    }
`;

const Header = () => (
    <StyledHeader>
        <div className ='bar'>
            <Logo>
                <Link href=''>
                    <a>Hook</a>
                </Link>
            </Logo>
            <Nav/>
        </div>
        
        <div className='sub-bar'>
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;