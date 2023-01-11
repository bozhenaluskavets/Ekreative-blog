import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { PostsComments } from "../../components/PostComments";
import { Container, Title } from "../../globalStyles";
import { fetchPostDetails } from "../../store/slices/postDetails";
import { Post, Subtitle, Text } from "./style";

export const PostDetails = () => {
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
                <Subtitle>Comments:</Subtitle>
                <PostsComments />
            </Post>
        </Container>

    )
}