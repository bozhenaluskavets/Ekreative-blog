import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../globalStyles";
import { registerUser } from "../../store/slices/auth";
import { Content, ExtraItem, Item, Name, UserInfo } from "./style";

export const UserProfile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(registerUser)
    }, [])

    const reduxData = useSelector((state) => {
        return {
            userInfo: state.auth.userInfo
        }
    })

    const user = reduxData.userInfo;

    return (
        <Container>
            <Content>
                <UserInfo key={user.id}>
                    <Name>
                    <ExtraItem>{user.firstname}</ExtraItem>
                    <ExtraItem>{user.lastname}</ExtraItem>
                    </Name>
                    <Item>Email: {user.email}</Item>
                    <Item>Age: {user.age}</Item>
                </UserInfo>
            </Content>
        </Container>
    )
}