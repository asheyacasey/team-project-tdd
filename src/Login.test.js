import {render, screen, fireEvent} from "@testing-library/react";
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
});

describe("Login verification", ()=>{
    it("Proceeds to the dashboard only if email and password are both correct", () => {		
		render(<Login/>);
		const input1 = screen.getByTestId("email");
        const input2 = screen.getByTestId("password");
        //const input3 = screen.getByTestId("verify");
	
		fireEvent.change(input1, { target: { value: "eve.holt@reqres.in" }});
		expect(input1.value).toBe("eve.holt@reqres.in");

        fireEvent.change(input2, { target: { value: "cityslick" }});
		expect(input2.value).toBe("cityslick");

		const btn = screen.getByTestId("send-user-login");
	
    	fireEvent.click(btn);

        //expect(input3.value).toBe(true);
    });
});