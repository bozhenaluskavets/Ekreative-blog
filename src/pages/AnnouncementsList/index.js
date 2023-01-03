import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Title } from "../../globalStyles";
import { fetchAnnouncements } from "../../store/slices/announcements";
import { Content, Extra, Item, Items, Announcement, Announcements } from "./style";

export const AnnouncementsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnnouncements())
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state,
            isLoading: state.ui.isLoading
        }
    })

    const renderAnnouncements = () => {
        const announcement = reduxData.list.announcements.list;

        return announcement.map((announcement, index) => {
            return (
                <Announcements key={index}>
                    <Link to={'/announcements/' + announcement.id}>
                        <Announcement>
                            <Extra>{announcement.title}</Extra>
                            <Items>
                                <Item>Created: {announcement.createdAt}</Item>
                                <Item>Updated: {announcement.updatedAt}</Item>
                            </Items>
                        </Announcement>
                    </Link>
                </Announcements>
            )
        })
    }

    if (reduxData.isLoading) {
        return 
    }

    return (
        <Container>
            <Content>
                <Title>Announcements</Title>
                {renderAnnouncements()}
            </Content>
        </Container>
    )
}