function customRequest(path, body = {}) {
    return fetch(path, { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data[data.length - 1]);
            // setIsLoading(false);
            // setUsers(data[data.length - 1])
            return data
        })
}

export {
    customRequest
}