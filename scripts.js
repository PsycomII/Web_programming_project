
function remove_capital() {
    let capital = prompt("Please enter the name of the capital", "exemple: paris");
    var capital2 = capital.toLowerCase()
    if (capital != null) {
        document.getElementById(capital2).remove(capital2);
   }
 }

 function show_form(){
    document.getElementById("form").removeAttribute("hidden");
     
 }




 function add_div(){
   var newcapital = document.getElementById("capital_add").value;
   var divcreated = document.createElement("div");
   divcreated.setAttribute("id", newcapital);


   var element = document.getElementById("capital");
   element.appendChild(divcreated);
 }

 function add_h1(){
    var newcapital = document.getElementById("capital_add").value;
    var newh1 = document.createElement("h1");
    var h = document.createTextNode(newcapital);
    newh1.appendChild(h);
    var element = document.getElementById(newcapital);
    element.appendChild(newh1);


 }

 function add_img(){
   var newcapital = document.getElementById("capital_add").value;
   var newImage = document.getElementById("image_input").files[0].name;
   var newimg = document.createElement("img");
   newimg.src = newImage;
   newimg.setAttribute("class","img");

   var element = document.getElementById(newcapital);
   element.appendChild(newimg);
   



 }

 function addp(){
   var newcapital = document.getElementById("capital_add").value;
   var description = document.getElementById("capital_description").value;
   var newp = document.createElement("p");
   var desc = document.createTextNode(description);
   newp.appendChild(desc);
   var element = document.getElementById(newcapital);
   element.appendChild(newp);


 }

 async function add_capital(){
  add_div();
  await new Promise((resolve,reject)=> setTimeout(resolve,1000));
  add_h1();
  add_img();
  addp();
  close_form();
  
 }