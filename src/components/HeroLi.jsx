import React from 'react';

export default class HeroLi extends React.Component {
	render(){
		const {hero, avatar, name} = this.props.elem;    
		return (
			<li> 
				<p>{hero}</p>
				<img src={avatar} />
				<p>{name}</p>
			</li>
		);
	}
}

