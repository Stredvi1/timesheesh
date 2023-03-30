import {useEffect, useState} from "react";
import {Card} from '@mui/material';
import {useRouter} from "next/router";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as m from "@mui/material";

const Project = styled(Paper)(({theme}) => ({
    backgroundColor: '#edf4fc',
    ...theme.typography.body1,
    padding: theme.spacing(4),
    color: theme.palette.text.contrastText,
}));


export default function test() {
    const router = useRouter();
    const { id } = router.query;
    router.query.id = id;
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getProjectData-lib`;
            const postData = {
                method: "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();
            console.log(res.projects);
            setDataResponse(res.projects);
        }

        getPageData();
    }, [router.query.id, router.isReady]);
    return (
        <>

            {dataResponse?.map((project) => {
                    return (
                        <Project>
                            <m.Box>
                                <m.Typography variant="h4" color="primary">{project.name} {id}</m.Typography>
                            </m.Box>

                            <m.Typography><strong>Budget: </strong> {project.budget} Kč</m.Typography>
                            <m.Typography><strong>Deadline: </strong> {project.deadline}</m.Typography>
                            <m.Button variant="contained" href={`/projects/${project.tProjectID}`}>Detail</m.Button>
                        </Project>
                    )
                }
            )}


        </>
    )
}