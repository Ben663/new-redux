
import {VisibilityFilters} from '../actions/index'
import FilterLink from '../containers/filterLink'

export function Main() {
	<div>
		<span>Show:  </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
	</div>
	
}

