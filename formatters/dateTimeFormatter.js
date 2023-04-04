export default function formatDate(dateString) {

    //2023-10-24T22:00:00.000Z
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}. ${month}. ${year}`;
}