import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

function App() {
	const data = [
		{ name: 'Andrey E.', salary: 2800, increase: false, id: 1 },
		{ name: 'Lidia M.', salary: 3800, increase: true, id: 2 },
		{ name: 'Milana E.', salary: 1500, increase: false, id: 3 },
	];

	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeeList data={data} />
			<EmployeeAddForm />
		</div>
	);
}

export default App;
