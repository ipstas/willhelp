// Enable cross origin requests for all endpoints
WebApp.rawConnectHandlers.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
	//console.log('[add_cors.js]', req, '\nres:', res, '\n\n');
  return next();
});

	

