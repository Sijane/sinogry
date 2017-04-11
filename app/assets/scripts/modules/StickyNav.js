import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'

class StickyNav {
	constructor() {
		this.flatNav = $('.primary-nav__flat')
		this.headerTrigger = $('.primary-nav')
		this.pageSection = $('.page-section')
		this.intro = $('#intro')
		this.headerLinks = $('.primary-nav__flat a')
		this.createHeaderWaypoint()
    this.createPageSectionWaypoints()
    this.addSmoothScroll()
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll()
  }

	createHeaderWaypoint() {
		const that = this
		new Waypoint({
			element: this.headerTrigger[0],
			handler: direction => {
				if (direction == "down") {
					that.flatNav.addClass('primary-nav__flat--is-fixed')
					that.flatNav.addClass('is-current-link')
					that.intro.addClass('page-section--nav-padding')
				} else {
					that.flatNav.removeClass('primary-nav__flat--is-fixed')
					that.flatNav.removeClass('is-current-link')
					that.intro.removeClass('page-section--nav-padding')
				}
			}
		})
	}

  createPageSectionWaypoints() {
    const that = this
    this.pageSection.each(function() {
      const currentPageSection = this
      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == "down") {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link')
            that.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '40%'
      })

      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == "up") {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link')
            that.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '-50%'
//				console.log(offset)
      })
    })
  }
}

export default StickyNav
