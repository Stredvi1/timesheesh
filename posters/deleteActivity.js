

export default async function removeActivity(props) {


    const apiUrlEndpoint = `/api/removeActivity`;

    const postData = {
        method: "delete",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            activityID: props.id,
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}