import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import YouTubeIcon from '@material-ui/icons/YouTube';

interface NavbarProps {
    
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="flex">
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="#">Features</a>
                                <KeyboardArrowDownIcon color="inherit" fontSize="inherit" />
                            </li>
                            <li>
                                <a href="#">Categories</a>
                                <KeyboardArrowDownIcon color="inherit" fontSize="inherit" />
                            </li>
                            <li>
                                <a href="#">About Me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li>
                                <a href="#">
                                    <FacebookIcon color="inherit" fontSize="inherit" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TwitterIcon color="inherit" fontSize="inherit" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <InstagramIcon color="inherit" fontSize="inherit" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <YouTubeIcon color="inherit" fontSize="inherit" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <SearchIcon color="inherit" fontSize="inherit" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
