'use strict';
const $photoURL = document.querySelector('#photoURL');
if (!$photoURL) throw new Error('$photoURL query failed');
function handlePhotoUrl(event) {
  const $photoId = document.getElementById('photo');
  const $eventTarget = event.target;
  $photoId.src = $eventTarget.value;
}
$photoURL.addEventListener('input', handlePhotoUrl);
const $form = document.querySelector('form');
if (!$form) throw new Error('$form query failed');
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
  // console.log('before unshift method', data.entries);
  data.entries.unshift(newEntry);
  // console.log('after unshift method', data.entries);
  $form.reset();
  $formElements.photoURL.value = '/images/placeholder-image-square.jpg';
});
