import React, { useContext } from 'react';
import UserItem from './UserItem';
import vaisiaiContext from '../context/vaisiai/vaisiaiContext';

const List = () => {
	let value = useContext(vaisiaiContext);

	return (
		<div>
			{value.users.map((user) => (
				<UserItem key={user.userId} user={user} />
			))}
		</div>
	);
};

export default List;
