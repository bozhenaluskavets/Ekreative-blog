import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 5px 10px -4px rgb(0, 0, 0);
    z-index: 100000;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 25px 20%;
    height: 50px;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 100px;
`

export const Nav = styled.nav`
    display: flex;
    align-items: baseline;
    a:hover {
        color: rgba(101, 101, 101, 1);
    }
`

export const Items = styled.div`
    display: flex;
    margin-left: 40%;
`

export const Item = styled.p`
    cursor: pointer;
    transition: 0.3s;
    font-size: 22px;
    font-weight: 300;
    color: #fff;
    margin-right: 40px;
    :hover {
        color: rgb(177, 190, 159);
    }
`

export const Extra = styled.span`
    cursor: pointer;
    font-size: 35px;
    color: #fff;
`