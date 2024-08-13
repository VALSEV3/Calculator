let input=document.getElementById("inp");

function addValue(val){
input.value+=val;
}

function calculateResult(){
    try{
         input.value=eval(input.value)
    }
    catch(error){
        input.value="error"
    }
}

function delInp(){
    input.value='';
}