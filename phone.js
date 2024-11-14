//Checking the Java Script Connection
console.log("hello ashik");

//Search input Field and Search Button
document.getElementById('button-search').addEventListener('click', function Searching(){
    console.log("Search Button clicked");
    const SearchInput = document.getElementById('input-search');
    const SearchValue = SearchInput.value ;
    SearchInput.value= "";
    console.log(SearchValue);
    handlefetch(SearchValue);
});

//Initialize the data fetch
function handlefetch(SearchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`)
        .then(res => res.json())
        .then(data => display(data));
}

//display Function
function display(input) {
    const phones = input.data; //taking obj data's from the array
    const divContainer = document.getElementById('displayContainer');
    phones.forEach(phone => {
        console.log("PHONES ARE ", phone);
        //console.log("The Length is : ", phones.length);
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card bg-transparent w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="Phone-image"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-slate-900 font-extrabold">${phone.brand}</h2>
    <p class="text-slate-700 font-semibold">${phone.phone_name}</p>
    <div class="card-actions">
      <button class="btn btn-primary bg-purple-400 hover:bg-green-600 font-bold">Show Details</button>
    </div>
  </div>
        </div>
        `
        divContainer.appendChild(phoneCard);
    });
}










//Default calling the Functions
handlefetch();
