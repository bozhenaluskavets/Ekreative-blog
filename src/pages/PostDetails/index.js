import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { CreateCommentForm } from "../../components/CreateCommentForm";
import { Disclaimer } from "../../components/Disclaimer";
import { PostsComments } from "../../components/PostComments";
import { Container, OBcentering, OptionsButton, Title } from "../../globalStyles";
import { fetchPostDetails } from "../../store/slices/postDetails";
import { deleteOwnPost } from "../../store/slices/posts";
import { Align, Post, Subtitle, Text } from "./style";

export const PostDetails = () => {

    const [isShown, setIsShown] = useState(false);

    const show = () => {
        setIsShown(true)
    }

    const hide = () => {
        setIsShown(false)
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let params = useParams()

    useEffect(() => {
        dispatch(fetchPostDetails(params.id))
    }, [])

    const reduxData = useSelector((state) => {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            list: state,
            isLoading: state.ui.isLoading,
            userId: state.auth.userInfo.id
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

                {(details.userId == reduxData.userId) && (
                    <Align>
                        <OBcentering>
                            <OptionsButton onClick={() => {
                                dispatch(deleteOwnPost(details.id));
                                navigate('/posts');
                            }}>Delete post</OptionsButton>
                        </OBcentering>
                    </Align>
                )}

                <Subtitle>Comments</Subtitle>
                <PostsComments />
                <Align>
                    {!isShown && (
                        <OBcentering>
                            <OptionsButton onClick={show}>Create</OptionsButton>
                        </OBcentering>
                    )}

                    {(isShown && !reduxData.isAuthenticated) && (
                        <>
                            <Disclaimer />
                            <OBcentering>
                                <OptionsButton onClick={hide}>OK</OptionsButton>
                            </OBcentering>
                        </>
                    )}

                    {(isShown && reduxData.isAuthenticated) && (
                        <OBcentering>
                            <CreateCommentForm />
                            <OptionsButton onClick={hide}>Hide form</OptionsButton>
                        </OBcentering>
                    )}
                </Align>
            </Post>
        </Container>
    )
}