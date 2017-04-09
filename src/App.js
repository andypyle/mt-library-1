import React from 'react';
import styles from './App.sass';
import {
	Button,
	ButtonGroup
} from './components';

const App = () => (
	<main className={styles.Main}>
		<ButtonGroup>
			<Button dropdownSide="left" rounded color="blue" text="Dropdown Button" size="medium">	
				<Button size="medium" color="blue" text="Totally awesome UI!" />
				<Button size="medium" color="blue" text="Some menu item" />
				<Button vertical dropdownSide="right" rounded color="blue" text="Dropdown Button" size="medium">	
					<Button rounded size="medium" color="blue" text="Totally awesome UI!" />
					<Button size="medium" color="blue" text="Some menu item" />
					<Button vertical rounded dropdownSide="right" size="medium" color="blue" text="Another menu item">
						<Button rounded size="medium" color="blue" text="Totally awesome UI!" />
						<Button rounded size="medium" color="blue" text="Some menu item" />
					</Button>
				</Button>
			</Button>
			<Button size="medium" color="blue" btnStyle="outline" text="Outline Button" />
			<Button rounded btnStyle="outline" color="blue" text="Dropdown Button Two" size="medium" dropdownSide="right">	
				<Button btnStyle="outline" size="medium" color="blue" text="Awesome buttons!" />
				<Button btnStyle="outline" size="medium" color="blue" text="Some menu item" />
				<Button btnStyle="outline" rounded size="medium" color="blue" text="Some menu item" />
			</Button>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup vertical>
			<Button rounded vertical color="green" text="Dropdown Button" size="medium">	
				<Button rounded size="medium" color="green" text="Totally awesome UI!" />
				<Button size="medium" color="green" text="Some menu item" />
				<Button dropdownSide="right" rounded vertical color="green" text="Dropdown Button" size="medium">	
					<Button rounded size="medium" color="green" text="Totally awesome UI!" />
					<Button size="medium" color="green" text="Some menu item" />
					<Button size="medium" color="green" text="Some menu item" />
					<Button dropdownSide="right" rounded vertical color="green" text="Dropdown Button" size="medium">	
						<Button rounded size="medium" color="green" text="Totally awesome UI!" />
						<Button size="medium" color="green" text="Some menu item" />
						<Button dropdownSide="right" rounded vertical color="green" text="Dropdown Button" size="medium">	
							<Button rounded size="medium" color="green" text="Totally awesome UI!" />
							<Button size="medium" color="green" text="Some menu item" />
							<Button rounded size="medium" color="green" text="Some menu item" />
						</Button>
					</Button>
				</Button>
			</Button>
			<Button size="medium" color="green" btnStyle="outline" text="Outline Button" />
			<Button rounded vertical btnStyle="outline" color="green" text="Dropdown Button Two" size="medium" dropdownSide="right">	
				<Button rounded btnStyle="outline" size="medium" color="green" text="Awesome buttons!" />
				<Button btnStyle="outline" size="medium" color="green" text="Some menu item" />
				<Button btnStyle="outline" rounded size="medium" color="green" text="Some menu item" />
			</Button>
		</ButtonGroup>
		<br />
		<br />
		<Button rounded color="blue" text="Just A Plain Button" size="large" />
		<br />
		<br />
		<ButtonGroup>
			<Button rounded size="small" color="blue" text="Blue" />
			<Button size="small" color="darkblue" text="Dark Blue" />
			<Button size="small" color="red" text="Red" />
			<Button size="small" color="orange" text="Orange" />
			<Button size="small" color="green" text="Green" />
			<Button rounded size="small" color="black" text="Black" />
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup flex>
			<Button rounded dropdownSide="left" size="medium" color="blue" text="Blue">
				<Button size="medium" color="blue" text="Blue Button 1" />
				<Button size="medium" color="blue" text="Blue 2" />
				<Button size="medium" color="blue" text="Blue Btn 3" />
				<Button rounded size="medium" color="blue" text="Blue 4" />
			</Button>
			<Button size="medium" color="darkblue" text="Dark Blue" />
			<Button size="medium" color="red" text="Red" />
			<Button size="medium" color="orange" text="Orange">
				<Button size="medium" color="orange" text="Carrots" />
				<Button size="medium" color="orange" text="Oranges" />
				<Button size="medium" color="orange" text="Something Orange" />
				<Button size="medium" color="orange" text="Orange 4" />
				<Button rounded size="medium" color="orange" text="Orange 5" />
			</Button>
			<Button size="medium" color="green" text="Green" />
			<Button rounded size="medium" color="black" text="Black" />
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup>
			<Button rounded color="red" text="Forgot Password" />
			<Button color="blue" text="Login" />
			<Button rounded color="green" text="Register" />
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup vertical>
			<Button vertical rounded size="medium" color="blue" text="Blue">
				<Button rounded size="medium" color="blue" text="Blue 1" />
				<Button size="medium" color="blue" text="Blue 2" />
				<Button size="medium" color="blue" text="Blue 3" />
				<Button vertical size="medium" color="blue" text="Blue">
					<Button rounded size="medium" color="blue" text="Blue 1" />
					<Button size="medium" color="blue" text="Blue 2" />
					<Button size="medium" color="blue" text="Blue 3" />
					<Button rounded size="medium" color="blue" text="Blue 4" />
				</Button>
				<Button rounded size="medium" color="blue" text="Blue 4" />
			</Button>
			<Button size="medium" color="darkblue" text="Dark Blue" />
			<Button size="medium" color="red" text="Red" />
			<Button vertical size="medium" color="orange" text="Orange">
				<Button rounded size="medium" color="orange" text="Orange 1" />
				<Button size="medium" color="orange" text="Orange 2" />
				<Button size="medium" color="orange" text="Orange 3" />
				<Button size="medium" color="orange" text="Orange 4" />
				<Button rounded size="medium" color="orange" text="Orange 5" />
			</Button>
			<Button size="medium" color="green" text="Green" />
			<Button rounded size="medium" color="black" text="Black" />
		</ButtonGroup>
	</main>
)

export default App;
