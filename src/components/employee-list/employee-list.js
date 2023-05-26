import EmployeeListItem from '../employee-list-item/employee-list-item';

import './employee-list.css';

const EmployeeList = ({ data, onDelete, onToggleProp }) => {
	const elements = data.map((item) => {
		return (
			<EmployeeListItem
				name={item.name}
				salary={item.salary}
				key={item.id}
				increase={item.increase}
				rise={item.rise}
				onDelete={() => onDelete(item.id)}
				onToggleProp={(e) =>
					onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))
				}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeeList;
