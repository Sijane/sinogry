import $ from 'jquery'

class Mute {
  constructor() {
		this.iframe = $('#youtube')
		this.events()
	}
	
	events() {
		this.iframe.muted = true
	}
}

export default Mute

