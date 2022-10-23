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
		<table id="customers">
		<tr><th>Details</th><th></th></tr>
		<tr>
		<td data-testid ='user'>ID: {index.id}</td>
		<td>Name: {index.name}</td>
		<td>Email: {index.email}</td>
		<td>Address: {index.address.street} {index.address.suite} {index.address.city} {index.address.zipcode}</td>
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
				{/* { 	records.length && records.map((rec, i)=>(
			
						<li key={i} data-testid='user'> {rec.name} <br></br>{rec.email} 	</li>
						
					))
				} */}
				<table id="customers">
						{/* { 	records.length && records.map((rec, i)=>(
			
						<li key={i} data-testid='user'> {rec.name} <br></br>{rec.email} 	</li>
						
					))
				} */}			
  <tr>
    <th>Name </th>
    <th>User Name </th>
    <th>Email </th>
	<th>Phone </th>
	<th>Action </th>
	
  </tr>
	{records.length && records.map((rec,i)=>(  
		<tr>
	 <td key={i} data-testid='user'>{rec.name}</td> 
	 <td key={i} data-testid='user'>{rec.username}</td> 
	 <td key={i} data-testid='user'>{rec.email}</td> 
	 <td key={i} data-testid='user'>{rec.phone}</td> 
	
	 {/* <td key={i} data-testid='user'><a href='#\' 
	  onClick={<handleDetails key = {i} />}> view details </a>
	</td>  */}
	<td key ={i} data-testid='user'> <button
				// onClick={()=> handleDetails(rec.id, rec.name, rec.address.city)}>
					onClick={()=> handleDetails(rec)}
					className = 'button'
					>
				<span>
				view details
				</span>
			</button></td>
	 </tr>

	))
}
</table>
</div>
		<div className='total'>
		<h2 data-testid="total-users">Total Users: {totalUsers}</h2>
		</div>
			</>
		):(
			<p>Fetching...</p>
		)):(

		// <records>
		// 	nothing goes here 
		// 	<li data-testid='user'>id: {records.id}</li>
		// 	<li>name:{records.name}</li>
		// 	<li>address:{records.address}</li>
		// 	<td  data-testid='user'> <button
		// 		onClick={handleDetailsBack} 
		// 		data-testid="user"
		// 	>
		// 		back to page
		// 	</button></td>
		// 		</records>
		<>
		<div className='Info'>
		<Info/>

		<button
				onClick={handleDetailsBack} 
				data-testid="user"
			>
				back to page
			</button>
			</div>
		</>
	)

};

export default FetchRecords;