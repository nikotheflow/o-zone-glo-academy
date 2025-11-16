const getData = async () => {
    const response = await fetch("https://test-a8209-default-rtdb.europe-west1.firebasedatabase.app/goods.json");
    return await response.json();
};

export default getData;