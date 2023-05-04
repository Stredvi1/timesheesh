import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Stack, Typography} from "@mui/material";
import currency from "../../utils/formatters/currencyFormatter";
import date from "../../utils/formatters/dateTimeFormatter";
import Link from "next/link";
import Progress from "../progressCircle"
import percentage from '@/utils/percentage';


export default function ProjectCard(project) {
    const ProjectCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        height: "100%"
    }));


    return (
        <ProjectCard>
            <Typography variant="h4" color="primary">{project.name}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    position: "relative"
                }}>
                <Box sx={{pb: 2, pt: 1}}>
                    <Typography><strong>Budget: </strong>{currency(project.budget)}</Typography>
                    <Typography><strong>Odpracováno: </strong>{currency(project.amount)}</Typography>
                    <Typography><strong>Deadline: </strong>{date(project.deadline)}</Typography>
                </Box>
                <Box
                    sx={{
                        right: 20,
                        position: "absolute"
                    }}>
                    <Progress value={percentage(project.budget, project.amount)} size={"5rem"} color={"secondary"} textColor={"primary"}/>
                </Box>
            </Stack>
            <Link href={`/project/${project.id}`}>

                <Button variant="contained">Detail</Button>
            </Link>
        </ProjectCard>
    )
}
