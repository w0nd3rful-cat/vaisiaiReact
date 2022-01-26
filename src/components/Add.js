import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import vaisiaiContext from '../context/vaisiai/vaisiaiContext';

const Add = () => {
	const [id, setId] = useState('');
	const [titleBody, setTitleBody] = useState({ title: '', body: '' });

	const [errors, setErrors] = useState('');

	let value = useContext(vaisiaiContext);

	const onChangeId = (e) => {
		const {
			target: { value },
		} = e;
		setErrors({ id: '' });
		setId(value);

		let reg = new RegExp(/^\d*$/).test(value);
		if (!reg) {
			setErrors({ id: 'Galimi tik skaitmenys' });
		}
	};

	const onChange = (e) => {
		setTitleBody({
			...titleBody,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (errors.id) {
			return window.alert('Klaida');
		}

		value.addUser(id, titleBody);

		setId('');
		setTitleBody({ title: '', body: '' });
	};

	return (
		<Box
			component='form'
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			Validate
			autoComplete='off'
			onSubmit={onSubmit}
		>
			<div>
				<TextField
					name='enter-Id'
					label='Id'
					variant='standard'
					inputProps={{ maxLength: 3 }}
					value={id}
					onChange={onChangeId}
					required
					error={Boolean(errors?.id)}
					helperText={errors?.id}
				/>
				<div>
					<TextField
						name='title'
						label='Title'
						variant='standard'
						inputProps={{ maxLength: 12 }}
						value={titleBody.title}
						onChange={onChange}
						required
					/>
				</div>
				<div>
					<TextField
						name='body'
						label='Body'
						inputProps={{ maxLength: 50 }}
						variant='standard'
						required
						value={titleBody.body}
						onChange={onChange}
					/>
				</div>

				<div>
					<Button type='submit' variant='contained' color='primary'>
						Submit
					</Button>
				</div>
			</div>
		</Box>
	);
};

export default Add;
