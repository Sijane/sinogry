import $ from 'jquery'

class MobileMenu {
	constructor() {
		this.menuIcon = $('.menu-icon')
		this.menuContent = $('.menu-content')
		this.bannerLogo = $('.banner__logo-frame')
		this.flatNav = $('.primary-nav__flat')
		this.events()
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this))
	}
	
	toggleTheMenu() {
		this.menuContent.toggleClass('menu-content--is-visible')
		this.bannerLogo.toggleClass('banner__logo-frame--is-visible')
		this.menuIcon.toggleClass("menu-icon--close-x")
		
//		if (this.flatNav.hasClass('.primary-nav__flat--is-visible')) {
//			this.bannerLogo.toggleClass("banner__logo-frame--is-fixed")
//		}		
	}
}

export default MobileMenu