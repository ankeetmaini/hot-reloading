import React from 'react';

import getWelcomeMessage from './welcome-message';

export class App extends React.Component {
	render () {
		return (
			<div>
				<h1>{getWelcomeMessage()}</h1>
			</div>
		);
	}
}

