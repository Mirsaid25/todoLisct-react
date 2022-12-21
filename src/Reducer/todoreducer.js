
  
  export const reducer = (state, action) =>{
    switch (action.type) {
  
      case "ADD":
        return{
          todos: [...state.todos, action.payload]
        }
  
      case "REMOVE":
        return{
            todos: state.todos.filter(item=>{
                if(item.id !== action.payload){
                    return item
                }
            })
        }
    
      case "EDIT":
        return{
            todos: state.todos.filter(item=>{
                if(item.id === action.payload.id){
                   item.task = action.payload.edit
                }
                return item
            })
        }
      default: 
        break
    }
  }