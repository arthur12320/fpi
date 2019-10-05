const express = require('express');
require('dotenv').config();

const apiRouter = require('./routers/mpiRouter');

const app = express();


app.use('/MPI/1.0/', apiRouter);


app.listen(process.env.PORT || 5050, console.log(`server listening on port ${process.env.PORT}`));
