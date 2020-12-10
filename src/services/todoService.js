import httpService from './httpService';


export const todoService = {
    query,
    remove,
    add,
    update
}

async function query(){
    const todos = await httpService.get('todoItems');
    return todos;
}

async function remove(id){
    try{
        return httpService.delete('todoItems/' + id);
    }catch(err){
        console.log('In service: Couldn\'t delete todo.');
        throw err;
    }
}
async function add(todoName){
    try{
        const todoToCreate = {
            name: todoName,
            isComplete: false
        }
        const todo = await httpService.post('todoItems', todoToCreate);
        return todo;
    }catch(err){
        console.log('In service: Couldn\'t add todo.');
        throw err;
    }
}

async function update(todo){
    try{
        return httpService.put('todoItems/' + todo.id, todo);
    }catch(err){
        console.log('In service: Couldn\'t update todo.');
        throw err;
    }
}