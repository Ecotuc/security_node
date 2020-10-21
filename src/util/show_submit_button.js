
export const showsubmitbutton = inputs => {
    // debugger
    var show = true;
    if(inputs.length > 0){
        var i = 0;
        while( i < inputs.length){
            if(typeof(inputs[i]) !== "string" && inputs.length === 2){
                return (false)
            }else{
                show = show && !(inputs[i] === "" || inputs[i] === null || inputs[i] === undefined || inputs[i] === false || inputs[i].length === 0 );
                i++;

            }
        }
    }

    return(
        show
    )
}