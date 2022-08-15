import Global from './global'

// Если нужено несколько сторов
const storeList = {
    global: new Global(),
}

// Если нужен только единичный стор
// let store = new Global();

export default storeList;
