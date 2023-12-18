import instance from "@/api/https";

const PORT = 8081

// admin
export const getAnalyticsVacancy = () => instance.get(`:${PORT}/analytics/vacancy`);

//
export const getAnalyticsJobSeeker = () => instance.get(`:${PORT}/analytics/job_seeker`);

// admin - отклики на компанию (пока не будем реализовывать)
// export const getAnalyticsEmployer = () => instance.get(`:${PORT}/analytics/employer`);
