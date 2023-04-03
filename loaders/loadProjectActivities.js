import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/activityCard";
import Time from "../formatters/worktimeFormatter";



export default function load(props) {
    const router = useRouter();
    // props.id = router.query;
    console.log(props.id);
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getActivities-lib`;
            const postData = {
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: props.id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();

            setDataResponse(res.activities);
        }

        getPageData();
    }, [props.id, router.isReady]);
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