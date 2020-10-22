
export const showsubmitbutton = inputs => {
    // debugger
    var show = true;
    if(inputs.length > 0){
        var i = 0;
        var arr = [];
        while( i < inputs.length){
            if(typeof(inputs[i]) === "object"){
                arr = Object.values(inputs[i]);
                for (let i = 0; i < arr.length; i++) {
                    const e = arr[i];
                    show = show && !(e === "" || e === null || e === undefined || e === false || e.length === 0 );
                    
                }
                i++;
            }else{
                show = show && !(inputs[i] === "" || inputs[i] === null || inputs[i] === undefined || inputs[i] === false || inputs[i].length === 0 );
                i++;

            }
        }
    }else{
        show = false;
    }

    return(
        show
    )
}