import React from 'react';
import styles from './App.sass';
import {
	Button,
	ButtonGroup
} from './components';

const App = () => (
	<main className={styles.Main}>
		<ButtonGroup>
			<Button size="large" rounded color="blue" text="Blue" />
			<Button size="large" color="red" text="Red" />
			<Button size="large" color="green" text="Green" />
			<Button rounded size="large" color="orange" text="Orange" />
		</ButtonGroup><br /><br />
		<ButtonGroup flex>
			<Button btnStyle="outline" size="medium" rounded color="blue" text="Blue" />
			<Button btnStyle="outline" size="medium" color="red" text="Red" />
			<Button btnStyle="outline" size="medium" color="green" text="Green" />
			<Button btnStyle="outline" size="medium" color="orange" text="Orange" />
			<Button btnStyle="outline" size="medium" color="darkblue" text="Dark Blue" />
			<Button btnStyle="outline" size="medium" rounded color="black" text="Black" />
		</ButtonGroup><br /><br />
		<Button rounded color="red" text="Some Red Button" /><br /><br />
		<Button btnStyle="outline" size="large" color="orange" text="Warning!" rounded />
	</main>
)

export default App;
