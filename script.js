// $(document).ready(show_cupcakes);

var cup_cakes=[
    {
    "name":"Chocolate",
    "calories":"high",
    "weight":"200gm",
    },

    {
    "name":"Carrot",
    "calories":"medium",
    "weight":"150gm",
    },

    {
    "name":"Banana",
    "calories":"high",
    "weight":"200gm"
    },

    {
    "name":"Strawberry",
    "calories":"low",
    "weight":"160gm",
    },

    {
    "name":"Peanut",
    "calories":"medium",
    "weight":"200gm",
    }
];


let table2=document.querySelector(".table");

 //write code that shows the cupcakes in the table as per the instructions
function show_cupcakes(){

    for(i=0;i<cup_cakes.length;i++){
    let row=document.createElement("tr");

    let td1=document.createElement('td');
     td1.innerHTML=cup_cakes[i]["name"];

   
     let td2=document.createElement("td");
      td2.innerHTML=cup_cakes[i]["calories"];
      td2.style.color="white";

      if(td2.innerHTML==="medium")
          td2.style.background="orange";
      
      else if(td2.innerHTML=="low")
      td2.style.background="#8adf8e";
      
      else if(td2.innerHTML=="high")
      td2.style.background="red";


      let td3=document.createElement('td');
       td3.innerHTML=cup_cakes[i]["weight"];

    table2.appendChild(row);
   row.appendChild(td1);
   row.appendChild(td2);
   row.appendChild(td3);
 
  }

}

show_cupcakes();


let Name=document.querySelector("#Name");
let Count=document.querySelector("#Count");
let CountValue=Count.value;
let Type=document.querySelector(".Type");
let Time =document.querySelector(".Time");
let Allergies=document.querySelector(".Allergies");
let msg1=document.querySelector(".msg1");
let msg2=document.querySelector(".msg2");
let msg3=document.querySelector(".msg3");
let msg4=document.querySelector(".msg4");
let msg5=document.querySelector(".msg5");

let incorrect1=document.querySelector("#incorrect1");
let incorrect2=document.querySelector("#incorrect2");
let incorrect3=document.querySelector("#incorrect3");
let incorrect4=document.querySelector("#incorrect4");
let incorrect5=document.querySelector("#incorrect5");

let correct1=document.querySelector("#correct1");
let correct2=document.querySelector("#correct2");
let correct3=document.querySelector("#correct3");
let correct4=document.querySelector("#correct4");
let correct5=document.querySelector("#correct5");

let submit=document.querySelector("#submit");
let welcome=document.querySelector(".welcome");





   

function validate(){
  
    
    submit.addEventListener("click",function (){

    let NameValue=Name.value;
    let NameLength=NameValue.length;


    if(NameLength<5 || NameLength>16){
    Name.style.border = "solid 3px red";
    msg1.innerHTML="The name must be between 5 and 16 characters long";
    msg1.style.color="red";
    incorrect1.style.visibility="visible";
    correct1.style.visibility="hidden";
    
}

    else{
    Name.style.border="solid 3px  green";
    msg1.innerHTML="Okay";
    msg1.style.color="green";
    incorrect1.style.visibility="hidden";
    correct1.style.visibility="visible";
}


    if(Count.value>=1 && Count.value<=15){
        Count.style.border="solid 3px green";
        msg2.innerHTML="Okay";
        msg2.style.color="green";
        incorrect2.style.visibility="hidden";
        correct2.style.visibility="visible";
    }

    else{
        Count.style.border="solid 3px red";
        msg2.innerHTML="The count must be between 1 and 15";
        msg2.style.color="red";
        incorrect2.style.visibility="visible";
        correct2.style.visibility="hidden";
   }


   if(Type.value==="None"){
    msg3.innerHTML="please fill out the cupcake type";
    msg3.style.color="red";
    Type.style.border="solid 3px red"; 
    incorrect3.style.visibility="visible";
    correct3.style.visibility="hidden";
   }
   else if(Type.value!="None"){
       msg3.innerHTML="Okay";
       msg3.style.color="green";
       Type.style.border="solid 3px green";
       incorrect3.style.visibility="hidden";
       correct3.style.visibility="visible";

   }

   console.log(Type.value);

   if(Time.value==="None"){
       msg4.innerHTML="please fill out the delivery time";
       msg4.style.color="red";
       Time.style.border="solid 3px red";
       incorrect4.style.visibility="visible";
       correct4.style.visibility="hidden";
   }

   else if(Time.value!="None"){
    msg4.innerHTML="Okay";
    msg4.style.color="green";
    Time.style.border="solid 3px green";
    incorrect4.style.visibility="hidden";
    correct4.style.visibility="visible";
   }


 
   msg5.innerHTML="Okay";
   msg5.style.color="green";
   Allergies.style.border="solid 3px green";
   incorrect5.style.visibility="hidden";
   correct5.style.visibility="visible";

 if(Type.value==="Chocolate"  &&  Allergies.value==="Dairy Free"){
 Allergies.style.border="solid 3px red";
 incorrect5.style.visibility="visible";
 correct5.style.visibility="hidden";
 msg5.innerHTML="Chocolate cupcake have dairy";
 msg5.style.color="red";
}

if(Type.value==="Pecan"  &&  Allergies.value==="Nut Free"){
    Allergies.style.border="solid 3px red";
    incorrect5.style.visibility="visible";
    correct5.style.visibility="hidden";
    msg5.innerHTML="Pecan cupcake have nuts";
    msg5.style.color="red";
   }

   if(Type.value==="Chocolate"  &&  Time.value==="4:00 PM"){
       Time.style.border="solid 3px red";
       incorrect4.style.visibility="visible";
       correct4.style.visibility="hidden";
       msg4.innerHTML="Chocolate cupcake cannot be delivered at 4 PM";
       msg4.style.color="red";
   }
});

}
validate();

function show_storage(){
    localStorage.setItem("fname",Name.value);
    welcome.innerHTML=`Welcome ${Name.value}`;
  
}