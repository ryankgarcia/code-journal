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
const $photoId = document.getElementById('photo') as HTMLImageElement;

// the function is looking to see when the event that a user pastes in a
// new url in the URL, and updates it based on the link that is pasted

const $photoURL = document.querySelector('#photoURL');

if (!$photoURL) throw new Error('$photoURL query failed');

function handlePhotoUrl(event: Event): void {
  const $eventTarget = event.target as HTMLInputElement;
  $photoId.src = $eventTarget.value;
}

$photoURL.addEventListener('input', handlePhotoUrl);

// the code below this queries the form on my DOM, if its not found, throw new Error

const $form = document.querySelector('form');

if (!$form) throw new Error('$form query failed');

// this code below is an event listener callback function that checks our dom each
// time a form is submitted, and adds a new entry to local storage
// with each new entry that is added

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
  data.entries.unshift(newEntry);
  writeData();
  $form.reset();
  $photoId.src = '/images/placeholder-image-square.jpg';
});
