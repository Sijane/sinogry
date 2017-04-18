import $ from 'jquery'

class ToggleImage {
  constructor() {
    this.thumbnail = $('#gallery img')
    this.modalImage = $('.modal__image')
//    this.toolImage = $('#tools img')
//    this.largerImage = $('#gallery a')
//    this.events()
    this.passHref()
//    this.scaleToolImg()
  }

//  events() {
//    this.thumbnail.click(this.passHref.bind(this))
//  }
//  
//  passHref() {
//    const href = this.thumbnail.siblings().attr('data-href') //only first link
//    this.modalImage.attr('src', href) 
//    e.preventDefault
//    return false    
//  }
  
  passHref() {
    this.thumbnail.click(e => {
      const href = $(e.target).siblings().attr('data-href')
      this.modalImage.attr('src', href)
      e.preventDefault
      return false
    })
  }  
}

export default ToggleImage
