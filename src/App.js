import React from 'react';
import styles from './App.sass';
import {
	Button,
	ButtonGroup,
	If
} from './components';

const App = () => (
	<main className={styles.Main}>
		<If condition={true}>
			<span>True</span>
			<span>False</span>
			<span>Tralse</span>
		</If>
	</main>
)

export default App;
