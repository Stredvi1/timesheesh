import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default async function addUser(props) {

    const router = useRouter();
    const apiUrlEndpoint = `/api/addActivity`;

    const postData = {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            activityName: props.activityName,
            timeFund: props.timeFund,
            userID: props.userID,
            hourRate: props.hourRate,
            projectID: props.projectID,
            note: props.note
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        router.replace("/overview");
        return true;
    }
}