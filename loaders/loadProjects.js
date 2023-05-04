import {useEffect, useState} from "react";
import Project from "../components/cards/projectCard";
import {Grid} from "@mui/material";


export default function test() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getProjects`;
            const response = await fetch(apiUrlEndpoint);

            if (response.ok) {
                const res = await response.json();
                setdataResponse(res.projects)
                console.log(69, res.projects)

            }

        }

        getPageData().catch();
    }, []);
    return (
        <>
            <Grid
                container
                spacing={5}
                direction={"row"}
                alignItems="center"
                columns={{ xs: 8, md: 8 }}
            sx={{
              m: '0.8rem'
            }}>
                {dataResponse?.map((project) => {
                        if (project.amount == null) {
                            project.amount = 0;
                        }
                        return (
                            <Grid item xs={3.8}>
                                <Project
                                    name={project.name}
                                    budget={project.budget}
                                    deadline={project.deadline}
                                    amount={project.amount}
                                    id={project.id}
                                    key={project.id}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </>
    )
}