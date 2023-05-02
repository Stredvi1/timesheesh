import {useEffect, useState} from "react";
import Project from "../components/projectCard";


export default function test() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getProjects`;
            const response = await fetch(apiUrlEndpoint);

            if(response.ok) {
                const res = await response.json();
                setdataResponse(res.projects)
            }
        }

        getPageData().catch();
    }, []);
    return (
        <>
            {dataResponse?.map((project) => {
                if(project.workingTime == null) {
                    project.workingTime = 0;
                }
                    return (

                        <Project
                            name={project.name}
                            budget={project.budget}
                            deadline={project.deadline}
                            workingTime={project.workingTime}
                            id={project.id}
                            key={project.id}
                        />
                    )
                }
            )}
        </>
    )
}