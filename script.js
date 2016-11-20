
function hideall(){
	var con = document.getElementById('Ac1');
		 con.style.display = 'none';  
		con = document.getElementById('Ac2');
		 con.style.display = 'none'; 
		con = document.getElementById('AcBr');
		 con.style.display = 'none'; 
		con = document.getElementById('AcRev');
		 con.style.display = 'none'; 
		con = document.getElementById('Ac3');
		 con.style.display = 'none'; 
		con = document.getElementById('Ac4');
		 con.style.display = 'none'; 
		con = document.getElementById('AcRog');
		 con.style.display = 'none'; 
		con = document.getElementById('AcUn');
		 con.style.display = 'none'; 
		con = document.getElementById('Assa');
		 con.style.display = 'none'; 
		con = document.getElementById('AcSyn');
		 con.style.display = 'none'; 
}

hideall();

function show(what){
	hideall();
	var con = document.getElementById('home');
	  con.style.display = 'none'; 
	con = document.getElementById(what);
	  con.style.display = 'block'; 
}

toggle('auth');

function toggle(obj) {

	var el = document.getElementById(obj);

	el.style.display = (el.style.display != 'none' ? 'none' : '' );

}
