
const particleScreen = document.querySelector("#particles-js");
let mover = document.querySelector("#mover");
let moverButton = document.querySelector("#mover button");
mover.addEventListener("click",function(){

        particleScreen.style.transform = "translateY(-100%)";
        particleScreen.style.opacity = '0';
        moverButton.style.transform = "scale(0)";

});

/*work section*/
const body = document.querySelector('.landing');
const modal = document.querySelector('.modal');
const fullImage = document.querySelector('.full-img');
const caption = document.querySelector(".caption");
const card = document.querySelectorAll('.card');
const workSection = document.querySelector('#work');
const title = document.querySelector('.face2 h2');
const cvButton = document.querySelector('.cvButton');
const cvSource = cvButton.getAttribute('data-original');


cvButton.addEventListener('click',() => {

        body.style.backgroundColor = '#588068';
        modal.classList.add('open');
        fullImage.classList.add('open');
        fullImage.src= `images/full/${cvSource}`;

});

card.forEach(i => {

const originalSrc = i.getAttribute('data-original');
const titleSrc = i.getAttribute('data-id');

        i.addEventListener('click',() => {

                modal.classList.add('open');
                fullImage.classList.add('open');
                fullImage.src= `images/full/${originalSrc}`;
                workSection.scrollIntoView();
                caption.textContent = titleSrc;

        });

});

modal.addEventListener('click',(e) => {

        console.log(e);
        if(e.target.classList.contains('modal')){

                modal.scrollTo(0,-100);
                modal.classList.remove('open');
                fullImage.classList.remove('open');
                workSection.scrollIntoView();

                
        }

});

/*scroll animation*/
window.addEventListener('scroll', function(e){

        const target = document.querySelectorAll('.scroll');
        const target2 = document.querySelectorAll('.scroll2');
        const target3 = document.querySelector('.scroll3');
        const target4 = document.querySelector('.scroll4');

        let scrolled = window.pageYOffset;

        target.forEach(i => {
                 
                let rate = scrolled * 0.1;
                i.style.transform = 'translate3d(-'+rate+'px,'+rate+'px,0px)';

        });

        target2.forEach(j => {

                let rate2 = scrolled * -0.1;
                j.style.transform = 'translate3d(0px,'+rate2+'px,20px)';

        });

        let rate4 = scrolled * 0.05;
        target4.style.transform = 'translate3d('+rate4+'px,'+rate4+'px,20px)';
        let rate3 = scrolled * 0.04;
        target3.style.transform = 'translate3d('+rate3+'px,'+rate3+'px,20px)';
 


});

