import { httpRouter } from 'convex/server';

import { removeUserRoute } from './data';

const http = httpRouter();

http.route({
	path: '/removeUser',
	method: 'POST',
	handler: removeUserRoute,
});

// Convex expects the router to be the default export of `convex/http.js`.
export default http;
