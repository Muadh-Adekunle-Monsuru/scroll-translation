// Import necessary modules and initialize Convex client
const express = require('express');
const bodyParser = require('body-parser');
const { ConvexHttpClient } = require('convex/server'); // Adjust this based on your Convex setup

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Assuming you have a Convex client setup, replace the URL and key with your actual Convex project details
const convex = ConvexHttpClient(
	'https://terrific-cricket-106.convex.cloud',
	{}
);

// Define the removeUser endpoint
app.post('/removeUser', async (req, res) => {
	const { userId } = req.body;

	try {
		// Call your Convex mutation to remove the user
		await convex.mutation('removeUser')(userId);
		res.status(200).json({ message: 'User removed' });
	} catch (error) {
		console.error('Error removing user:', error);
		res.status(500).json({ message: 'Error removing user' });
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
