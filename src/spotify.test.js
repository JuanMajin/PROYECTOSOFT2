// import apiClient, { setClientToken, loginEndpoint } from "./spotify";

// // Mock axios
// jest.mock("axios");

// describe("apiClient", () => {
//   test("setClientToken sets the Authorization header correctly", () => {
//     const token = "test-token";
//     const config = {
//       headers: {},
//     };
//     const expectedConfig = {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     };

//     setClientToken(token);
//     const interceptor = apiClient.interceptors.request.handlers[0].fulfilled;

//     const updatedConfig = interceptor(config);

//     expect(updatedConfig).toEqual(expectedConfig);
//   });
// });



