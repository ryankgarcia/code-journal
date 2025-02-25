'use strict';
// create an interface for the data object //
const $photoURL = document.querySelector('#photoURL');
if (!$photoURL) throw new Error('$photoURL query failed');
function handlePhotoUrl(event) {
  const $photoId = document.getElementById('photo');
  const $eventTarget = event.target;
  $photoId.src = $eventTarget.value;
}
$photoURL.addEventListener('input', handlePhotoUrl);
