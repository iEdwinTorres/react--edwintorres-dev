import React, { Component } from "react";

class Resume extends Component {
	render() {
		if (this.props.data) {
			var education = this.props.data.education.map(function (education) {
				return (
					<div key={education.school}>
						<a href={education.website}>
							<h3>
								{education.school} <i id='xLink' className='fa fa-external-link'></i>
							</h3>
						</a>
						<p className='info'>
							<span>{education.degree}</span>
							<br />
							<span className='date'>{education.graduated}</span>
						</p>
						<p>{education.description}</p>
						<br />
					</div>
				);
			});
			var work = this.props.data.work.map(function (work) {
				return (
					<div key={work.company}>
						<a href={work.website}>
							<h3>
								{work.company} <i id='xLink' className='fa fa-external-link'></i>
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
			// var skills = this.props.data.skills.map(function (skills) {
			// 	var className = "bar-expand " + skills.name.toLowerCase();
			// 	return (
			// 		<li key={skills.name}>
			// 			<span style={{ width: skills.level }} className={className}></span>
			// 			<em>{skills.name}</em>
			// 		</li>
			// 	);
			// });
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
							<div className='twelve columns'>{education}</div>
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

				{/* <div className='row skill'>
					<div className='three columns header-col'>
						<h1>
							<span>Skills Set</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<div className='bars'>
							<ul className='skills'>{skills}</ul>
						</div>
					</div>
				</div> */}
			</section>
		);
	}
}

export default Resume;
