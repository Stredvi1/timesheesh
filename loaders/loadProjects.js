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
                    return (

                        <Project
                            name={project.name}
                            budget={project.budget}
                            deadline={project.deadline}
                            id={project.id}
                            key={project.id}
                        />
                    )
                }
            )}
        </>
    )
}