
export const sendApp = async (e, req, endpoint) => {
    debugger
    // console.log(app.json());

    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
        body: req
    };
    const answer = await fetch(endpoint, requestOptions)
        .then(response => {
            return response.json();
        });
        alert(answer.message);
        if(answer.success){
            debugger
        }
}