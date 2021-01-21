
	window.addEventListener("load", function(){
		document.querySelector(".preloader").classList.add("opacity-0");
		setTimeout(() =>{
			document.querySelector(".preloader").style.display="none";
		}, 1000)
	})

// Aside Navbar
	const nav = document.querySelector(".nav"),
				navList = nav.querySelectorAll("li"),
				totalNavList = navList.length,
				allSection = document.querySelectorAll(".section"),
				totalSection = allSection.length;

	//Show clicked section				
	for(let i=0; i<totalNavList; i++){
		const a = navList[i].querySelector("a");
		a.addEventListener("click", function(){
			//remove back-section class
			for(let i=0; i<totalSection; i++){
				allSection[i].classList.remove("back-section");
			}

			for(j=0; j<totalNavList; j++){
				if(navList[j].querySelector("a").classList.contains("active")){
					//Add back-section class
					allSection[j].classList.add("back-section");
				}
				//remove active class
				navList[j].querySelector("a").classList.remove("active");
			}

		this.classList.add("active");
		showSection(this);

		if(window.innerWidth < 1200){
			asideSectionTogglerBtn();
		}
		})
	}

	function showSection(element){
			for(let i=0; i<totalSection; i++){
				allSection[i].classList.remove("active");
			}
			const target = element.getAttribute("href").split("#")[1];
		document.querySelector("#" + target).classList.add("active")
	}


	const navTogglerBtn = document.querySelector(".nav-toggler"),
	      aside = document.querySelector(".aside");

	//Nav-toggler clickable(show nav, hide nav)
	navTogglerBtn.addEventListener("click",() =>{
		asideSectionTogglerBtn();

	})

	function asideSectionTogglerBtn(){
		aside.classList.toggle("open");
		navTogglerBtn.classList.toggle("open");
	}





