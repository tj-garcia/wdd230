/* Create const for the JSON data and HTML selector */
const requestURL ="https://run.mocky.io/v3/ed557265-2e63-4fb0-a574-00eff0bbabb2";
/*const requestURL ="../json/data.json";*/
const cards = document.querySelector('.cards');



//retrieve prophets information from url using JSON
/* Last Javascript method */
fetch(requestURL)
.then(function (response) {
    return response.json();
} )
.then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
    companies.forEach(listCompanies);
});


function displayCompanies(companies) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add("directory_class");
    let card_title = document.createElement('h2');
    let card_img = document.createElement('img');
    let card_addr = document.createElement('h3');
    let card_phone = document.createElement('h3');
    let card_web_title = document.createElement('h3');
    let card_web = document.createElement('a');
    

    
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    //h2.textContent = prophet.name + ' ' + prophet.lastname;
    card_title.textContent = `${companies.name}`;
    card_addr.textContent = `${companies.addresse}`;
    card_phone.textContent = `${companies.phone}`;
    card_web.textContent = `${companies.website}`;
    /*let ordinal_presidency = ordinal_suffix_of(prophet.order)
    h3_3.textContent = `${ordinal_presidency} Latter-day President`;*/

    
  
    /* Build the image attributes by using the setAttribute method for the src, alt,
     and loading attribute values. (Fill in the blank with the appropriate variable). */
     card_img.setAttribute('src', companies.imageurl);
     card_img.setAttribute('alt', `${companies.name}  ${companies.address}`);
     card_img.setAttribute('loading', 'lazy');

     card_web.setAttribute('href',`${companies.website}`);
  
    // Add/append the section(card) with the h2 element
    card.appendChild(card_title);
    card.appendChild(card_img);
    card.appendChild(card_addr);
    card.appendChild(card_phone);
    card_web_title.appendChild(card_web);
    card.appendChild(card_web_title);

    /*let card_web_title = document.createElement('h3');*/
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
    //cards.appendChild(card);
  }


  function listCompanies(companies) {
      //let tabla_1 = document.getElementById("tabla");
      //let tblBody = document.createElement("tbody");
      document.getElementById("show_list").style.display = "none"; // hide
      let tblBody = document.querySelector("tbody");
      let hilera = document.createElement("tr");

      let celda = document.createElement("td");
      let textoCelda = document.createTextNode(`${companies.name}`);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);      

      let celda2 = document.createElement("td");
      let textoCelda2 = document.createTextNode(`${companies.addresse}`);
      celda2.appendChild(textoCelda2);
      hilera.appendChild(celda2);            

      let celda3 = document.createElement("td");
      let textoCelda3 = document.createTextNode(`${companies.phone}`);
      celda3.appendChild(textoCelda3);
      hilera.appendChild(celda3);

      
      let celda4 = document.createElement("td");
      let link1 = document.createElement("a");
      let textoCelda4 = document.createTextNode(`${companies.website}`);
      link1.setAttribute('href',`${companies.website}`);
      link1.appendChild(textoCelda4);
      celda4.appendChild(link1);
      
      hilera.appendChild(celda4);

      tblBody.appendChild(hilera);

  }



/*
  function myMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
*/
  let button1 = document.getElementById("byGrid");
  button1.onclick = function(){
    /*document.getElementById("show_grid").style.visibility = "visible"; 
    document.getElementById("show_list").style.visibility = "hidden";*/
    document.getElementById("show_list").style.display = "none"; // hide
    document.getElementById("show_grid").style.display = ""; // hide
}
let button2 = document.getElementById("byList");
button2.onclick = function(){
    /*document.getElementById("show_grid").style.visibility = "hidden"; 
    document.getElementById("show_list").style.visibility = "visible"; */
    document.getElementById("show_list").style.display = "block"; 
    document.getElementById("show_grid").style.display = "none"; 
}
