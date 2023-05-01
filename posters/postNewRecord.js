

export default async function addRecord(props) {

    const apiUrlEndpoint = `/api/addRecord`;

    console.log(props);

    const postData = {
        method: "post", headers: {"Content-Type": "application/json"}, body: JSON.stringify({
            activityID: props.id,
            workingTime: props.workingTime,
            date: props.date,
            description: props.description,
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}

