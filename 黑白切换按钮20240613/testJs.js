console.clear();

// theme
const root = document.documentElement;
const themeButtons = document.querySelectorAll('.c-theme');

// animate icon on change theme
const animateIcon = el => {
	el.classList.add('c-theme--is-animating')
		setTimeout(() => {
			el.classList.remove('c-theme--is-animating')
		}, 300)
}

// themes
const lightMode = () => {
	root.classList = 'theme--light'
	themeButtons.forEach(button => {
		button.classList.remove('c-theme--active')
		animateIcon(button)
	})
}

const darkMode = (e) => {
	root.classList = 'theme--dark'
	themeButtons.forEach(button => {
		button.classList.add('c-theme--active')
		animateIcon(button)
	})
}

// default
const defaultOnload = () => {
	darkMode()
	setTimeout(() => {
		lightMode()
	}, 800)
}

defaultOnload()

// theme function
const changeTheme = () => {
	let themeState = document.documentElement.classList.contains('theme--light');
	themeState ? 
		darkMode() :
	lightMode()
}

// assign theme function to theme buttons
themeButtons.forEach(button => {
	button.addEventListener('click', changeTheme)
})

// Checkbox for zoom
const demoCheck = document.getElementById('demoCheck')

demoCheck.addEventListener('input', () => {
	let checkState = demoCheck.checked
	const activeState = () => {
		demoCheck.parentNode.classList.add('c-checkbox--active')
		themeButtons.forEach(button => {
			button.classList.add('c-theme--demo')
		})
	}
	const inactiveState = () => {
		demoCheck.parentNode.classList.remove('c-checkbox--active')
		themeButtons.forEach(button => {
			button.classList.remove('c-theme--demo')
		})
	}
	checkState ?
		activeState() :
		inactiveState()
})