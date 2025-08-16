import fetchData from "./module.js";

const url="https://jsonplaceholder.typicode.com/users"
async function main() {
    const data = await fetchData(url);
    console.log(data);
}

main();