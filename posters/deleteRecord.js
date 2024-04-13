

export default async function removeRecord(props) {


    const apiUrlEndpoint = `/api/removeRecord`;

        const postData = {
        method: "delete",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            recordID: props,
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}