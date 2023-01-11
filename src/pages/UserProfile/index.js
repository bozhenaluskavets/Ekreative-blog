// import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Container } from "../../globalStyles";
// import { registerUser } from "../../store/slices/auth";
import { Content, ExtraItem, Item, Name, UserInfo } from "./style";

export const UserProfile = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(registerUser)
    // }, [])

    // const reduxData = useSelector((state) => {
    //     return {
    //         userInfo: state.auth.userInfo
    //     }
    // })

    // const user = reduxData.userInfo;

    const user = JSON.parse(localStorage.getItem('userInfo'));

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