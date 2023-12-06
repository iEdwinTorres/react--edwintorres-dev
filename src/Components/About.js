import React, { Component } from "react";
import pdf from "../App Resources/Resume.pdf";

class About extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var profilepic = "images/" + this.props.data.image;
			// var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			// var phone = this.props.data.phone;
			var email = this.props.data.email;
		}

		return (
			<section id='about'>
				<div className='row'>
					<div className='three columns'>
						<img className='profile-pic' src={profilepic} alt='Edwin Torres Profile Pic' />
					</div>
					<div className='nine columns main-col'>
						<h2>About Me</h2>

						<p>I earned my Full-Stack Software Development certificate from Kenzie Academy in Indianapolis, IN, in 2020. Since then, I have continued my professional development by recently earning a Software Development certificate from Eleven Fifty Academy in 2023. I would be thrilled to apply the skills I refined at Kenzie and Eleven Fifty, along with my passion for technology, to your Software Development role.</p>
						<p>Apart from my formal education, I have always been deeply fascinated by and kept myself well-informed about the latest advancements in technology, both in hardware and software. Witnessing the incredible progress year after year across all aspects of technology fills me with excitement. This constant drive and enthusiasm not only push me to be part of this advancement but also to take a leading role in spearheading it.</p>
						<div className='row'>
							<div className='columns contact-details'>
								<h2>Contact Details</h2>
								<p className='address'>
									<span>{name}</span>
									<br />
									<span>
										/* {street} */
										/* <br /> */
										{city} {state}, {zip}
									</span>
									<br />
									<span> /* {phone} */ </span>
									<br />
									<span>
										<a href='mailto:me@edwintorres.com'>{email}</a>
									</span>
								</p>
							</div>
							<div className='columns download'>
								<p>
									<a href={pdf} className='button'>
										<i className='fa fa-download'></i>
										Download Resume
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
