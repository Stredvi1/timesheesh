

export default async function addRecord(props) {

    const apiUrlEndpoint = `/api/addRecord`;


    const postData = {
        method: "post", headers: {"Content-Type": "application/json"}, body: JSON.stringify({
            activityID: props.id,
            userId: props.userId,
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