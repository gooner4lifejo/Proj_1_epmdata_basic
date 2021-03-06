/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/node", require("./routes/hello")());
	app.use("/node/database", require("./routes/database")());
	app.use("/node/npm", require("./routes/npm")());
};