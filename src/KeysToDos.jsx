import { v4 as uuidv4 } from 'uuid';

//  key should be inferred from the data itself, not be generated on the fly.
const todos = [
    { task: "mow the yard", id: uuidv4() },
    { task: "Work on Odin Projects", id: uuidv4() },
    { task: "feed the cat", id: uuidv4() },
]

export default function TodoList() {
    return (
        <ul>
            {todos.map((todo) => 
                <li key={todo.id}>{todo.task}</li>
            )}
        </ul>
    );
}
