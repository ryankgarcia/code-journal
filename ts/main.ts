// create an interface for the data object //

const $photoURL = document.querySelector('#photoURL');

if (!$photoURL) throw new Error('$photoURL query failed');

function handlePhotoUrl(event: Event): void {
  const $photoId = document.getElementById('photo') as HTMLImageElement;
  const $eventTarget = event.target as HTMLInputElement;
  $photoId.src = $eventTarget.value;
}

$photoURL.addEventListener('input', handlePhotoUrl);
