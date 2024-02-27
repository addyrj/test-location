

// #### Endpoints:

// 1. **POST /locations**
//    - Description: Creates a new location.
//    - Authentication: Requires authentication token.
//    - Request Body:
//      ```
//      {
//        // Location data fields
//      }
//      ```
//    - Response:
//      - Status: 200 OK
//      - Body: The newly created location object.
   
// 2. **GET /allLocations**
//    - Description: Retrieves all locations associated with the authenticated user.
//    - Authentication: Requires authentication token.
//    - Response:
//      - Status: 200 OK
//      - Body: An array of location objects.
   
// 3. **PUT /locations/:id**
//    - Description: Updates the location with the specified ID.
//    - Authentication: Requires authentication token.
//    - Request Body:
//      ```
//      {
//        // Updated location data fields
//      }
//      ```
//    - Response:
//      - Status: 200 OK
//      - Body: The updated location object.
   
// 4. **DELETE /locations/:id**
//    - Description: Deletes the location with the specified ID.
//    - Authentication: Requires authentication token.
//    - Response:
//      - Status: 204 No Content

// #### Authentication Requirements:
// - All endpoints require a valid authentication token. The token should be included in the request headers as `Authorization: Bearer <token>`.

// ### Testing:

// #### Unit Tests:

// 1. **newLocation Test:**
//    - Description: Tests the functionality of creating a new location.
//    - Steps:
//      1. Mock an authenticated request to create a new location.
//      2. Verify that the response status is 200 and the returned object matches the expected format.

// 2. **getMyLocations Test:**
//    - Description: Tests the functionality of retrieving all locations associated with the authenticated user.
//    - Steps:
//      1. Mock an authenticated request to retrieve all locations.
//      2. Verify that the response status is 200 and the returned array contains location objects.

// 3. **updateLocation Test:**
//    - Description: Tests the functionality of updating a location.
//    - Steps:
//      1. Mock an authenticated request to update a location.
//      2. Verify that the response status is 200 and the returned object matches the updated data.

// 4. **deleteLocation Test:**
//    - Description: Tests the functionality of deleting a location.
//    - Steps:
//      1. Mock an authenticated request to delete a location.
//      2. Verify that the response status is 204 (No Content), indicating successful deletion.

// #### How to Run Tests:
//    - Use a testing framework like Mocha or Jest.
//    - Write test cases for each endpoint using mocking libraries like `sinon` for HTTP requests.
//    - Run the tests using the testing framework's command-line interface or IDE integration.