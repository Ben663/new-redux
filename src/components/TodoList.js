import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, toggleTodo }) => (
	<ul>
		{todos.map((todo) => (
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => toggleTodo(todo.id)}
			/>
		))}
	</ul>
);


TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});



const mapDispatchToProps = {
	toggleTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
