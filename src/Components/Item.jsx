import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const Modal=({setEdit, dispatch, id})=>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    dispatch({type: "EDIT", payload:{...data , id: id} })
    setEdit(false)
  };

  return(
    <Stack borderRadius="20px" flexDirection="column" width="25%" height="300px" backgroundColor="#c4c4c4"  gap={2} margin="0 auto" position="fixed" top="50%" left="50%" sx={{transform:'translate(-50%,-50%)', display:'flex', justifyContent:'center', alignItems:'center',}}>
        <form  className="Modal" onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register("edit", { required: true })} id="outlined-basic" label="Name" variant="outlined"/>
          <Button variant='contained' type='submit'>edit</Button>
          {errors.task && <Typography color="red">This field is required</Typography>}
        </form>
    </Stack>
  )
}

export default function Item({id, task, isDone, time, dispatch}) { 
  const [edit, setEdit] = useState(false)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {task}
        </Typography>
        <Typography variant="h5" component="div">
          {task}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {time}
        </Typography>
        <Typography variant="body2">
          {isDone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> dispatch({type:"REMOVE", payload: id}) }>delete</Button>
        <Button size="small" onClick={()=> setEdit(true)}>Edit</Button>
      </CardActions>
      { edit ? <Modal setEdit={setEdit} dispatch={dispatch} id={id}/> : null }
    </Card>
  );
}

