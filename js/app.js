document.addEventListener("DOMContentLoaded", () => {


const form = document.querySelector('#new-item-form');
form.addEventListener("submit", handleForSubmit);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', handleClear);
})


const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const bucketListItem = createBucketListItem(event.target);
    const bucketList = document.querySelector('#bucket-list');
    bucketList.appendChild(bucketListItem);
  
    event.target.reset();

}

const handleClear = function (event) {
    const bucketList = document.querySelector('#bucket-list');
    bucketList.innerHTML = '';
}

const createBucketListItem = function (form) {
    const bucketListItem = document.createElement('li');
    bucketListItem.classList.add('bucket-list');
  
    const placeToVisit = document.createElement('h2');
    placeToVisit.textContent = form.place_to_visit.value;
    bucketListItem.appendChild(placeToVisit);
  
    const thingToDo = document.createElement('h3');
    thingToDo.textContent = form.thing_to_do.value;
    bucketListItem.appendChild(thingToDo);

  
    return bucketList;
  }

  const 