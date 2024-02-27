

// 1. **GET /all**
//    - Description: Retrieves all users.
//    - Authentication: Not required.
//    - Response:
//      - Status: 200 OK
//      - Body: An array of user objects.

// 2. **POST /register**
//    - Description: Registers a new user.
//    - Authentication: Not required.
//    - Request Body:
//      ```
//      {
//        // User registration data fields
//      }
//      ```
//    - Response:
//      - Status: 200 OK
//      - Body: The newly registered user object.
   
// 3. **POST /login**
//    - Description: Logs in a user.
//    - Authentication: Not required.
//    - Request Body:
//      ```
//      {
//        // User login credentials
//      }
//      ```
//    - Response:
//      - Status: 200 OK
//      - Body: An authentication token for the logged-in user.
   
// 4. **GET /logout**
//    - Description: Logs out the authenticated user.
//    - Authentication: Requires authentication token.
//    - Response:
//      - Status: 200 OK

// 5. **GET /me**
//    - Description: Retrieves the profile of the authenticated user.
//    - Authentication: Requires authentication token.
//    - Response:
//      - Status: 200 OK
//      - Body: The profile information of the authenticated user.

// #### Authentication Requirements:
// - `/me` and `/logout` endpoints require a valid authentication token. The token should be included in the request headers as `Authorization: Bearer <token>`.

// ### Testing:

// #### Unit Tests:

// 1. **getAllUsers Test:**
//    - Description: Tests the functionality of retrieving all users.
//    - Steps:
//      1. Mock an unauthenticated request to retrieve all users.
//      2. Verify that the response status is 200 and the returned array contains user objects.

// 2. **register Test:**
//    - Description: Tests the functionality of registering a new user.
//    - Steps:
//      1. Mock a request to register a new user.
//      2. Verify that the response status is 200 and the returned object matches the newly registered user data.

// 3. **login Test:**
//    - Description: Tests the functionality of logging in a user.
//    - Steps:
//      1. Mock a request to log in a user.
//      2. Verify that the response status is 200 and the returned object contains an authentication token.

// 4. **logout Test:**
//    - Description: Tests the functionality of logging out a user.
//    - Steps:
//      1. Mock an authenticated request to log out a user.
//      2. Verify that the response status is 200.

// 5. **getMyProfile Test:**
//    - Description: Tests the functionality of retrieving the profile of the authenticated user.
//    - Steps:
//      1. Mock an authenticated request to retrieve the user's profile.
//      2. Verify that the response status is 200 and the returned object matches the profile data of the authenticated user.

// #### How to Run Tests:
//    - Use a testing framework like Mocha or Jest.
//    - Write test cases for each endpoint using mocking libraries like `sinon` for HTTP requests.
//    - Run the tests using the testing framework's command-line interface or IDE integration.