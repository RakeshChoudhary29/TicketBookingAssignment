import axiosInstance from "./interceptor";

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
