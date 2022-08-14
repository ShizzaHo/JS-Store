/**
 * Шаблон для всех сторов
 */
export default class storeBased {
    store = {

    }

    /**
     * Устанавливает значение в стор с учетом уже существующих данных
     * @param  {Object} Данные для записи
     */
    setStore(object) {
        const newStore = this.getStore();
        Object.keys(object).map(item => {
            newStore[item] = object[item] 
        })
    }
    
    /**
     * Устанавливает значение в стор c перезаписью остальных данных
     * @param  {Object} object
     */
    setStoreHard(object) {
        this.store = object;
    }

    /**
     * Получить значение стора
     */
    getStore() {
        return this.store;
    }
}
