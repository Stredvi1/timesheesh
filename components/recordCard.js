import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import date from "../formatters/dateTimeFormatter";
import time from "../formatters/worktimeFormatter";


export default function RecordCard(record) {
    const RecordCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: 'fit-content',
        height: 'fit-content',
    }));

    return (
        <RecordCard>
            <Typography><strong>Deadline: </strong>{date(record.date)}</Typography>
            <Typography><strong>Odpracováno: </strong>{time(record.workingTime)}</Typography>
            <Typography><strong>Poznámka:</strong></Typography>
            <Typography><i>{record.text}</i></Typography>
        </RecordCard>
    )
}
