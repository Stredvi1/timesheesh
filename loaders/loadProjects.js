import {useEffect, useState} from "react";
import Project from "../components/projectCard";


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