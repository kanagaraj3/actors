
let btn=document.getElementById("btn");
let display=document.querySelector(".display");
btn.addEventListener("click",()=>
{
    var input=Number(document.querySelector(".in").value);
    console.log(input);
    document.querySelector(".in").value=" ";
    if( input == " ")
    {
        display.innerHTML="Input is Null";
    }
    else if(input <=100 )
    {
        display.innerHTML=20.5;
    }
    else if( input <=100)
    {
        display.innerHTML=22.5;
    }
    else if(input <=500)
    {
        display.innerHTML=25.5;
    }
    else if(input <=1000)
    {
        display.innerHTML=30;
    }
    
    document.querySelector(".in").value=" ";

});
