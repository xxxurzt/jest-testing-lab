function fetchData(callback) {
    setTimeout(() => {
        callback("peanut butter");
    }, 100);
}

function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("peanut butter");
        }, 100);
    });
}

function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch data"));
        }, 100);
    });
}


module.exports = { fetchData, fetchDataPromise, fetchDataWithError };