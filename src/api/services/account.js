import instance from "@/api/https";


const PORT = 8080;

export const checkAuthentication = (login, password) => instance.post(`:${PORT}/accounts/auth`, { login, password });

// export const loginUser = (login, password, role) => instance.post(`:${PORT}/accounts`, { login, password, role });
