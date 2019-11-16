console.log('Hello World');


/* TODOS
  1. Gather a list of all the countries in the world
  2. Display the list of countries
  3. Update the results based on the search query
*/

// Search
const searchInput = document.getElementById('search');
console.log('searchInput: ', searchInput);
const results = document.getElementById("results");
console.log(results);


let searchTerm = '';
let countries;

// 1. Gather a list of all the countries in the world
const fetchCountries = async () => {
  countries = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag').then(res => res.json());
};


const showCountries = async () => {
  
  // clear results
  results.innerHTML = ''

  // get the data
  await fetchCountries();
  
  // create ul element 
  const ul = document.createElement('ul');
  // add class to ul element
  ul.classList.add('countries');

  countries
      .filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      .forEach(country => {

        // create list item for each country
        const li = document.createElement('li');
        li.classList.add('country-item');

        // create the flag
        const countryFlag = document.createElement('img');
        // set image src
        countryFlag.src = country.flag;
        countryFlag.classList.add('country-flag');

        // set country name
        const countryName = document.createElement('h3');
        countryName.innerText = country.name;
        countryName.classList.add('country-name');

        // set population
        const countryPopulation = document.createElement('h2');
        countryPopulation.innerText = numberWithCommas(country.population);
        countryPopulation.classList.add('country-population');

        // population text - header for population
        const countryPopulationText = document.createElement('h5');
        countryPopulationText.innerHTML = 'Population';
        countryPopulationText.classList.add('country-population-text');

        // create div for all info
        const countryInfo = document.createElement('div');
        countryInfo.classList.add('country-info');

        countryInfo.appendChild(countryPopulation);
        countryInfo.appendChild(countryPopulationText);

        li.appendChild(countryFlag);
        li.appendChild(countryName);
        li.appendChild(countryInfo);

        ul.appendChild(li);        

      });  
  
  results.appendChild(ul);

};

// display countries

showCountries();

searchInput.addEventListener('input', e => {
  // save the input value
  searchTerm = e.target.value;
  console.log(searchTerm);
  // redisplay countries based on the new search_term
  showCountries();
  
});

// add a comma as a thousand separator for the population number.
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}




