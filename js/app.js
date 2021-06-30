/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navigation = document.getElementById('navbar__list');
const allSections = Array.from(document.querySelectorAll('section'));

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function toggleMenuItemActive(e) {
    const lastActive = document.querySelector('.is-active');
    lastActive.classList.remove('is-active');
    e.target.classList.add('is-active');
}

function scrollToSection(e) {

    allSections.forEach((sectionElement) => {
        if(sectionElement.getAttribute('data-nav') === e.target.innerText) {
            document.getElementById(sectionElement.getAttribute('id')).scrollIntoView();
            console.log(sectionElement.getAttribute('id'));
        }
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function createNavigation() {

    for (const section of allSections) {
        let menuItem = section.getAttribute('data-nav'); // get menuItemName from attribute

        let li = document.createElement('li');
        let anchor = document.createElement('a');

        li.setAttribute('id', menuItem);
        menuItem === 'Welcome' ? anchor.setAttribute('class', 'is-active') : anchor.setAttribute('class', 'none');

        li.appendChild(anchor);
        navigation.appendChild(li);

        anchor.setAttribute("href", `#${menuItem}`);
        anchor.textContent = menuItem;
    }
}

// Add class 'active' to section when near top of viewport
function setActive() {

}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(e) {

    toggleMenuItemActive(e);
    scrollToSection(e);
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', createNavigation);

// Scroll to section on link click
document.querySelector('#navbar__list').addEventListener('click', scrollToAnchor)

// Set sections as active
