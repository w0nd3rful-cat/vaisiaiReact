import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from 'react-router';
import vaisiaiContext from '../context/vaisiai/vaisiaiContext';

const User = () => {
	const idParams = useParams().userId;

	let value = useContext(vaisiaiContext);

	return (
		<div>
			<List>
				<ListItem disablePadding>
					<ListItemText>User: {value.users[idParams - 1].userId}</ListItemText>
				</ListItem>
				<ListItem disablePadding>
					<ListItemText>Id: {value.users[idParams - 1].id}</ListItemText>
				</ListItem>
			</List>

			<List>
				<ListItem disablePadding>
					<ListItemText primary={value.users[idParams - 1].title} />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText secondary={value.users[idParams - 1].body} />
				</ListItem>
			</List>
		</div>
	);
};

export default User;
