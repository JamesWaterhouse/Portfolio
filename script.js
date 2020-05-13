let pages = document.querySelectorAll('.page');
let homeButton = document.querySelector('.homeButton');
let aboutButton = document.querySelector('.aboutButton');
let workButton = document.querySelector('.workButton');
let contactButton = document.querySelector('.contactButton');

let home = document.querySelector('.home')
let about = document.querySelector('.about')
let work = document.querySelector('.work')
let contact = document.querySelector('.contact')

homeButton.addEventListener('click', function() {
    showPage(home);
})

aboutButton.addEventListener('click', function() {
    showPage(about);
})

workButton.addEventListener('click', function() {
    showPage(work);
})

contactButton.addEventListener('click', function() {
    showPage(contact);  
})


function showPage(content) {
    pages.forEach(function(page) {
        page.classList.add('hidden')
    })
    content.classList.remove('hidden')  
}