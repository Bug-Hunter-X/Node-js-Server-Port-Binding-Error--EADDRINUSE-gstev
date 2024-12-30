# Node.js Server Port Binding Error: EADDRINUSE

This repository demonstrates a common error encountered when developing Node.js servers: the `EADDRINUSE` error. This error occurs when your server attempts to bind to a port that is already in use by another process (e.g., another server or application).

## Bug Description

The `bug.js` file contains a simple HTTP server that listens on port 8080. If this port is already occupied, the server will fail to start and throw an `EADDRINUSE` error.

## Solution

The `bugSolution.js` file shows how to handle this error gracefully.  Instead of crashing, the solution attempts to listen on the specified port, and if it fails due to port being already in use it will wait for a short period and then retry.  If a maximum number of retries is exceeded, it logs an error.