import { TextField , Button, Stack, Typography } from '@mui/material'
import React, { useState, useReducer } from 'react'
import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';
import Item from './Components/Item'
import { reducer } from './Reducer/todoreducer';

export const todos = [
  {
    id: uuid(),
    isDone: false,
    time: '11:00',
    task: "buy modal s"
  },
]

function Todo() {
  const [state, dispatch] = useReducer(reducer, {todos:todos})


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isDone: false,
      time: '11:00'
    }});

  const onSubmit = data => {
    dispatch({type: "ADD", payload:{...data , id: uuid()}})
  };

  return (
    <div>
      <center>
        <Typography>Todo</Typography>
      </center>
      <Stack flexDirection="column" width="fit-content" gap={2} margin="0 auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register("task", { required: true })} id="outlined-basic" label="Name" variant="outlined"/>
          <Button variant='contained' type='submit'>add</Button>
          {errors.task && <Typography color="red">This field is required</Typography>}
        </form>
      </Stack>
      <div className="contanier-grid">
        {
          state.todos.map(item=> <Item  {...item } dispatch={dispatch}/>)
        }
      </div>
    </div>
  )
}


export default Todo
