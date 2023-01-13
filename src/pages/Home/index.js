import { Link } from "react-router-dom";
import { Content, InvitationBlock, Title, StartDetails, Text, Items, Image } from "./style";
import image from "../../assets/start-page-img.png"
import { OptionsButton } from "../../globalStyles";

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
                    <Link to={'posts'}><OptionsButton>Posts</OptionsButton></Link>
                    <Link to={'announcements'}><OptionsButton>Announcements</OptionsButton></Link>
                </Items>
            </StartDetails>
        </Content>
    );
}