'use strict';
const $photoId = document.getElementById('photo');
const $photoURL = document.querySelector('#photoURL');
if (!$photoURL) throw new Error('$photoURL query failed');
// the function is looking to see when the event that a user pastes in a
// new url in the URL, and updates it based on the link that is pasted
function handlePhotoUrl(event) {
  const $eventTarget = event.target;
  $photoId.src = $eventTarget.value;
}
$photoURL.addEventListener('input', handlePhotoUrl);
// the code below this queries the form on the DOM, if its not found, throw new Error
const $form = document.querySelector('form');
if (!$form) throw new Error('$form query failed');
// this code below is an event listener callback function that checks the dom each
// time a form is submitted, and adds a new entry to local storage
// with each new entry that is added
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
  $photoId.src = '/images/placeholder-image-square.jpg';
});
// the purpose of the renderEntry function is to generate and return a DOM
// tree for a single entry that matches the entries made in the UL
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
const $ul = document.querySelector('ul');
if (!$ul) throw new Error('$ul query failed');
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < data.entries.length; i++) {
    const $li = renderEntry(data.entries[i]);
    $ul.appendChild($li);
  }
});
