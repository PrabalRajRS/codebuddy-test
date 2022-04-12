// level {1}

const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    return data;
}
getData()