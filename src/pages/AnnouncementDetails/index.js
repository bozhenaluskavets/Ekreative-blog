import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { Container, Title } from "../../globalStyles";
import { fetchAnnouncementDetails } from "../../store/slices/announcementsDetails";
import { Announcement, Text } from "./style";

export const AnnouncementDetails = () => {
    const dispatch = useDispatch();
    let params = useParams()

    useEffect(() => {
        dispatch(fetchAnnouncementDetails(params.id))
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state,
            isLoading: state.ui.isLoading
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
        </Container>
    )
}