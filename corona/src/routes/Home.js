import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Home = () => {
	const [location, setLocation] = useState([]);
	const [stores, setStores] = useState([]);

	const getGeolocation = () => {
		if (navigator.geolocation) {
			console.log(navigator.geolocation);
			navigator.geolocation.getCurrentPosition((position) => {
				setLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				});
			});
		}
	};

	const getDrugStore = () => {
		Axios.get(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${location.lat}&lng=${location.lng}&m=1000`).then(res => {
			console.log(res);
		});
	}
	
	useEffect(() => {
		// console.log(location);
		// getDrugStore();
	}, [location]);

	useEffect(() => {
		getGeolocation();
	}, []);

	return (
		<h1>Hello, React!</h1>
	);
};

export default Home;