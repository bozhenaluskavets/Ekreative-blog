import { Link } from "react-router-dom";
import { Content, InvitationBlock, Title, StartDetails, Text, Items, Item, Image } from "./style";
import image from "../../assets/start-page-img.png"

export const Home = () => {
    return (
        <Content>
            <InvitationBlock>
                <Title>Collect Your Thoughts.</Title>
                <Image src={image} />
            </InvitationBlock>
            <StartDetails>
                <Text>Write posts and announcements & share them with other the simple way for free.</Text>
                <Items>
                    <Link to={'posts'}><Item>Posts</Item></Link>
                    <Link to={'announcements'}><Item>Announcements</Item></Link>
                </Items>
            </StartDetails>
        </Content>
    );
}