import EmployeeListItem from '../employee-list-item/employee-list-item';

import './employee-list.css';

const EmployeeList = ({ data, onDelete }) => {
	const elements = data.map((item) => {
		return (
			<EmployeeListItem
				name={item.name}
				salary={item.salary}
				key={item.id}
				increase={item.increase}
				onDelete={() => onDelete(item.id)}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeeList;
