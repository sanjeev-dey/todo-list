function showpop()
{
    document.querySelector(".popup-container").style.display="block";
    
   
}
var i=0,j;
var card=[];
function addtodo(){
   
    card[i]={
        heading: document.getElementById("popinput").value,
        list_item:[]
    };
    j=i;
    i++;
    var paraElement;
while(j<i){
     paraElement=document.createElement('div');
     paraElement.classList.add("todo-card");
     paraElement.innerHTML=`<div class="js-class"> ${card[j].heading} </div>
     
      <div class="card-list"></div>
      <div class="font-awsm">
      <p style="margin-right:10px;margin-top:40px"> <span style="color: red;cursor:pointer"><i class="fa fa-trash "aria-hidden="true"></i></span>
        <span onclick="showpopforItem()" style="color: #4b8ce8;cursor:pointer"><i class="fa fa-plus-circle "></i></span></p>
     
      </div>`;
      document.querySelector(".todo-card-list").appendChild(paraElement);
      j++;

}
document.querySelector(".popup-container").style.display="none";
document.querySelector(".sugg").style.display="none";

//     document.querySelector(".popup-container").style.display="none";
//     document.querySelector(".sugg").style.display="none";

//     var paraElement=document.createElement('div');
//     paraElement.classList.add("todo-card");

//     var heading=document.getElementById("popinput").value;
//       paraElement.innerHTML=`<div class="js-class"> ${heading} </div> <hr> 
//       <div class="card-list"></div>
//       <div class="font-awsm">
//       <p style="margin-right:10px;margin-top:40px"> <span style="color: red;cursor:pointer"><i class="fa fa-trash "aria-hidden="true"></i></span>
//         <span style="color: #4b8ce8;cursor:pointer"><i class="fa fa-plus-circle "></i></span></p>
     
//       </div>`;
      
//     document.querySelector(".todo-card-list").appendChild(paraElement);
// 
}
 function notodo(){
    document.querySelector(".popup-container").style.display="none";
    document.querySelector(".popup-container-item").style.display="none";
}
function showpopforItem(){
    document.querySelector(".popup-container-item").style.display="block";
}
var p=0,q;

function addItem()
{
    document.querySelector(".popup-container-item").style.display="none";

    card[0].list_item[p]={
        paragraph: document.getElementById("item_input").value,
    }
    q=p;
    p++;
    while(q<p)
    {
        var paraitem= document.createElement('p');
        paraitem.classList.add("item");
        paraitem.innerHTML=`${card[0].list_item[q].paragraph}`;
        document.querySelector(".card-list").appendChild(paraitem);

        q++;
    }

}

