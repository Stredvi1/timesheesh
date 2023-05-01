import {useRouter} from "next/router";


export default async function addUser(props) {

    const apiUrlEndpoint = `/api/addUser`;

    const postData = {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: props.name,
            surname: props.surname,
            birthNumber: props.birthNumber,
            email: props.email,
            password: props.password,
            userTypeID: props.type,
            bankAccount: props.bankAccount,
            bankCode: props.bankCode
        })
    }
    const response = await fetch(apiUrlEndpoint, postData);
    console.log(response);

    if (response.ok) {
        return true;
    }
}