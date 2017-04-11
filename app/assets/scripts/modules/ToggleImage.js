import $ from 'jquery'

class ToggleImage {
	constructor() {
		this.figure = $('.figure')
		this.events()
	}

	events() {
		this.figure.click(this.toggleFigure.bind(this))
	}

	toggleFigure() {
//		alert('yo')
		console.log(this.figure)
//		this.figure.toggleClass('figure--is-clicked')
	}
}

export default ToggleImage