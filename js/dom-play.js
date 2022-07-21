//alert("It's working!");

// let actors = document.querySelectorAll(".hamlet")

// console.log(actors);

// for (let i = 0; i < actors.length; i++) {
//     actors[i].style.backgroundColor = "yellow";
// }

// document.querySelector(".hamlet").style.backgroundColor = "yellow";


function myAlert(){

    alert("I'm Clicked!");


}
 
let spans = document.querySelectorAll("#play span")

for(const mySpan of spans){
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);

    });
    //alert(mySpan.dataset.actor);
}

function highlightActor(actor){

    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){
            mySpan.style.backgroundColor='yellow';
        }else{
            mySpan.style.backgroundColor='white';
        }


    }

   // alert("The current actor is: " + actor);
}







// function highlight(el){


//     if( el.style.backgroundColor ==  "yellow"){

//         el.style.backgroundColor ==  'white';
//     }else{
//         el.style.backgroundColor='yellow';
//     }

// }