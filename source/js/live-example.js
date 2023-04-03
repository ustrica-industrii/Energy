let fatImg = document.querySelector('.fat__cat');
let slimImg = document.querySelector('.slim__cat');
let wasButton = document.querySelector('.was');
let becameButton = document.querySelector('.became');
let rangeWas = document.querySelector('.slider__range__was');
let rangeBecame = document.querySelector('.slider__range__became');

rangeBecame.classList.add('visually-hidden');

wasButton.addEventListener('click', function() {
    slimImg.classList.add('visually-hidden');
    fatImg.classList.remove('visually-hidden');
    rangeBecame.classList.add('visually-hidden');
    rangeWas.classList.remove('visually-hidden');
});
becameButton.addEventListener('click', function(){
    fatImg.classList.add('visually-hidden');
    slimImg.classList.remove('visually-hidden');
    rangeBecame.classList.remove('visually-hidden');
    rangeWas.classList.add('visually-hidden');
})
