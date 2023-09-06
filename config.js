const defaultAuthConfig = {
	cacheLocation: 'localstorage',
};

const config = {
	auth: {
		...defaultAuthConfig,
		domain: 'auth-rocks-drab-obnoxious-photographer.cic-demo-platform.auth0app.com',
		clientId: 'dKifBKwDXbgt6TMrBNN0S6EeNvvBwuKB',
		// UNCOMMENT the following line to test the private API
		 audience: ['api://authrocks/'],
	},
	app: {
		enableSilentAuth: false,
		port: 3000,
	},
	server: {
		permissions: ['authRocks'],
	},
};

export default config;
