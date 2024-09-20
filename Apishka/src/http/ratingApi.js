import { $authHost } from './index';

// Функция для добавления или обновления рейтинга
export const addOrUpdateRating = async (ratingData) => {
    /**
     * ratingData:
     *  - hackathonId: ID хакатона (например, 1)
     *  - teamId: ID команды (например, 123)
     *  - placement: Место, которое заняла команда (например, 1 для первого места)
     */
    const { data } = await $authHost.post('api/rating/add-or-update', ratingData);
    return data;
};

// Функция для получения рейтингов по ID хакатона
export const fetchRatingsByHackathon = async (hackathonId) => {
    /**
     * hackathonId: ID хакатона для получения всех связанных с ним рейтингов (например, 1)
     */
    const { data } = await $authHost.get(`api/rating/${hackathonId}`);
    return data;
};
