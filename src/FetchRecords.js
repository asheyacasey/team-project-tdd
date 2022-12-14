import { useEffect, useState } from 'react';
import "./Dashboard.css"

// import Dashboard from './Dashboard';
//   import Details from './Details'
const FetchRecords = () => {
	const [showDetails, setDetails]= useState(false);
	const [records, setRecords] = useState([]);
	const [totalUsers, setTotalUsers] = useState(0);
	const [index, setIndex] = useState([]);
	
	const fetchData = async () => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/users"
	  	).then((response) => response.json());
		//
	  	setRecords(response);
	  	setTotalUsers(response.length);
	};

	useEffect(()=>{
		fetchData();	
	},[]);

	const handleDetails = (i) => {
		setDetails(true);
		setIndex(i);
	};

	const handleDetailsBack = () => {
		setDetails(false);
	};

function Info(){
	return(
		<>
			<table id="customers2">
				<tr><th>Details</th><th></th></tr>

				<tr>
					<td data-testid ='user'>ID:</td>
					<td> {index.id}</td>
				</tr>

				<tr>
					<td>Name</td>
					<td>{index.name} </td>
				</tr>

				<tr>
					<td>Email</td>
					<td>{index.email}</td>
				</tr>

				<tr>
					<td>Address</td>
					<td>{index.address.street} {index.address.suite} {index.address.city} {index.address.zipcode}</td>
				</tr>

				<tr>
					<td>Phone</td>
					<td>{index.phone}</td>
				</tr>

				<tr>
					<td>Website</td>
					<td>{index.website}</td>
				</tr>

				<tr>
					<td>Company</td>
					<td>{index.company.name}</td>
				</tr>
			</table>
		</>
	);
}

	return !showDetails ? (
		records ? (
			<>
				<h1>Users Table</h1>
				<div>
					<table id="customers">		
						<tr>
							<th>Name </th>
							<th>User Name </th>
							<th>Email </th>
							<th>Phone </th>
							<th>Action </th>
						</tr>
						{
							records.length && records.map((rec,i)=>(  
								<tr>
									<td key={i} data-testid='name'>{rec.name}</td> 
									<td key={i} data-testid='username'>{rec.username}</td> 
									<td key={i} data-testid='email'>{rec.email}</td> 
									<td key={i} data-testid='phone'>{rec.phone}</td> 
									<td key ={i} data-testid='button'> 
										<button	onClick={()=> handleDetails(rec)} className = 'button' data-testid='btn-view-details'> 
											<span> View details </span>
										</button>
									</td>
								</tr>
							))
						}
					</table>
				</div>

				<div className='total'>
				<h2 data-testid="total-users">Total Users: {totalUsers}</h2>
				</div>
					</>
		): ( <p>Fetching...</p> )
	):(
		<>
			<div className='Info'>
				<Info/>
					<div className='btndiv'>
						<button	onClick={handleDetailsBack}	data-testid="user" className='button'>
							<span className='back'>	Back to Overview </span>
						</button>
					</div>
			</div>
		</>
	)
};

export default FetchRecords;