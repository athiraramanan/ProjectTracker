import React from 'react';
import GoogleAuth from './GoogleAuth';
import {Link }from 'react-router-dom';
const Header = () => {
	return (
		<div className='ui secondary pointing menu'>
			<Link to='/' className='item'>Tasks</Link>
			<div className='right menu'>
				<Link to='/' className='item'>
					All Tasks
				</Link>
				<GoogleAuth/>
			</div>
		</div>
	)
}

export default Header;