import Swal from "sweetalert2";
import { editTodo } from "../../redux/state/todo/todSlice";
import store from "../../redux/store/store";

export function todoEdit(index,item){
    Swal.fire({
        title: "Edit Task name",
        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
            store.dispatch(editTodo({index:index,task:value}))
        }
      })
}