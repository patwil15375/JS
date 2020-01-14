document.addEventListener("DOMContentLoaded", function(){
	
	document.querySelector("input[type='button']").onclick = function(){
		
		let err =  document.querySelectorAll(".error");
		for(let elem of err){
			elem.innerHTML = "";
		}
		
		let firstName = document.querySelector("input[name = 'imie']").value;
		let imie = document.querySelector("#imie");

			if (firstName == "") {
				document.querySelector("#error_imie").innerHTML = "błąd";  
			}else{
				imie.innerText = firstName; 	
			}

		
		let surname = document.querySelector("input[name = 'nazwisko']").value;
		let nazwisko = document.querySelector("#nazwisko");

			if (surname == "") {
				document.querySelector("#error_nazwisko").innerHTML = "błąd";  
			}else {
				nazwisko.innerText = surname; 
			}
		
		let miejsce_pracy = document.querySelector("select[name = 'miasto']").value;
		let city = document.querySelector("#miasto");
		
			if (miejsce_pracy == "") {
				document.querySelector("#error_miasto").innerHTML = "błąd";  
			}else {
				 city.innerText = miejsce_pracy; 
			}
		
		let tech = document.querySelectorAll("input[type ='checkbox']");   
		document.querySelector("#technologie").innerHTML = ""; 
			for(let x of tech) {
			
				if(x.checked == true){
					document.querySelector("#technologie").innerHTML += x.value+" "; 
				}
		}

		if (document.querySelector("#technologie").innerHTML == "") 
		{
			document.querySelector("#error_technologia").innerHTML = "błąd";  
		}
		else{
			document.querySelector("#error_technologia").innerHTML = "";  
		}
		
		
		let stanowisko = document.querySelectorAll("input[name='stanowisko']");
		for(let tmp of stanowisko) {
			
			if(tmp.checked == true){
			document.querySelector("#stanowisko").innerHTML = tmp.value; 
				break; 
			}
		}
		
		if (document.querySelector("#stanowisko").innerHTML == "") 
		{
			document.querySelector("#error_stanowisko").innerHTML = "błąd";  
		}
		else{
			document.querySelector("#error_stanowisko").innerHTML = "";  
		}
		
		
		let dodatkowe = document.querySelector("textarea[name='uwagi']").value;
		let uwagi = document.querySelector("#uwagi");
		uwagi.innerText = dodatkowe; 
	
	}
	
});