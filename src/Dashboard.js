import { useState } from "react";
 import FetchRecords from "./FetchRecords";

const Dashboard = (props) => { // props encapsulate the token and logout method

	const [token, setToken] = useState(props ? props.token : ''); // check if props exists. if ys, store the token 
	
	const onLogout = (evt) => {
		const { logout } = props; // deconstruct the object props and extract only the logout method
		setToken('');
		if(logout) {  // check if prop logout exist
			logout(); // if yes, trigger handleLogout method in Login component
		}
	};

	return(
		<>
			<h1>Menu</h1>
			<ul>
				<li>user {token}</li>
				<li><a href='#\' onClick={onLogout}>Logout</a></li>
			</ul>
			{/* <h2>Users</h2> */}
		    <div className= "App"> 
			<FetchRecords/>	
    </div>
			<h4>Table here...</h4>
		</>
	)
};


export default Dashboard;