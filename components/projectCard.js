import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Stack, Typography} from "@mui/material";
import currency from "../formatters/currencyFormatter";
import date from "../formatters/dateTimeFormatter";
import Link from "next/link";
import Progress from "../components/progressCircle"


export default function ProjectCard(project) {
    const ProjectCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: '20%',
    }));

    function countPercentage(maxVal, curVal) {
        return curVal / (maxVal / 100);
    }

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
                    <Progress value={countPercentage(project.budget, project.amount)}/>
                </Box>
            </Stack>
            <Link href={`/project/${project.id}`}>

                <Button variant="contained">Detail</Button>
            </Link>
        </ProjectCard>
    )
}
