import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Typography} from "@mui/material";
import currency from "../formatters/currencyFormatter";
import date from "../formatters/dateTimeFormatter";


export default function ProjectCard(props) {
    const ProjectCard = styled(Paper)(({ theme }) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
    }));

    return(
        <ProjectCard>
            <Box>
                <Typography variant="h4" color="primary">{props.name}</Typography>
            </Box>

            <Typography><strong>Budget: </strong>{currency(props.budget)}/></Typography>
            <Typography><strong>Deadline: </strong>{date(props.deadline)}</Typography>
            <Button variant="contained" href={`/project/${props.id}`}>Detail</Button>
        </ProjectCard>
    )
}
