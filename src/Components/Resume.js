import React, { Component } from 'react';

class Resume extends Component {
	render() {
		if (this.props.data) {
			// var education = this.props.data.education.map(function (education) {
			// 	return (
			// 		<div key={education.key}>
			// 			<a href={education.website}>
			// 				<h3>
			// 					{education.school} <i id='xLink' className='fa fa-external-link'></i>
			// 				</h3>
			// 			</a>
			// 			<p className='info'>
			// 				<span>{education.degree}</span>
			// 				<br />
			// 				<span className='date'>{education.graduated}</span>
			// 			</p>
			// 			<p>{education.description}</p>
			// 		</div>
			// 	);
			// });
			var work = this.props.data.work.map(function (work) {
				return (
					<div key={work.key}>
						<a href={work.website}>
							<h3>
								{work.company}{' '}
								<i
									id='xLink'
									className='fa fa-external-link'
								></i>
							</h3>
						</a>
						<p className='info'>
							<span>{work.title}</span>
							<br />
							<span className='date'>{work.years}</span>
						</p>
						<p>{work.description}</p>
						<br />
					</div>
				);
			});
			var skills = this.props.data.skills.map(function (skills) {
				var className = 'bar-expand ' + skills.name.toLowerCase();
				return (
					<li key={skills.key}>
						<span
							style={{ width: skills.level }}
							className={className}
						></span>
						<em>{skills.name}</em>
					</li>
				);
			});
		}

		return (
			<section id='resume'>
				<div className='row education'>
					<div className='three columns header-col'>
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<div className='row item'>
							<div className='twelve columns'>
								<a href='https://www.elevenfifty.org/'>
									<h3>
										Eleven Fifty Academy{' '}
										<i
											id='xLink'
											className='fa fa-external-link'
										></i>
									</h3>
								</a>
								<p className='info'>
									<span>Software Development</span>
									<br />
									<span className='date'>April, 2023 - July 2023</span>
								</p>
							</div>
						</div>
					</div>

					<div className='nine columns main-col'>
						<div className='row item'>
							<div className='twelve columns'>
								<br />
								<a href='https://kenzie.snhu.edu'>
									<h3>
										Kenzie Academy{' '}
										<i
											id='xLink'
											className='fa fa-external-link'
										></i>
									</h3>
								</a>
								<p className='info'>
									<span>Full-Stack Software Development</span>
									<br />
									<span className='date'>April, 2020 - October 2020</span>
								</p>
								<p className='info'>
									<span>Front-End Web Development</span>
									<br />
									<span className='date'>October, 2019 - April 2020</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='row work'>
					<div className='three columns header-col'>
						<h1>
							<span>Employment</span>
						</h1>
					</div>

					<div className='nine columns main-col'>{work}</div>
				</div>

				<div className='row skill'>
					<div className='three columns header-col'>
						<h1>
							<span>Skills Sets</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<div className='bars'>
							<ul className='skills'>{skills}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
