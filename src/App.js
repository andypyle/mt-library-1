import React, { Component } from 'react';
import styles from './App.sass';
import {
	Button
} from './components';

const App = () => (
	<main className={styles.Main}>
		<Button style="outline" color="red" size="medium" text="Button One" /><br /><br />
		<Button rounded style="outline" color="blue" size="medium" text="Button Two" /><br /><br />
		<Button rounded color="green" size="large" text="Button Three" /><br />

	</main>
)

export default App;
