
// Select some elements...
let header = document.querySelector('#page-header');
header.style.textAlign = 'left';

//function for the loops 
let dogImages = document.querySelectorAll('.dog-image');
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
}
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.transform = 'scaleY(-1)'
}

let dogNames = document.querySelectorAll('.dog-name');
for (let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'purple';
// why this does not work? 
footer.style.borderStyle = 'red';

