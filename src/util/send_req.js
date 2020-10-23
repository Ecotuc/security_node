import { showsubmitbutton } from './show_submit_button';
// import { toUpperFirst } from './to_uppercase_first';
import { sendGetReq } from '../components/form/form';


export const sendPostReq = async (e, req, endpoint, endpoint2) => {
    // console.log(app.json());
    e.preventDefault();
    if( showsubmitbutton(Object.values(req))){
        // if
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
            body: JSON.stringify(req)
        };
        const answer = await fetch(endpoint, requestOptions)
            .then(response => {
                return response.json();
            });
            alert(answer.message);
            if(answer.success){
                if(endpoint2){
                    sendGetReq(endpoint2, "table_titles", "table_rows", "table");
                }
            }
    }else{
        alert('All the fields must be filled');
    }

}



// export const sendGetReq = async (endpoint, ttitles, trows, table) => {

//     window.localStorage.setItem("pass", "true");
//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
//         // body: JSON.stringify(req)
//     };
//     const answer = await fetch(endpoint, requestOptions)
//         .then(response => {
//          return response.json();
//         });
//         if(answer.success && window.localStorage.getItem("pass") === "true"){
//             const arr_titles = Object.keys(answer.data[0]);
//             const arr_data = answer.data;
//             var html_titles = "";
//             var html_rows = "";
//             debugger
//             arr_data.forEach(data => {
//                 html_rows += "<div class = 'table_row'>";
//                 arr_titles.forEach(title => {
//                     html_titles += html_titles.includes(toUpperFirst(title)) ? "": "<h5>" + toUpperFirst(title) + "</h5>";
//                     html_rows += "<div>"+ data[title] +"</div>";
//                 });
//                 html_rows += "<div class = 'actions'>"+
//                         "<i class='fas fa-trash-alt' onClick = 'handleAction()'></i>"+
//                         "<i class='fas fa-info-circle'></i>"+
//                         "<i class='fas fa-pencil-alt'></i>"
//                     +"</div></div>";
//             });
//             html_titles += "<h5>Actions</h5>";
            
//             document.getElementById(ttitles).innerHTML = html_titles;
//             document.getElementById(trows).innerHTML = html_rows;
//             document.getElementById(table).classList.add("show");
            
//             window.localStorage.setItem("pass", "false");
//         }

//   }


