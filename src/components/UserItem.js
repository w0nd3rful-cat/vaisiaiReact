import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const UserItem = ({ user }) => {
	return (
		<Grid container justify='end'>
			<Box sx={{ width: '100%', maxWidth: 300 }}>
				<List>
					<ListItem component='div' disablePadding>
						<ListItemButton component={Link} to={`/${user.userId}`}>
							<ListItemText primary={` ${user.userId}. ${user.title} `} />

							<Grid item xs={3}>
								<ListItemText primary={`  Id: ${user.id}`} />
							</Grid>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Grid>
	);
};

export default UserItem;
