// ------------------------------------------------
// Chaining Promises
// ------------------------------------------------

const usersIds = [11, 22, 33, 44, 55];
const users = [
    {
        id: 11,
        name: "User1"
    },
    {
        id: 22,
        name: "User2"
    },
    {
        id: 33,
        name: "User3"
    },
    {
        id: 44,
        name: "User4"
    },
    {
        id: 55,
        name: "User5"
    },
]

// Promise 1 = object
const getAllUserIds = new Promise((resolve, reject) => {
    console.log(usersIds);
    resolve(usersIds);
})

// Function which returns a promise 
const getUserDetails = (ids) => {
    console.log(ids);
    let result = [];

    for (const id of ids) {
        result.push(getUserDetail(id));
    }

    return Promise.all(result);
}

const getUserDetail = (id) => new Promise((resolve, reject) => {
    let findedUser = users.find(item => item.id === id);
    if (findedUser) resolve(findedUser);
    else reject("No user");
})

// Promise 3 = function (have an input parameter)
const logResponse = (data) => new Promise((resolve, reject) => {
    console.log(data);
    resolve(data);
})

// Promise 4 = function (have an input parameter)
const enhanceData = (data) => new Promise((resolve, reject) => {
    for (const item of data) {
        item["labels"] = ["marked"];
    }

    console.log(data);
    resolve(data);
})

// ----------
// CHAIN
// ----------
getAllUserIds
    .then(getUserDetails)
    .then(logResponse)
    .then(enhanceData)
    .then((data) => {
        console.log('Manual log of data: ', data);
    })
    .catch(err => console.error(err));