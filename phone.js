//Checking the Java Script Connection
console.log("hello ashik");

//Initialize the data fetch
function handlefetch(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => display(data));
}
//display Function
function display(input){
    const phones = input.data;
    phones.forEach(phone => {
        console.log("PHONES ARE ",phone);
    });

}









//Default calling the Functions
handlefetch();
