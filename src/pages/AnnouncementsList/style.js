import styled from "styled-components";

export const Content = styled.div`
    margin-top: 15vh;
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
    box-shadow: rgba(177, 190, 159, 0.808) 0px 0px 8px 0px;
    :hover {
        box-shadow: rgba(255, 255, 255, 0.808) 0px 0px 11px 0px;
    }
`

export const Items = styled.div`
    position: absolute;
    bottom: 20px;
`

export const Item = styled.p`
    color: #fff;
    font-size: 20px;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
`

export const Extra = styled.h5`
    color: #fff;
    letter-spacing: 1.5px;
    font-size: 25px;
    text-align: center;
`