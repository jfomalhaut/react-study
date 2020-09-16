import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Store from '../components/Store';
import './Home.css';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import { geolocated } from "react-geolocated";
import { IoIosSearch } from 'react-icons/io'; 
import { TiDelete } from 'react-icons/ti'; 
import { FaMapMarkerAlt } from 'react-icons/fa'; 

const ICON = require('../../assets/mask.png').default;
const CLIENT_ID = 'ioz30mgrnh';
const CLIENT_SECRET = 'uOfGgnStAq0emvppHDti3Lgy2PgAs4RjpHnqwXkq';
const GEOCODING_API = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=';

const Home = ({ coords }) => {
	const [location, setLocation] = useState([]);
	const [stores, setStores] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [activeCode, setActiveCode] = useState(0);
	
	const getGeolocation = () => {
		if (coords) {
			const { latitude, longitude } = coords;
			getDrugStore(latitude, longitude);
			setLocation({ lat: latitude, lng: longitude });
		}
	};

	const getDrugStore = (lat, lng) => {
		Axios.get(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${lat}&lng=${lng}&m=1000`).then(res => {
			const { data: { count, stores } } = res;
			console.log(stores);
			const data = stores.filter(item => {
				return item.remain_stat && item.remain_stat !== 'break';
			});
			setStores(data);
		});
	};

	const getGeocoding = () => {
		const config = {
			headers: {
				'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
				'X-NCP-APIGW-API-KEY': CLIENT_SECRET
			}
		};
		Axios.get(`${GEOCODING_API}${keyword}`, config).then(res => {
			console.log(res);
		});
	}

	const onChangeCenter = center => {
		const { y, x } = center;
	};

	const onKeyPress = e => {
		if (e.key === 'Enter') {
			getGeocoding();
		}
	};

	const onPressMarker = item => {
		setActiveCode(item.code);
		const top = document.getElementById(`store${item.code}`).offsetTop - 150;
		document.getElementById('stores').scrollTo({top, left: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		// console.log(activeCode);
	}, [activeCode]);

	useEffect(() => {
		getGeolocation();
	}, [coords]);

	return (
		<div className="container">
			<div className="left">
				<div className="search">
					<IoIosSearch className="searchIcon"/>
					<input type="text" value={keyword} onChange={({ target: { value } }) => setKeyword(value)} placeholder="장소 및 주소를 검색하세요" onKeyPress={onKeyPress}/>
					<TiDelete className="deleteIcon" onClick={() => setKeyword('')} />
				</div>
				<div className="stores" id="stores">
					{stores.length > 0 && stores.map((item, index) => (
						<Store item={item} key={item.code} onPressHandler={setActiveCode} activeCode={activeCode} />
					))}
				</div>
			</div>
			<div className="map">
				<RenderAfterNavermapsLoaded ncpClientId={CLIENT_ID} error={<p>Maps Load Error</p>} oading={<p>Maps Loading...</p>}>
					<NaverMap 
						id="react-naver-maps-introduction"
						style={{width: '100%', height: '100vh'}}
						center={location}
						onCenterChanged={center => onChangeCenter(center)}
					>
						{stores.map((item, idx) => (
							<Marker position={item} key={`MAKER${idx}`} onClick={() => onPressMarker(item) } />
						))}
					</NaverMap>
				</RenderAfterNavermapsLoaded>
			</div>
		</div>
	);
};

// export default Home;

export default geolocated({
	positionOptions: {
		 enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(Home);