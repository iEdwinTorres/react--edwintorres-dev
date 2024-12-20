import React, { Component } from 'react';

class Header extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var networks = this.props.data.social.map(function (network) {
				return (
					<li key={network.name}>
						<a href={network.url}>
							<i className={network.className}></i>
						</a>
					</li>
				);
			});
		}

		return (
			<header id='home'>
				<nav id='nav-wrap'>
					<a
						className='mobile-btn'
						href='#nav-wrap'
						title='Show navigation'
					>
						Show navigation
					</a>
					<a
						className='mobile-btn'
						href='#hide-nav-wrap'
						title='Hide navigation'
					>
						Hide navigation
					</a>

					<ul
						id='nav'
						className='nav'
					>
						<li className='current'>
							<a
								className='smoothscroll'
								href='#home'
							>
								Home
							</a>
						</li>
						<li>
							<a
								className='smoothscroll'
								href='#about'
							>
								About Me
							</a>
						</li>
						<li>
							<a
								className='smoothscroll'
								href='#portfolio'
							>
								Projects
							</a>
						</li>
						<li>
							<a
								className='smoothscroll'
								href='#resume'
							>
								Resume
							</a>
						</li>
						{/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
						{/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
					</ul>
				</nav>

				<div className='row banner'>
					<div className='banner-text'>
						<h1 className='responsive-headline'>I am {name}</h1>
						<h3>
							An Indianapolis Software Developer. Specializing in building
							exceptional websites, applications, and everything in between.
						</h3>
						<hr />
						<ul className='social'>{networks}</ul>
					</div>
				</div>

				<p className='scrolldown'>
					<a
						className='smoothscroll'
						href='#about'
					>
						<i className='icon-down-circle'></i>
					</a>
				</p>
			</header>
		);
	}
}

export default Header;
