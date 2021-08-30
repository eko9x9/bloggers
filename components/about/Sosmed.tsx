import React, { ReactElement } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Sosmed(): ReactElement {
    return (
        <section className="sosmed pt-3">
            <h3 className="bordered text-center">SUBSCRIBE AND FOLLOW</h3>
            <ul className="py-2">
                <li>
                    <a href="#">
                        <FacebookIcon style={{color: "black", fontSize: 18}} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <TwitterIcon style={{color: "black", fontSize: 18}} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <InstagramIcon style={{color: "black", fontSize: 18}} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <YouTubeIcon style={{color: "black", fontSize: 18}} />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Sosmed
