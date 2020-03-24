import React from 'react';

const About = ({ match: { params: { data } } }) => {
	return (
		<h1>About Component : {data}</h1>
	);
};

export default About;