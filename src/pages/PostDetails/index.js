import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { CreateCommentForm } from "../../components/CreateCommentForm";
import { PostsComments } from "../../components/PostComments";
import { Container, OBcentering, OptionsButton, Title } from "../../globalStyles";
import { fetchPostDetails } from "../../store/slices/postDetails";
import { Post, Subtitle, Text } from "./style";

export const PostDetails = () => {

    const [isShown, setIsShown] = useState(false);

    const show = () => {
        setIsShown(true)
    }

    const hide = () => {
        setIsShown(false)
    }

    const dispatch = useDispatch();
    let params = useParams()

    useEffect(() => {
        dispatch(fetchPostDetails(params.id))
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state,
            isLoading: state.ui.isLoading
        }
    })

    const details = reduxData.list.postDetails.list;
    
    if (reduxData.isLoading) {
        return 
    }

    return (
        <Container>
            <Post>
                <Title>{details.title}</Title>
                <Text>{details.body}</Text>
                <Subtitle>Comments</Subtitle>
                <OBcentering>
                    <OptionsButton onClick={show}>Create</OptionsButton>
                </OBcentering>

                {isShown && (
                    <OBcentering>
                        <CreateCommentForm />
                        <OptionsButton onClick={hide}>Hide form</OptionsButton>
                    </OBcentering>
                )}
                <PostsComments />
            </Post>
        </Container>

    )
}