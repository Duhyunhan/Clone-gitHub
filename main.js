const toggleBtn = document.querySelector('.toggle-btn');
const toggles = document.querySelectorAll('.toggle');

console.log(toggleBtn)
console.log(toggles)
// console.log('11',[].forEach().call(toggles,function(){
//     console.log(1)
// }))
// toggle.map(i=>console.log(i))
toggleBtn.addEventListener('click',function(){
    console.log('button click');
    // toggle.classList.add('on')
   toggleElements();
})

function toggleElements() {
    [].forEach.call(toggles, function (toggle) {
        toggle.classList.toggle('on');
    })
}