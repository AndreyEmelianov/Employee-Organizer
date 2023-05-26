import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Andrey E.', salary: 2800, increase: false, rise: true, id: 1 },
				{ name: 'Lidia M.', salary: 3800, increase: true, rise: false, id: 2 },
				{ name: 'Milana E.', salary: 1500, increase: false, rise: false, id: 3 },
			],
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((elem) => elem.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}

				return item;
			}),
		}));
	};

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeeList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeeAddForm onAddItem={this.addItem} />
			</div>
		);
	}
}

export default App;
