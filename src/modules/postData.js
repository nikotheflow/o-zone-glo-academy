const postData = async () => {
    const response = await fetch("http://localhost:3000/goods", {
        method: "POST",
        body: JSON.stringify({
            category: "Игры и софт",
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            price: 3000,
            sale: true,
            title: "Игра Ведьмак 3",
        }),
        headers: {
            "Content-type": "application-json; charset=UTF-8",
        },
    });
    return await response.json();
};

export default postData;