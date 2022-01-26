import React, { Component } from 'react';
import vaisiaiContext from './vaisiaiContext';
import axios from 'axios';

class VaisiaiState extends Component {
	state = {
		users: [],
	};

	async componentDidMount() {
		try {
			const res = await axios.get(
				'https://my-vaisiai-api.herokuapp.com/vaisiai'
			);
			this.setState({ users: res.data });
		} catch (e) {
			console.error(e);
		}
	}

	addUser = (id, titleBody) => {
		let user = {
			userId: this.state.users.length + 1,
			id: Number(id),
			title: titleBody.title,
			body: titleBody.body,
		};

		this.setState({ users: [...this.state.users, user] });
	};

	render() {
		return (
			<vaisiaiContext.Provider
				value={{
					...this.state,
					addUser: this.addUser,
				}}
			>
				{this.props.children}
			</vaisiaiContext.Provider>
		);
	}
}

export default VaisiaiState;
