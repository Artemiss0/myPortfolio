import React, {Component} from 'react';
import {Link} from "react-scroll";

class NavBar extends Component {
    render() {
        return (
            <nav className={this.props.getClass} ref="navbar">
                <ul className="navbar-nav centerText">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="about"
                            spy={true}
                            smooth={true}
                            cursor="pointer"
                            offset={0}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="work"
                            spy={true}
                            smooth={true}
                            cursor="pointer"
                            offset={0}
                            duration={500}
                        >
                            Work
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default NavBar;