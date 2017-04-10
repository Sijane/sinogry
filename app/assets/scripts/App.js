import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import Modal from './modules/Modal'
import Mute from './modules/Mute'
import StickyNav from './modules/StickyNav'

const mobileMenu = new MobileMenu()

new RevealOnScroll($('.feature-item'), '88%')
new RevealOnScroll($('.testimonial'), '65%')
// new RevealOnScroll(document.querySelectorAll('.feature-item'), '90%')
// new RevealOnScroll(document.querySelectorAll('.testimonial'), '65%')


const modal = new Modal()

const mute = new Mute()

const stickyNav = new StickyNav()