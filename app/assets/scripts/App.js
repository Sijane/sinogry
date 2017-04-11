import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import Mute from './modules/Mute'
import StickyNav from './modules/StickyNav'
import ToggleImage from './modules/ToggleImage'

const mobileMenu = new MobileMenu()

new RevealOnScroll($('section p'), '75%')
new RevealOnScroll($('.frame'), '70%')
// new RevealOnScroll(document.querySelectorAll('.feature-item'), '90%')
// new RevealOnScroll(document.querySelectorAll('.testimonial'), '65%')

const mute = new Mute()

const stickyNav = new StickyNav()

const toggleImage = new ToggleImage()