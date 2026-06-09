const ratingComponent = document.querySelector('.c-rating');
const ratingForm = ratingComponent.querySelector('.c-rating__form');
const thankYouTitle = ratingComponent.querySelector('.js-thank-you-title');
const selectedRatingDisplay = ratingComponent.querySelector('.js-selected-rating');

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedRating = getSelectedRating();
    showThankYouMessage(selectedRating);
})

function getSelectedRating(){
    return ratingForm.querySelector('.c-rating__option:checked').value;
}

function showThankYouMessage(selectedRating){
    selectedRatingDisplay.textContent = selectedRating;
    ratingComponent.classList.add('is-rated');
    thankYouTitle.focus();
}

