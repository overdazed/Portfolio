//rafce

import {useState} from "react";
import {navLinks} from "../constants/index.js";

// we will reuse the same NavItems in our Desktop Navigation Bar and Mobile Navigation Bar
const NavItems = () => {
    return (
        <ul className="nav-ul">
        {/*/!* create a new Object *!/*/}
        {/*/!* create an Array within it with different elements *!/*/}
        {/*    {["Home", "About", "Projects", "Contact"].map((item, index) => (*/}
        {/*        <li key={index} className="nav-li">*/}
        {/*            <a href="/" className="nav-li_a">{item}</a>*/}
        {/*        </li>*/}
        {/*    ))}*/}
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        // it will be fixed at the top
        // left-0 right-0 = full width of the screen
        // bg-black/90 = 90% opacity
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            {/*create some spacing*/}
            <div className="max-w-7xl mx-auto">
                {/*center the elements horizontally*/}
                {/* items-center to center them vertically*/}
                {/*py = padding on top and bottom*/}
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    {/* / = home page*/}
                    {/* it will nicely transition from neutral to white when hovering */}
                    {/* <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"> */}
                        {/* Acting like a LOGO*/}
                        {/*Svetlana*/}
                        {/* LOGO */}
                    {/* </a> */}
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        {"{  SP  }"}
                    </a>
                    {/* make menu happen on the button click */}
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        {/* renders a menu icon */}
                        {/* if isOpen is currently turned on, then we'll show the asset for the close.svg, else we show the menu.svg*/}
                        <img src={isOpen ?"assets/close.svg" : "assets/menu.svg"} alt="toggle" className= "w-6 h-6"/>
                    </button>
                    {/* on small devices show it, else make it hidden */}
                    <nav className="sm:flex hidden">
                    {/* render the nav items */}
                        <NavItems />
                    </nav>
                </div>
            </div>
            {/* if isOpen give it a max height of screen, else give a max height of 0 */}
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}
export default Navbar
