//Checking the Java Script Connection
console.log("hello ashik");

//Search input Field and Search Button
function handleSeacrh(){
document.getElementById('button-search').addEventListener('click', function Searching(){
    const SearchInput = document.getElementById('input-search');
    const SearchValue = SearchInput.value ;
    SearchInput.value= "";
    handlefetch(SearchValue);
    loading(true); //spinner have to add at searching bar not display bar
});
}

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

      phones = phones.slice(0,6); //have to slice the array before run the loop with array

    //Button showALL display or Not functional condition here 
    if(phones.length >= 6){
      buttonshowALL(true);
    }
    else{
      buttonshowALL(false);
    }

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
              <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary bg-purple-400 hover:bg-green-600 font-bold">Show Details</button>
            </div>
          </div>
        </div>
        `
        divContainer.appendChild(phoneCard);

    });
    loading(false);
}

//Loading Spinner Symbol Function
function loading(isValue){
  const loadingSpinner = document.getElementById('loadingBar');
  if(isValue === true){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
}

//showALL button displaying
function buttonshowALL(condition){
  const showALLButton = document.getElementById('showAll');
  if(condition === true){
    showALLButton.classList.remove('hidden');
      //showALL button's Function
      showALLButton.addEventListener('click', function showAll(){
        console.log("clicked");
      })
  }
  else{
    showALLButton.classList.add('hidden');
  }
}

//handle ShowDetail Function 
const handleShowDetails = async(sd) =>{
    console.log("yes", sd);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${sd}`);
    const data = await res.json();
    const phone = data.data;
    showDetailsmodal(data);
}
//show_details_modal.showModal() Function
function showDetailsmodal(phone){
  
  show_details_modal.showModal();
  /**  const showDetailsContainer = document.getElementById('showDcontainer');
  const newDetails = document.createElement('div');
  newDetails.innerHTML = `
<dialog id="show_details_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${data.slug}</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn text-white font-semibold bg-red-600 hover:bg-green-700">Close</button>
      </form>
    </div>
  </div>
</dialog>
  `
  showDetailsContainer.appendChild(newDetails); */

}
//Default calling the Functions
handleSeacrh();
