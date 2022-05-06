/* open/close menu quando clicar no icone */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
console.log(toggle);
for (const element of toggle) {
	element.addEventListener("click", () => {
		nav.classList.toggle("show");
	});
}

/* esconder o menu quando clicar em um item dele */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
	link.addEventListener("click", () => {
		nav.classList.remove("show");
	});
}

/* adicionar sombra ao header quando scrollar */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
	if (window.scrollY >= navHeight) {
		// scroll é maior que a altura do header
		header.classList.add("scroll");
	} else {
		// scroll é menor que a altura do header
		header.classList.remove("scroll");
	}
}

/* Testimonials Carousel Slider - SWIPER */
const swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
	breakpoints: {
		767: {
			slidesPerView: 2,
			setWrapperSize: true,
		},
	},
});

/* ScrollReveal: Mostrando os elementos ao dar scroll na página */
const scrollReveal = ScrollReveal({
	origin: "top",
	distance: "30px",
	duration: 700,
	reset: true,
});

scrollReveal.reveal(
	`#home .image, #home, #titulo-pri .text,
	#about .image, #about .text,
	#services header, #services .card,
	#testimonials header, #testimonials .testimonials
	#contact .text, #contact .links,
	footer .brand, footer .social .formstyle 
	`,
	{ interval: 100 }
);

/* ---------------------------------------------- */

/* Back to Top Button */
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
	if (window.scrollY >= 560) {
		backToTopButton.classList.add("show");
	} else {
		backToTopButton.classList.remove("show");
	}
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
	const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

	for (const section of sections) {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.getAttribute("id");

		const checkpointStart = checkpoint >= sectionTop;
		const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

		if (checkpointStart && checkpointEnd) {
			document
				.querySelector("nav ul li a[href*=" + sectionId + "]")
				.classList.add("active");
		} else {
			document
				.querySelector("nav ul li a[href*=" + sectionId + "]")
				.classList.remove("active");
		}
	}
}

/* When Scroll */
window.addEventListener("scroll", () => {
	changeHeaderWhenScroll();
	backToTop();
	activateMenuAtCurrentSection();
});

async function enviarEmail (){
	const nome = document.querySelector("#nome").value
	const email = document.querySelector("#email").value
	const tel = document.querySelector("#telefone").value
	const estado = document.querySelector("#estado").value

	const result = await axios.get(`http://localhost:3000/enviar-email/${nome}/${email}/${tel}/${estado}`)
	alert(result.data.msg)
     LimpaForm();
}

function LimpaForm(){
	const nome = document.querySelector("#nome").value  = ''
	const email = document.querySelector("#email").value  = ''
	const tel = document.querySelector("#telefone").value  = ''
	const estado = document.querySelector("#estado").value = ''
}




var interval = 0;

var maxSlider = document.querySelectorAll('.box-image').length - 1;


 sumir()

 function sumir(){
     let img = document.querySelectorAll('.box-image img')
     let span = document.querySelector('.bolinhas')
    
     

     img[1].style.display = 'none';
     img[2].style.display = 'none';   


     for(var i = 0; i < maxSlider+1; i++){

        if(i == 0){

            span.innerHTML += '<span class="marcador"></span>'
        }else{

            span.innerHTML += '<span></span>'
        }
     }     
 }

 acao();


function acao(){

    let img = document.querySelectorAll('.box-image img')
    let span = document.querySelectorAll('.bolinhas span')

    setInterval(function(){

        img[interval].style.display = 'none';
        span[interval].classList.remove('marcador')
        interval++; 
        if(interval > maxSlider){

            interval = 0;
        }
        img[interval].style.display = 'block';
        span[interval].classList.add('marcador')

        
    },5000)


}

controlador();



function controlador(){

    let img = document.querySelectorAll('.box-image img')
    document.querySelectorAll('.bolinhas span').forEach(function(valor,index){


            valor.addEventListener('click',function(){
                
                img[interval].style.display = 'none';
                interval = index;
                img[interval].style.display = 'block';

               let div = document.querySelectorAll('.bolinhas span').length;

               if(div == 3){

                document.querySelectorAll('.bolinhas span').forEach(function(valor){

                    valor.classList.remove('marcador')

                })

               }

               valor.classList.add('marcador')

            })
    })
}

 






