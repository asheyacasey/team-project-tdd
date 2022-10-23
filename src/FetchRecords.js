import { useEffect, useState } from 'react';

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
		nothing goes here 
		<li data-testid ='user'>id: {index.id}</li>
		<li>name:{index.name}</li>
		<li>address:{index.address.city}</li>
		
		</>


	);

}

	
	return !showDetails ? (
		records ? (
			<>
				<h1>Users</h1>
				<div>
				{/* { 	records.length && records.map((rec, i)=>(
			
						<li key={i} data-testid='user'> {rec.name} <br></br>{rec.email} 	</li>
						
					))
				} */}
				<table>
						{/* { 	records.length && records.map((rec, i)=>(
			
						<li key={i} data-testid='user'> {rec.name} <br></br>{rec.email} 	</li>
						
					))
				} */}			
  <tr>
    <th>Name </th>
    <th>UserName </th>
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
					onClick={()=> handleDetails(rec)}>
				view details
			</button></td>
	 </tr>

	))
}
</table>
</div>
		<h2 data-testid="total-users">Total Users: {totalUsers}</h2>
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
		<Info/>

		<button
				onClick={handleDetailsBack} 
				data-testid="user"
			>
				back to page
			</button>
			</>
	)

};

export default FetchRecords;