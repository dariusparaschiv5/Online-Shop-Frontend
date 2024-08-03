// // services/customers.service.ts
// import { CUSTOMER_API_URL } from "../constants/url.constant";
// import { User } from "../interfaces/auth.inteface";


// export const customersService = {
//   getCustomerByUsername: async (username: string): Promise<User> => {
//     try {
//       const response = await fetch(`${CUSTOMER_API_URL}/by-username/${username}`, {
//         method: "GET",
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Failed to fetch customer by username:", errorData);
//         throw new Error(`HTTP error: Status ${response.status}`);
//       }
//       return response.json();
//     } catch (err) {
//       console.error("Error fetching customer by username:", err);
//       throw err;
//     }
//   },
// };
