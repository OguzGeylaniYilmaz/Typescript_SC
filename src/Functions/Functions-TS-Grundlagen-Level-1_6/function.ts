

function returnOne()
{
    return 1;
}

let x:number = 1;
let y:number = returnOne();

if(x === y)
    console.log("Wird das gedruckt?");
else
    console.log("");
