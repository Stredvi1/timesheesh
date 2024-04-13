import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import date from "../../utils/formatters/dateTimeFormatter";
import time from "../../utils/formatters/worktimeFormatter";
import RemoveButton from "@/components/removeButton";


export default function RecordCard(record) {
    const RecordCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: '100%',
    }));

    return (
        <RecordCard>
            <Typography><strong>Deadline: </strong>{date(record.date)}</Typography>
            <Typography><strong>Odpracováno: </strong>{time(record.workingTime)}</Typography>
            <Typography><strong>Poznámka:</strong></Typography>
            <Typography><i>{record.text}</i></Typography>
            <RemoveButton remove="record" recordID={record.id} textOnly={true} />
        </RecordCard>
    )
}
