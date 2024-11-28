document.getElementById('loginForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const username = document.getElementById('username').value;
    	const password = document.getElementById('password').value;
	const chcek  = document.getElementById('checkbox').checked;

	if(Remember me){
		localStorage.setItem('username',username);
		localStorage.setItem('password',password);
	}else{
		localStorage.removeItem('username',username);
		localStorage.removeItem('password',password);
	}
	alert('Logged in as ${username}');

	checkExistingUser();
});

function checkExistingUser()
	{ 
		const username = localStorage.getItem('username');
		const password = localStorage.getItem('password'); 
		const existingButton = document.getElementById('existing');
	if (username && password)
	{ 
		existingButton.style.display = 'block'; 
		existingButton.onclick = function()
			{ 
				alert(`Logged in as ${username}`);
			}
	} else {
		existingButton.style.display = 'none';
	} 
	
	}
	checkExistingUser();