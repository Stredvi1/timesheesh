import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Typography, Stack} from "@mui/material";
import time from "../../utils/formatters/worktimeFormatter";
import Link from "next/link";
import Progress from "@/components/progressCircle";
import percentage from "@/utils/percentage";


export default function ActivityCard(activity) {
    const ActivityCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: '20%',
    }));

    return (
        <ActivityCard>
            <Typography variant="h4" color="primary">{activity.name}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    position: "relative"
                }}>
                <Box sx={{pb: 2, pt: 1}}>
                    <Typography><strong>Přiřazeno: </strong>{activity.fullName}</Typography>
                    <Typography><strong>Časofond: </strong>{time(activity.timefund)}</Typography>
                    <Typography><strong>Odpracováno: </strong>{time(activity.workingTime)}</Typography>
                </Box>

                <Box
                    sx={{
                        right: 20,
                        position: "absolute"
                    }}>
                    <Progress value={percentage(activity.timefund, activity.workingTime)} size={"5rem"} color={"secondary"}
                              textColor={"primary"}/>
                </Box>
            </Stack>
            <Link href={`/activity/${activity.id}`}>
                <Button variant="contained">Detail</Button>
            </Link>
        </ActivityCard>
    )
}
