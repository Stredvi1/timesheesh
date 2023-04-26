import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Typography} from "@mui/material";
import currency from "../formatters/currencyFormatter";
import date from "../formatters/dateTimeFormatter";
import Link from "next/link";



export default function ProjectCard(project) {
    const ProjectCard = styled(Paper)(({ theme }) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
    }));

    return(
        <ProjectCard>
            <Box>
                <Typography variant="h4" color="primary">{project.name}</Typography>
            </Box>
            <Typography><strong>Budget: </strong>{currency(project.budget)}</Typography>
            <Typography><strong>Deadline: </strong>{date(project.deadline)}</Typography>
            <Link href={`/project/${project.id}`}>
                <Button variant="contained">Detail</Button>
            </Link>
        </ProjectCard>
    )
}
