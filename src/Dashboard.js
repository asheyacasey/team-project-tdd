import { useState } from "react";
import FetchRecords from "./FetchRecords";
import logo from './logo.svg';

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
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet"></link>
			
				<div className="navbar">
					<div className="logo">
					<img src={logo}/>
					</div>
					<div className="signout">
					<a href='#\' onClick={onLogout}>Sign Out</a>
					</div>

				</div>
		
			<div className="Container">
				<div className= "App"> 
					<div className="token">
						<label className = "user-token" data-testid = "user-token">Token: {token}</label>
						<FetchRecords/>	
					</div>
				</div>
			</div>
			
		
		</>
	)
};


export default Dashboard;