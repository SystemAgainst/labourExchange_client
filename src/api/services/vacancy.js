import instance from "@/api/https";


const PORT = 8086;

export const getVacancies = () => instance.get(`:${PORT}/vacancies`);

export const getVacancyById = (vacancyId) => instance.get(`:${PORT}/vacancies/${vacancyId}`);
