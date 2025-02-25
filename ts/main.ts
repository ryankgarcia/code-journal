const $photoURL = document.querySelector('img');

if (!$photoURL) throw new Error('$photoURL query failed');

function handlePhotoUrl(event: Event): void {
  const $photoURL = document.querySelector('img');
  if (!$photoURL) {
    throw new Error('$photoURL does not exist');
  }
  console.log('photo inserted');
  console.log('event', event);
  console.log('event.target', event.target);
}

$photoURL.addEventListener('change', handlePhotoUrl);
