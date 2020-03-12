import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Store from '../components/Store';
import './Home.css';
import { KakaoMap } from "react-kakao-maps";

const APIKEY = '//dapi.kakao.com/v2/maps/sdk.js?appkey=d8373fa46b12a66aa806652efcf6aa50';

const Home = () => {
	const [location, setLocation] = useState([]);
	const [stores, setStores] = useState([]);

	const getGeolocation = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.watchPosition((position) => {
				const { coords: { latitude, longitude } } = position;
				getDrugStore(latitude, longitude);
				setLocation({ lat: latitude, lng: longitude });
			});
		}
	};

	const getDrugStore = (lat, lng) => {
		Axios.get(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${lat}&lng=${lng}&m=2000`).then(res => {
			const { data: { count, stores } } = res;
			const data = stores.filter(item => {
				return item.remain_stat;
			})
			setStores(data);
		});
	};

	useEffect(() => {
		console.log(location);
	}, [location]);

	useEffect(() => {
		getGeolocation();
	}, []);

	return (
		<div className="container">
			<div className="stores">
				{stores.length > 0 && stores.map((item, index) => (
					<Store key={`Store${item.code}_${index}`} item={item} />
				))}
			</div>
			<div className="map">
				{/* <KakaoMap
					apiUrl={APIKEY}
					width="100%"
					height="700px"
					level={2}
					lat={37.490826}
					lng={127.03342}
				></KakaoMap> */}
			</div>
		</div>
	);
};

export default Home;