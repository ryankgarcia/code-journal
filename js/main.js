'use strict';
// this variable queries the DOM for an IMG element, selecting it by its ID attribute
const $photoId = document.getElementById('photo');
// this variable is associated with an input DOM element selecting it by its ID attribute
const $photoURL = document.querySelector('#photoURL');
// the variables below are querying the DOM for specific id elements.
// they are associated to the elements i want to manipulate to make dynamic
// changes to the website
// in no particular order, these variables are query selecting or getting element by ID
const $ul = document.querySelector('ul');
const $formIdElement = document.getElementById('formId');
const $entryIdElement = document.getElementById('entryId');
const $entryHeader = document.getElementById('entry-header');
const $newEntryButton = document.getElementById('new-entry-button');
const $noEntries = document.querySelector('.no-entries');
const $form = document.querySelector('form');
// the function handlePhotoUrl is listening when the event that a user pastes in a
// new url in the URL input, the image placeholder updates based on the link that is pasted
if (!$photoURL) throw new Error('$photoURL query failed');
function handlePhotoUrl(event) {
  const $eventTarget = event.target;
  $photoId.src = $eventTarget.value;
}
$photoURL.addEventListener('input', handlePhotoUrl);
// this code below: is an event listener callback function that checks the dom each
// time a form is submitted, and adds a new entry to local storage
// with each new entry that is added. the page will utilize the viewSwap function
// in order to swap the view to show the entries that have been made and where
// they are being stored. when a user decides to return to submit a new entry
// the "NEW" button will swap the view back to create a new entry page.
if (!$form) throw new Error('$form query failed');
if (!$ul) throw new Error('$ul query failed');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  if (!$formElements) throw new Error('$formElements query failed');
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
  $ul.prepend(renderEntry(newEntry));
  viewSwap('entries');
  if ($noEntries) {
    toggleNoEntries();
  }
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
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < data.entries.length; i++) {
    const $li = renderEntry(data.entries[i]);
    $ul.appendChild($li);
  }
  viewSwap('entry-form');
  if ($noEntries) {
    toggleNoEntries();
  }
});
// this function toggles the 'no entries' text if there are no entries.
// if there is at least one entry, the 'no entries' text will disappear
function toggleNoEntries() {
  if (!$noEntries) throw new Error('$noEntries query failed');
  if (data.entries.length) {
    $noEntries.classList.add('hidden');
  } else {
    $noEntries.classList.remove('hidden');
  }
}
// the viewSwap function was created to dynamically change the view of what the user
// experiences when they click on the header labeled 'entries' OR the button labeled 'new'
function viewSwap(viewName) {
  if (!$formIdElement || !$entryIdElement)
    throw new Error('$formId or $entryId is null');
  if (viewName === 'entries') {
    $entryIdElement?.classList.remove('hidden');
    $formIdElement?.classList.add('hidden');
  } else if (viewName === 'entry-form') {
    $entryIdElement?.classList.add('hidden');
    $formIdElement?.classList.remove('hidden');
  }
  if (data.view !== viewName) {
    data.view = viewName;
  }
}
// the entryHeader event listener listens for a user click in order to swap the view
// they see on the page, dynamically. this callback is associated with the
// entries the user has made
if (!$entryHeader) throw new Error('$entryHeader query failed');
$entryHeader.addEventListener('click', () => {
  viewSwap('entries');
});
// the newEntryButton event listener listens for a user click to swap the view
// so the user see's the entry form to create a NEW entry
if (!$newEntryButton) throw new Error('$newEntryButton query failed');
$newEntryButton.addEventListener('click', () => {
  viewSwap('entry-form');
});
