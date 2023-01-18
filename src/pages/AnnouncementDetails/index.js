import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, OBcentering, OptionsButton, Title } from "../../globalStyles";
import { deleteOwnAnnouncement } from "../../store/slices/announcements";
import { fetchAnnouncementDetails } from "../../store/slices/announcementsDetails";
import { Align } from "../PostDetails/style";
import { Announcement, Text } from "./style";

export const AnnouncementDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let params = useParams()

    useEffect(() => {
        dispatch(fetchAnnouncementDetails(params.id))
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state,
            isLoading: state.ui.isLoading,
            userId: state.auth.userInfo.id
        }
    })

    const details = reduxData.list.announcementDetails.list;

    if (reduxData.isLoading) {
        return
    }

    return (
        <Container>
            <Announcement>
                <Title>{details.title}</Title>
                <Text>{details.body}</Text>
            </Announcement>
            {(details.userId == reduxData.userId) && (
                <Align>
                    <OBcentering>
                        <OptionsButton onClick={() => {
                            dispatch(deleteOwnAnnouncement(details.id));
                            navigate('/announcements');
                        }}>Delete announcement</OptionsButton>
                        <Link to={`/announcements/edit/${details.id}`}><OptionsButton>Edit</OptionsButton></Link>
                    </OBcentering>
                </Align>
            )}
        </Container>
    )
}
