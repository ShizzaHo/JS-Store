import Store from './store';

Store.global.setStore(
    {
        message: "Привет JS Store!",
        author: "ShizzaHo",
        repo: "https://github.com/ShizzaHo/JS-Store",
    }
)

console.log(Store.global.getStore());

const store = Store.global.getStore();
document.body.innerHTML = "<h1>"+store.message+"</h1> <p>Автор проекта: "+store.author+"</p> <a href='#' onclick='location.href = `"+store.repo+"`'>Репозиторий проекта</a>";