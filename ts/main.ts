// create an interface for the data object //

const $input = document.querySelector('input');

if (!$input) throw new Error('$input query failed');

$input.addEventListener('input', (event: Event) => {
  const $eventTarget = event.target as HTMLInputElement;
  console.log('Input value changed to:' + $eventTarget.value);
});
