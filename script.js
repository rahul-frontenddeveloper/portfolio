// // ========toggle icon navbar======*/
// let menuIcon = document.querrySelector('#menu-icon');
// let navbar = document.querrySelector('navbar');


// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');


// };







// ========scroll actoin======*/
Let sections = document.querySelectorAll('section') ;
Let navlinks = document.querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach(element => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeights;
        Let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks. forEach(links => {

                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id + ']').classList.add('active');

            });


        };
           




        
    });

    // =========stick Headers=========*/
    

    let header = document.querySelectorAll('header');
     
    header. classList.toggle('sticky',window.scrollY > 100);


    
};
// ========scroll actoin for changing font in hedaing======*/
const typed = new Typed('.mutiple', {
 Strings:['Frontend Developer' , 'YouTuber' , 'Blogger'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true

});
