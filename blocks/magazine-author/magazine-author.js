export default function decorate(block){
    console.log('suthor');
    const horizontalLineDecor = document.createElement('hr');
    horizontalLineDecor.classList.add('border-line');
    block.querySelector('div').parentElement.parentElement.prepend(horizontalLineDecor);
}