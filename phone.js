//Checking the Java Script Connection
console.log("hello ashik");

//Search input Field and Search Button
document.getElementById('button-search').addEventListener('click', function Searching(){
    console.log("Search Button clicked");
    const SearchInput = document.getElementById('input-search');
    const SearchValue = SearchInput.value ;
    SearchInput.value= "";
    handlefetch(SearchValue);
    loading(true); //spinner have to add at searching bar not display bar
});

//Initialize the data fetch
function handlefetch(SearchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`)
        .then(res => res.json())
        .then(data => display(data));
}

//display Function
function display(input) {
    let phones = input.data; //taking obj data's from the array
    const divContainer = document.getElementById('displayContainer');
    divContainer.textContent=''; //clear the previous displayed values here
    phones = phones.slice(0,2); //have to slice the array before run the loop with array 
    phones.forEach(phone => {
        console.log("PHONES ARE ", phone);
        //console.log("The Length is : ", phones.length);
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card bg-transparent w-96 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Phone-image" class="rounded-xl"/>
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
    loading(false);
}

//Loading Function
function loading(isValue){
  const loadingSpinner = document.getElementById('loadingBar');
  if(isValue === true){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
}

//showALL button Function
function showALL(condition){
  const showALL = document.getElementById('showALL');
  if(condition === true){
    showALL.classList.remove('hidden');
  }
  else{
    showALL.classList.add('hidden');
  }
}

//Default calling the Functions

