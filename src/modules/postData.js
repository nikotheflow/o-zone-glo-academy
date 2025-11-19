const postData = async (goods) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(goods),
        headers: {
            "Content-type": "application-json; charset=UTF-8",
        },
    });
    return await response.json();
};

export default postData;