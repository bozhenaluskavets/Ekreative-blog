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
    transition: .5s;
    position: relative;
`

export const Items = styled.div`
    position: absolute;
    bottom: 20px;
    background-color: rgb(244, 244, 244);
    border-radius: 40% 53% 10% 74% / 37% 76% 10% 55%;
`

export const Item = styled.p`
    color: rgb(0, 0, 0);
    font-size: 15px;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
    text-align: right;
`

export const Extra = styled.h5`
    transition: .3s;
    color: rgba(0, 0, 0);
    padding: 10px;
    letter-spacing: 1.5px;
    font-size: 25px;
    text-align: center;
    border-radius: 22% 78% 42% 58% / 30% 67% 33% 70% ;
    background-color: rgb(234, 234, 234);
    :hover {
        border-radius: 22% 78% 42% 58% / 57% 36% 64% 43% ;
        background-color: rgb(200, 200, 200);
    }
`