import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { Content, Item } from "./style";

export const Home = () => {
    return (
        <Container>
            <Content>
                <Item><Link to={'posts'}>All posts</Link></Item>
                <Item><Link to={'announcements'}>All announcements</Link></Item>
            </Content>
        </Container>
    );
}