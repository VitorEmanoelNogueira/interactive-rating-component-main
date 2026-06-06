const ratingComponent = document.querySelector('.c-rating');
const ratingForm = ratingComponent.querySelector('.c-rating__form');
const selectedRatingDisplay = ratingComponent.querySelector('.js-selected-rating');

function getSelectedRating(){
    return ratingForm.querySelector('.c-rating__option:checked').value;
}

function showThankYouMessage(selectedRating){
    ratingComponent.classList.add('is-rated');
    selectedRatingDisplay.textContent = selectedRating;
}

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let selectedRating = getSelectedRating();
    console.log(selectedRating)
    showThankYouMessage(selectedRating);
})