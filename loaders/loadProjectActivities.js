import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/activityCard";
import Time from "../formatters/worktimeFormatter";



export default function load() {
    const router = useRouter();
    const {id} = router.query;


    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `/api/getActivities`;
            const postData = {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();

            setDataResponse(res.activities);
        }

        console.log("Activity ", id);

        getPageData();
    }, [id, router.isReady]);
    return (
        <>

            {dataResponse?.map((activity) => {
                    return (

                        <Card
                            key={activity.id}
                            id={activity.id}
                            projectID={activity.projectID}
                            name={activity.name}
                            timefund={<Time string={activity.timefund}/>}
                            workingTime={<Time string={activity.workingTime}/>}
                            fullName={activity.fullName}
                        />
                    )
                }
            )}
        </>
    )
}