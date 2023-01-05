import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Title } from "../../globalStyles";
import { fetchPosts } from "../../store/slices/posts";
import { Content, Extra, Item, Items, Post, Posts } from "./style";

export const PostsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state,
            isLoading: state.ui.isLoading
        }
    })

    const renderPosts = () => {
        const posts = reduxData.list.posts.list;

        return posts.map((post) => {
            return (
                <Posts key={post.id}>
                    <Link to={'/posts/' + post.id}>
                        <Post>
                            <Extra>{post.title}</Extra>
                            <Items>
                                <Item>Created: {post.createdAt}</Item>
                                <Item>Updated: {post.updatedAt}</Item>
                            </Items>
                        </Post>
                    </Link>
                </Posts>
            )
        })
    }

    if (reduxData.isLoading) {
        return 
    }

    return (
        <Container>
            <Content>
                <Title>Posts</Title>
                {renderPosts()}
            </Content>
        </Container>
    )
}