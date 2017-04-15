import $ from 'jquery'

class ScrollHide {
	constructor() {
		this.gallery = $('.gallery')
		this.more = $('.more')
		this.events()
//		this.hidding()
	}
	
	events() {
		this.gallery.scroll(this.hidding.bind(this))
	}
	
	hidding() {
		this.more.addClass('more--hide')
	}
	
//	hidding() {
//		this.gallery.scroll(() => {
//			this.more.addClass('more--hide')
//		})
//	}
	
}

export default ScrollHide
