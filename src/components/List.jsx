import React from 'react';
import HeroLi from './HeroLi';

export default class List extends React.Component {
    
	render(){
		const {
			arrayOfObjects = [], 
			elemChoice = 'ul', 
			renderClass = HeroLi } = this.props; 
            
		const listItems = arrayOfObjects.map( (elem)=> (<renderClass elem={element} />) );
		
		if (elemChoice === 'div') {
			return <div>{listItems}</div>;
		} 
		return <ul>{listItems}</ul>;
	}
    
}
