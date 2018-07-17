const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this.blur)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
