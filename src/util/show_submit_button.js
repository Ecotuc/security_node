
export const showsubmitbutton = inputs => {

    var show = false
    if(inputs.length > 0){
        var i = 0;
        while( i < inputs.length){
            show = true && !(inputs[i] === "" || inputs[i] === null || inputs[i] === undefined || inputs[i] === false);
            i++;
        }
    }

    return(
        show
    )
}