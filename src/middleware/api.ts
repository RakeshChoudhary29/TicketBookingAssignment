import axiosInstance from "./interceptor";

// login api's

export const loginUserApi = (data: any) => {
  return axiosInstance.post("/login", data);
};

export const registerUserApi = (data: any) => {
  return axiosInstance.post("/register", data);
};

// booking api's

export const getTicketDataApi = () => {
  return axiosInstance.get("/get-ticket-data");
};

export const bookTicketsApi = (ticketCount: number, userId: string = "") => {
  return axiosInstance.post("/book-tickets", { ticketCount });
};

export const resetTicketsApi = (userId: string = "") => {
  return axiosInstance.post("/reset-tickets");
};
