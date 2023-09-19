import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul className='list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://unsplash.com/developers" target='_blank'>API</a></li>
                <li><a href="https://github.com/itsvanshchavda/image-generator" target='_blank'>Github</a></li>
            </ul>
        </div>
    )
}

export default Nav;
