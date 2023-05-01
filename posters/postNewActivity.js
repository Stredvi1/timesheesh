
export default async function addActivity(props) {

    const apiUrlEndpoint = `/api/addActivity`;

    const postData = {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            activityName: props.activityName,
            timeFund: props.timeFund,
            userID: props.worker,
            hourRate: props.hourRate,
            projectID: props.projectID,
            note: props.note
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}