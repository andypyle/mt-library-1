import React from 'react';
import styles from './App.sass';
import {
	Button,
	ButtonGroup
} from './components';

const App = () => (
	<main className={styles.Main}>
		<ButtonGroup>
			<Button rounded size="small" color="blue" text="Blue" />
			<Button size="small" color="red" text="Red" />
			<Button size="small" color="green" text="Green" />
			<Button size="small" color="orange" text="Orange" />
			<Button color="red" size="small" text="Drop">
				<Button color="red" size="small" text="Dropdown 1" />
				<Button color="red" size="small" text="Dropdown 2" />
				<Button rounded color="red" size="small" text="Dropdown 3" />
			</Button>
			<Button rounded size="small" text="Down" dropdownSide="right">
				<Button size="small" text="Dropdown 1" />
				<Button size="small" text="Dropdown 2" />
				<Button rounded size="small" text="Dropdown 3" />
			</Button>
		</ButtonGroup><br /><br />

		<ButtonGroup>
			<Button rounded size="medium" color="green" text="Blue" />
			<Button size="medium" color="orange" text="Red" />
			<Button size="medium" color="darkblue" text="Green" />
			<Button size="medium" color="blue" text="Orange" />
			<Button color="orange" size="medium" text="Drop">
				<Button color="orange" size="medium" text="Dropdown 1" />
				<Button color="orange" size="medium" text="Dropdown 2" />
				<Button rounded color="orange" size="medium" text="Dropdown 3" />
			</Button>
			<Button rounded size="medium" text="Down" dropdownSide="right">
				<Button size="medium" text="Dropdown 1" />
				<Button size="medium" text="Dropdown 2" />
				<Button rounded size="medium" text="Dropdown 3" />
			</Button>
		</ButtonGroup><br /><br />

		<ButtonGroup flex>
			<Button rounded color="red" size="large" text="Drop">
				<Button color="red" size="large" text="Dropdown 1" />
				<Button color="red" size="large" text="Dropdown 2" />
				<Button rounded color="red" size="large" text="Dropdown 3" />
			</Button>
			<Button size="large" color="green" text="Blue" />
			<Button size="large" color="orange" text="Red" />
			<Button size="large" color="black" text="Green" />
			<Button size="large" color="blue" text="Orange" />
			<Button rounded color="darkblue" size="large" text="Down" dropdownSide="right">
				<Button color="darkblue" size="large" text="Dropdown 1" />
				<Button color="darkblue" size="large" text="Dropdown 2" />
				<Button color="darkblue" size="large" text="Dropdown 3" />
				<Button color="darkblue" rounded size="large" text="Dropdown 4" />
			</Button>
		</ButtonGroup><br /><br />
		
		<Button rounded size="large" text="Down">
			<Button size="large" text="Dropdown 1" />
			<Button size="large" text="Dropdown 2" />
			<Button rounded size="large" text="Dropdown 3" />
		</Button>
	</main>
)

export default App;
