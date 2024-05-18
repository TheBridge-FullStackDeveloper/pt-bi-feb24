const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const alerts = document.getElementById('alerts')

const submitButton = document.getElementById('submitButton')

let dataValid = false

function validations(patata) {
	const { name, email, password, password2 } = patata

	if (name === '' || !email || !password.length > 0) {
		return (alerts.innerHTML = `
		<div class="alert alert-warning" role="alert">
  		Debes rellenar todos los campos!
		</div>
		`)
	} else {
		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			return (alerts.innerHTML = `
			<div class="alert alert-warning" role="alert">
				Algo va mal y no te digo qué es!
			</div>
			`)
		}
		if (password !== password2) {
			return (alerts.innerHTML = `
			<div class="alert alert-warning" role="alert">
				Las contras no coinciden
			</div>
			`)
		}
		dataValid = true

		let userArray = JSON.parse(localStorage.getItem('userData')) || []
		userArray.push(patata)
		localStorage.setItem('userData', JSON.stringify(userArray))

		return (alerts.innerHTML = `
		<div class="alert alert-success" role="alert">
  		Todo correcto!
		</div>
		`)
	}
}

function onSubmit(event) {
	event.preventDefault()

	const userData = {
		name: userName.value,
		email: userEmail.value,
		password: password.value,
		password2: password2.value,
	}
	validations(userData)

	setTimeout(function () {
		alerts.innerHTML = ''
	}, 3000)

	if (dataValid) {
		setTimeout(function () {
			window.location = './index.html'
		}, 3000)
	}
}

submitButton.addEventListener('click', onSubmit)
