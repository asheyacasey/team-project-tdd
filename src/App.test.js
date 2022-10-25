/* eslint-disable testing-library/await-async-query */
/* eslint-disable no-undef */
import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import FetchRecords from "./FetchRecords";
import Login from "./Login";

describe("Login screen",()=>{
	it("has an input for email",()=>{
		render(<Login/>);
		const input = screen.getByTestId("email");
		expect(input).toBeInTheDocument();

		expect(input).toHaveAttribute("type", "text");
	});

    it("has an input for password",()=>{
		render(<Login/>);
		const input = screen.getByTestId("password");
		expect(input).toBeInTheDocument();

		expect(input).toHaveAttribute("type", "password");
	});

    it("has a login button that verifies email and password",()=>{
		render(<Login/>)

		const btn = screen.getByTestId("send-user-login");
		expect(btn).toBeInTheDocument();
	});
})

describe("Check the correct Token.",()=>{

	afterEach(cleanup);

	it("Check the email data input", () => {		
		render(<Login />);
		const input1 = screen.getByTestId("email");
		fireEvent.change(input1, { target: { value: "eve.holt@reqres.in" }});
		expect(input1.value).toBe("eve.holt@reqres.in");
	});

	it("Check the password data input", () => {		
		render(<Login />);
		const input2 = screen.getByTestId("password");
		fireEvent.change(input2, { target: { value: "cityslicka" }});
		expect(input2.value).toBe("cityslicka");
	});

	it("Check if valid user with token", async () => {   
		render(<Login />);
		await waitFor(() => {
			//the line below was not discussed
			//is it just a general assumption (universal truth) that the token is there
			//we can do better testing for dynamic data once we use jest/cucumber
		    expect(screen.findByText('QpwL5tke4Pnpja7X4')).toBeTruthy() 
		})
	});
});


// describe("Testing a fetch...", ()=>{
	
// 	afterEach(cleanup); //clear garbage collection side effects, for async await

// 	it("test dynamic list...", async () => {   
// 		render(<FetchRecords />);	

// 		screen.debug(); // display dom in cmd/cli

// 		// Async/await
// 		// a programming pattern that will allow async processes to behave like sync.
// 		// waitFor() - if you need to check the results of an async..await codes
// 	    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
// 		await waitFor(() => expect(screen.getAllByRole('listitem').length).toBe(10));
// 	});
// });


describe("Testing results after fetch...", ()=>{
	afterEach(cleanup);

	it("Check if a certain user exists...(Leanne Graham)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Ervin Howell)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Ervin Howell')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Clementine Bauch)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Clementine Bauch')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Patricia Lebsack)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Patricia Lebsack')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Chelsey Dietrich)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Chelsey Dietrich')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Mrs. Dennis Schulist)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Mrs. Dennis Schulist')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Kurtis Weissnat)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Kurtis Weissnat')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Nicholas Runolfsdottir V)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Nicholas Runolfsdottir V')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Glenna Reichert)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Glenna Reichert')).toBeInTheDocument();
	});
    it("Check if a certain user exists...(Clementina DuBuque)", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Clementina DuBuque')).toBeInTheDocument();
	});


	it("Check initial no of users in list...", async () => {  
		render(<FetchRecords />);
		expect(screen.getByTestId("total-users")).toHaveTextContent("Total Users: 0"); 	
	});


    // it("Check total no of users in list...", async () => {  
	// 	render(<FetchRecords />);
	// 	// li tag/element has a role of listitem
	// 	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role

	// 	// using getAllByRole()
	// 	const items = await waitFor(() => screen.getAllByRole('listitem'));
	// 	expect(items.length).toEqual(10);

	// 	// using getAllByTestId()
	// 	const users = await waitFor(() => screen.getAllByTestId('user'));
	// 	expect(users.length).toEqual(10);
	// });
});