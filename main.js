document.addEventListener('DOMContentLoaded', function () {
  const heading = document.getElementById('domainName')
  if (heading) {
    heading.addEventListener('click', function () {
      console.log('Header clicked!')
    })
  } else {
    console.log('Element not found')
  }
})

console.log('header')
