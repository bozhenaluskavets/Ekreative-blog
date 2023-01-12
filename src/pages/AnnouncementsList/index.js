import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Title } from "../../globalStyles";
import { fetchAnnouncements } from "../../store/slices/announcements";
import { Content, Extra, Item, Items, Announcement, Announcements } from "./style";
import { CreateAnnounsForm } from "../../components/CreateAnnounsForm";
import { OBcentering, OptionsButton } from "../../globalStyles";
import { useState } from "react";

export const AnnouncementsList = () => {

    const [isShown, setIsShown] = useState(false);

    const show = () => {
        setIsShown(true)
    }

    const hide = () => {
        setIsShown(false)
    }

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
                    <Announcement>
                        <Link to={'/announcements/' + announcement.id}>
                            <Extra>{announcement.title}</Extra>
                        </Link>
                        <Items>
                            <Item>Created: {announcement.createdAt}</Item>
                            <Item>Updated: {announcement.updatedAt}</Item>
                        </Items>
                    </Announcement>
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
                <OBcentering>
                    <OptionsButton onClick={show}>Create</OptionsButton>
                </OBcentering>

                {isShown && (
                    <OBcentering>
                        <CreateAnnounsForm />
                        <OptionsButton onClick={hide}>Hide form</OptionsButton>
                    </OBcentering>
                )}
                {renderAnnouncements()}
            </Content>
        </Container>
    )
}