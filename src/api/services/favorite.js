import instance from '@/api/https.js'


const PORT = 8083;

export const getAllFavourites = () => instance.get(`:${PORT}/favorites`); // похоже это только для админа
