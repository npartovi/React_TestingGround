import React, { Component } from 'react';
// Component is imported so you dont have to write React.Component
// Converted this component from a functional to a class component.

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			term: 'starting value'
		};
	}
	render(){
		return(
			<div className="search-bar"> 
				<input 
				value={this.state.term}
				onChange={e => this.onInputChange(e.target.value)} />
			</div>
			)
	}

	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;