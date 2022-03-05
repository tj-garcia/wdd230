/* Create const for the JSON data and HTML selector */
const requestURL ="https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";
const cards = document.querySelector('.cards');



//retrieve prophets information from url using JSON
/* Last Javascript method */
fetch(requestURL)
.then(function (response) {
    return response.json();
} )
.then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let h3 = document.createElement('h3');
    let h3_2 = document.createElement('h3');
    let h3_3 = document.createElement('h3');

    
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    //h2.textContent = prophet.name + ' ' + prophet.lastname;
    h2.textContent = `${prophet.name}  ${prophet.lastname}`;
    h3.textContent = `Date of Birth ${prophet.birthdate}`;
    h3_2.textContent = `Place of Birth ${prophet.birthplace}`;
    let ordinal_presidency = ordinal_suffix_of(prophet.order)
    h3_3.textContent = `${ordinal_presidency} Latter-day President`;

    
  
    /* Build the image attributes by using the setAttribute method for the src, alt,
     and loading attribute values. (Fill in the blank with the appropriate variable). */
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3_3);
    card.appendChild(portrait);
    card.appendChild(h3);
    card.appendChild(h3_2);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
    //cards.appendChild(card);
  }

  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
