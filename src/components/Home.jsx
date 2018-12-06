import React from 'react';
import List from './List';
import HeroLi from './HeroLi';


import arrayOfObjects from '../utils/heroes';



class Home extends React.Component {

	render() {
		return (
			<div>
				<List	arrayOfObjects = {arrayOfObjects} elemChoice = 'ul' />
			</div>
		);
	}
}
export default Home;
