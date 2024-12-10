# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The problem is that despite using `express.json()`, the request body remains empty. This usually stems from incorrect middleware order or a missing dependency.

## Bug

The `bug.js` file contains the erroneous code.  A POST request to `/data` with a JSON payload will not correctly parse the body.

## Solution

The `bugSolution.js` file provides the corrected code, ensuring proper JSON body parsing in Express.js.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run the server using `node bug.js`.
4. Send a POST request to `http://localhost:3000/data` with a JSON body (e.g., using curl or Postman).
5. Observe that the server logs an empty object for the request body (in `bug.js`).
6. Repeat steps 2-5 using `bugSolution.js` and verify the correct JSON body parsing.
