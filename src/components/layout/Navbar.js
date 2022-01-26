import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar className='ToolBar'>
					<IconButton
						component={Link}
						to='/'
						sx={{
							color: 'white',
						}}
					>
						<HomeIcon />
					</IconButton>

					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Vaisiai React
					</Typography>
					<IconButton color='inherit' component={Link} to='Add'>
						<AddIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
