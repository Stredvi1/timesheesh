

export default async function addWatcher(props) {

    const apiUrlEndpoint = `/api/addWatcher`;


    const postData = {
        method: "post", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            projectID: props.projectID,
            userID: props.watcher,
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);

    if (response.ok) {
        return true;
    }
}