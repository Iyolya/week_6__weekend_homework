document.addEventListener("DOMContentLoaded", () => {


const form = document.querySelector('#new-item-form');
form.addEventListener("submit", handleForSubmit);
})


const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const bucketListItem = createBucketListItem(event.target);
    const bucketList = document.querySelector('#bucket-list');
    teamChecklist.appendChild(bucketListItem);
  
    event.target.reset();

}

const createBucketListItem = function (form) {
    const bucketListItem = document.createElement('li');
    teamChecklisttItem.classList.add('bucket-list-item');
  
    const placeToVisit = document.createElement('h2');
    teamName.textContent = form.placeToVisit.value;
    teamChecklisttItem.appendChild(placeToVisit);
  
    const thingToDo = document.createElement('h3');
    homeCity.textContent = form.thingToDo.value;
    teamChecklisttItem.appendChild(thingToDo);

  
    return bucketListItem;
  }