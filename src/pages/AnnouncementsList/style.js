import styled from "styled-components";

export const Content = styled.div`
    padding-top: 15vh;
    display: flex;
    flex-wrap: wrap;
`

export const Announcements = styled.div`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    width: 25%;
`

export const Announcement = styled.div`
    padding: 60px 30px;
    border-radius: 5px;
    margin: 0 20px 20px;
    height: 300px;
    transition: 0.3s;
    position: relative;
    cursor: pointer;
    cursor: pointer;
    border-radius: 22% 74% 24% 75% / 42% 91% 10% 42%;
    background-color: #ebebeb;
    :hover {
        border-radius: 81% 19% 66% 34% / 35% 24% 76% 65%;
        background-color: #d1d1d1;
    }
`

export const Items = styled.div`
    position: absolute;
    bottom: 20px;
`

export const Item = styled.p`
    color: rgba(0, 0, 0);
    font-size: 20px;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
`

export const Extra = styled.h5`
    color: rgba(0, 0, 0);
    letter-spacing: 1.5px;
    font-size: 25px;
    text-align: center;
`