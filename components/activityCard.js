import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Typography} from "@mui/material";
import time from "../formatters/worktimeFormatter";



export default function ActivityCard(activity) {
    const ActivityCard = styled(Paper)(({ theme }) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
    }));

    return(
        <ActivityCard>
            <Box>
                <Typography variant="h4" color="primary">{activity.name}</Typography>
            </Box>

            <Typography><strong>Přiřazeno: </strong>{activity.fullName}</Typography>
            <Typography><strong>Časofond: </strong>{time(activity.timefund)}</Typography>
            <Typography><strong>Odpracováno: </strong>{time(activity.workingTime)}</Typography>
            <Button variant="contained" href={`/activity/${activity.id}`}>Detail</Button>
        </ActivityCard>
    )
}
