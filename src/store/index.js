import Global from './global'

const stores = {
    Global: Global,
}

let store = new Global();

/**
 * Заменяет выбранный стор
 * @param {string} Название стора
 */
export function changeStore(name) {
    store = stores[name];
}

export default store;
