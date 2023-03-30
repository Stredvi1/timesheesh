import {useEffect, useState} from "react";
import {Card} from '@mui/material';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Typography, Box, Button} from "@mui/material";

const Project = styled(Paper)(({theme}) => ({
    backgroundColor: '#edf4fc',
    ...theme.typography.body1,
    padding: theme.spacing(4),
    color: theme.palette.text.contrastText,
}));

export default function test() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getProjects-lib`;
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(res.projects);
            setdataResponse(res.projects)
        }

        getPageData();
    }, []);
    return (
        <>
            {dataResponse?.map((project) => {
                    return (
                        <Project>
                            <Box>
                                <Typography variant="h4" color="primary">{project.name}</Typography>
                            </Box>

                            <Typography><strong>Budget: </strong> {project.budget} Kč</Typography>
                            <Typography><strong>Deadline: </strong> {project.deadline}</Typography>
                            <Button variant="contained" href={`/projects/${project.tProjectID}`}>Detail</Button>
                        </Project>
                    )
                }
            )}
        </>
    )
}