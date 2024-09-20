import { $authHost } from './index';

// Функция для создания хакатона
export const createHackathon = async (hackathonData) => {
    /**
     * hackathonData:
     *  - name: Название хакатона (например, "AI Hackathon")
     *  - description: Описание хакатона (например, "Хакатон по искусственному интеллекту")
     *  - startDate: Дата начала хакатона (например, "2024-12-01")
     *  - endDate: Дата окончания хакатона (например, "2024-12-03")
     *  - scoring: Объект с баллами за каждое место (например, {1: 100, 2: 50, 3: 25})
     * 
     * Пример:
     * const hackathonData = {
     *   name: "AI Hackathon",
     *   description: "Хакатон по искусственному интеллекту",
     *   startDate: "2024-12-01",
     *   endDate: "2024-12-03",
     *   scoring: {
     *     1: 100,  // 1-е место: 100 баллов
     *     2: 50,   // 2-е место: 50 баллов
     *     3: 25    // 3-е место: 25 баллов
     *   }
     * };
     */
    const { data } = await $authHost.post('api/hackathon/create', hackathonData);
    return data;
};

// Функция для добавления команды в хакатон
export const addTeamToHackathon = async (hackathonId, teamId) => {
    /**
     * hackathonId: ID хакатона, в который добавляется команда (например, 1)
     * teamId: ID команды, которую нужно добавить (например, 123)
     * 
     * Пример:
     * const hackathonId = 1;
     * const teamId = 123;
     */
    const { data } = await $authHost.post('api/hackathon/add-team', { hackathonId, teamId });
    return data;
};

// Функция для удаления команды из хакатона
export const removeTeamFromHackathon = async (hackathonId, teamId) => {
    /**
     * hackathonId: ID хакатона, из которого удаляется команда (например, 1)
     * teamId: ID команды, которую нужно удалить (например, 123)
     * 
     * Пример:
     * const hackathonId = 1;
     * const teamId = 123;
     */
    const { data } = await $authHost.post('api/hackathon/remove-team', { hackathonId, teamId });
    return data;
};

// Функция для обновления хакатона
export const updateHackathon = async (hackathonId, updatedData) => {
    /**
     * hackathonId: ID хакатона, который нужно обновить (например, 1)
     * updatedData: Данные для обновления хакатона (объект с полями, которые нужно изменить)
     *  - name: (опционально) Новое название хакатона
     *  - description: (опционально) Новое описание хакатона
     *  - startDate: (опционально) Новая дата начала хакатона
     *  - endDate: (опционально) Новая дата окончания хакатона
     *  - scoring: (опционально) Обновленные баллы за места
     * 
     * Пример:
     * const updatedData = {
     *   name: "Updated AI Hackathon",
     *   description: "Обновленное описание хакатона",
     *   startDate: "2024-12-05",
     *   endDate: "2024-12-07",
     *   scoring: { 1: 120, 2: 60, 3: 30 }
     * };
     */
    const { data } = await $authHost.put(`api/hackathon/${hackathonId}`, updatedData);
    return data;
};

// Функция для получения всех хакатонов
export const fetchAllHackathons = async () => {
    /**
     * Возвращает список всех хакатонов.
     */
    const { data } = await $authHost.get('api/hackathon');
    return data;
};

// Функция для получения хакатона по ID
export const fetchHackathonById = async (hackathonId) => {
    /**
     * hackathonId: ID хакатона, который нужно получить (например, 1)
     * 
     * Пример:
     * const hackathonId = 1;
     */
    const { data } = await $authHost.get(`api/hackathon/${hackathonId}`);
    return data;
};
