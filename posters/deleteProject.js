

export default async function removeProject(props) {


    const apiUrlEndpoint = `/api/removeProject`;

    const postData = {
        method: "delete",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            projectID: props.id,
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}