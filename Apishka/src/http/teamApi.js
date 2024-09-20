import { $authHost } from './index';

// Функция для создания команды
export const createTeam = async (teamData) => {
    /**
     * teamData:
     *  - name: Название команды (например, "AI Warriors")
     *  - description: Описание команды (например, "Команда экспертов по ИИ")
     *  - hackathonId: ID хакатона, к которому относится команда (например, 1)
     * 
     * Пример:
     * const teamData = {
     *   name: "AI Warriors",
     *   description: "Команда экспертов по ИИ",
     *   hackathonId: 1
     * };
     */
    const { data } = await $authHost.post('api/team/create', teamData);
    return data;
};

// Функция для добавления участника в команду
export const addMemberToTeam = async (teamId, userId) => {
    /**
     * teamId: ID команды, в которую добавляется участник (например, 123)
     * userId: ID пользователя, которого нужно добавить в команду (например, 456)
     * 
     * Пример:
     * const teamId = 123;
     * const userId = 456;
     */
    const { data } = await $authHost.post('api/team/add-member', { teamId, userId });
    return data;
};

// Функция для удаления участника из команды
export const removeMemberFromTeam = async (teamId, userId) => {
    /**
     * teamId: ID команды, из которой удаляется участник (например, 123)
     * userId: ID пользователя, которого нужно удалить из команды (например, 456)
     * 
     * Пример:
     * const teamId = 123;
     * const userId = 456;
     */
    const { data } = await $authHost.post('api/team/remove-member', { teamId, userId });
    return data;
};

// Функция для обновления информации о команде
export const updateTeam = async (teamId, updatedData) => {
    /**
     * teamId: ID команды, которую нужно обновить (например, 123)
     * updatedData: Объект с новыми данными для обновления
     *  - name: (опционально) Новое название команды
     *  - description: (опционально) Новое описание команды
     * 
     * Пример:
     * const updatedData = {
     *   name: "Updated AI Warriors",
     *   description: "Обновленное описание команды"
     * };
     */
    const { data } = await $authHost.put(`api/team/${teamId}`, updatedData);
    return data;
};

// Функция для получения всех команд
export const fetchAllTeams = async () => {
    /**
     * Возвращает список всех команд.
     */
    const { data } = await $authHost.get('api/team');
    return data;
};

// Функция для получения команды по ID
export const fetchTeamById = async (teamId) => {
    /**
     * teamId: ID команды, которую нужно получить (например, 123)
     * 
     * Пример:
     * const teamId = 123;
     */
    const { data } = await $authHost.get(`api/team/${teamId}`);
    return data;
};
