"use strict";
// this variable queries the DOM for an IMG element, selecting it by its ID attribute
const $photoId = document.getElementById('photo');
// this variable is associated with an input DOM element selecting it by its ID attribute
const $photoURL = document.querySelector('#photoURL');
if (!$photoURL)
    throw new Error('$photoURL query failed');
// the function handlePhotoUrl is listening when the event that a user pastes in a
// new url in the URL, and updates the image placeholder based on the link that is pasted
function handlePhotoUrl(event) {
    const $eventTarget = event.target;
    $photoId.src = $eventTarget.value;
}
$photoURL.addEventListener('input', handlePhotoUrl);
// the code below: queries the form on the DOM, if its not found, throw new Error
const $form = document.querySelector('form');
if (!$form)
    throw new Error('$form query failed');
// this code below: is an event listener callback function that checks the dom each
// time a form is submitted, and adds a new entry to local storage
// with each new entry that is added
$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const $formElements = $form.elements;
    if (!$formElements)
        throw new Error('$formElements query failed');
    const newEntry = {
        entryId: data.nextEntryId,
        title: $formElements.title.value,
        photoUrl: $formElements.photoURL.value,
        notes: $formElements.textarea.value,
    };
    data.nextEntryId++;
    data.entries.unshift(newEntry);
    writeData();
    $form.reset();
    renderEntry(newEntry);
    document.body.prepend(renderEntry(newEntry), $ul);
    viewSwap('entries');
    if (toggleNoEntries())
        $photoId.src = '/images/placeholder-image-square.jpg';
});
// the purpose of the renderEntry function is to generate and return a DOM
// tree for a single entry that matches the entries made in the <ul>
function renderEntry(entry) {
    const $liRow = document.createElement('li');
    $liRow.setAttribute('class', 'row');
    const $divColHalf = document.createElement('div');
    $divColHalf.setAttribute('class', 'column-half');
    const $image = document.createElement('img');
    $image.setAttribute('src', entry.photoUrl);
    const $textDiv = document.createElement('div');
    $textDiv.setAttribute('class', 'column-half');
    const $pStrong = document.createElement('p');
    $pStrong.textContent = entry.title;
    const $pDescription = document.createElement('p');
    $pDescription.textContent = entry.notes;
    $liRow.appendChild($divColHalf);
    $divColHalf.appendChild($image);
    $liRow.appendChild($textDiv);
    $textDiv.appendChild($pStrong);
    $textDiv.appendChild($pDescription);
    return $liRow;
}
// the code below: explains there is a query for a <ul> element on the dom
// and on the DOM, adds an event listener checking for DOMContentLoaded
// there is a loop iterating through the length of the data.entries object
// and appending the entries made to the <ul> element
const $ul = document.querySelector('ul');
if (!$ul)
    throw new Error('$ul query failed');
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < data.entries.length; i++) {
        const $li = renderEntry(data.entries[i]);
        $ul.appendChild($li);
    }
});
const $noEntries = document.querySelector('.no-entries');
function toggleNoEntries() {
    if (!$noEntries)
        throw new Error('$noEntries query failed');
    if (data.entries.length) {
        $noEntries.classList.add('hidden');
    }
    else {
        $noEntries.classList.remove('hidden');
    }
}
// the variables below are querying the DOM for specific id elements
// they are associated to the elements i want to manipulate to make the dynamic
// changes to the website
const $formIdElement = document.getElementById('formId');
const $entryIdElement = document.getElementById('entryId');
const $entryHeader = document.getElementById('entry-header');
const $newEntryButton = document.getElementById('new-entry-button');
// this function was created to dynamically change the view of what the user
// experiences when they click on the entries header OR the button labeled 'new'
function viewSwap(viewName) {
    if (!$formIdElement || !$entryIdElement)
        throw new Error('$formId or $entryId is null');
    if (viewName === 'entries') {
        $entryIdElement?.classList.remove('hidden');
        $formIdElement?.classList.add('hidden');
    }
    else if (viewName === 'entry-form') {
        $entryIdElement?.classList.add('hidden');
        $formIdElement?.classList.remove('hidden');
    }
    if (data.view !== viewName) {
        data.view = viewName;
    }
}
if (!$entryHeader)
    throw new Error('$entryHeader query failed');
// this event listener listens for a user click in order to swap the view
// they see on the page, dynamically. this one is associated with the entries they have made
$entryHeader.addEventListener('click', () => {
    viewSwap('entries');
});
if (!$newEntryButton)
    throw new Error('$newEntryButton query failed');
// this event listener listens for a user click to swap the view so the user
// see's the entry form to create a new entry
$newEntryButton.addEventListener('click', () => {
    viewSwap('entry-form');
});
