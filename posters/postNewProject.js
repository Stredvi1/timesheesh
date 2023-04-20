

export default async function addProject(props) {


    const apiUrlEndpoint = `/api/addProject`;

    const postData = {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            projectName: props.projectName,
            budget: props.budget,
            deadline: props.deadline,
            description: props.description,
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}