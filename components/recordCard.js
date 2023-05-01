import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Stack, Typography} from "@mui/material";
import date from "../formatters/dateTimeFormatter";
import Link from "next/link";


export default function RecordCard(record) {
    const RecordCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: '20%',
    }));

    return (
        <RecordCard>
            <Typography><strong>Working time: </strong>{record.workingTime}</Typography>
            <Typography><strong>Deadline: </strong>{date(record.date)}</Typography>
            <Typography><strong>Text: </strong>{record.text}</Typography>
        </RecordCard>
    )
}
