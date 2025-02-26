const $photoURL = document.querySelector('#photoURL');

if (!$photoURL) throw new Error('$photoURL query failed');

function handlePhotoUrl(event: Event): void {
  const $photoId = document.getElementById('photo') as HTMLImageElement;
  const $eventTarget = event.target as HTMLInputElement;
  $photoId.src = $eventTarget.value;
}

$photoURL.addEventListener('input', handlePhotoUrl);

// below is the event listener for the submit button //

interface Entry {
  title: string;
  photoUrl: string;
  notes: string;
  entryId: number;
}

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  photoURL: HTMLInputElement;
  textarea: HTMLTextAreaElement;
}

const $form = document.querySelector('form');

if (!$form) throw new Error('$form query failed');

$form.addEventListener('submit', (event: Event): void => {
  event.preventDefault();

  const $formElements = $form.elements as FormElements;

  if (!$formElements) throw new Error('$formElements query failed');

  const newEntry: Entry = {
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
