import React from 'react';
import AddTodo from './containers/AddTodo';
import TodoList from './components/TodoList';
// import VisibleTodoList from './containers/visibileTodoList';
import { Main } from './components/Main';


function App() {
	return (
		<div>
			<AddTodo />
			<TodoList />
			
			<Main />
		</div>
	);
}

export default App;
