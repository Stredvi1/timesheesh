import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Typography} from "@mui/material";
import Currency from "../formatters/currencyFormatter";
import Date from "../formatters/dateTimeFormatter";


export default function ActivityCard(props) {
    const ActivityCard = styled(Paper)(({ theme }) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
    }));

    return(
        <ActivityCard>
            <Box>
                <Typography variant="h4" color="primary">{props.name}</Typography>
            </Box>

            <Typography><strong>Přiřazeno: </strong>{props.fullName}</Typography>
            <Typography><strong>Časofond: </strong>{props.timefund}</Typography>
            <Typography><strong>Odpracováno: </strong>{props.workingTime}</Typography>
            <Button variant="contained" href={`/activity/${props.id}`}>Detail</Button>
        </ActivityCard>
    )
}
