function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`Số ${num} là số chẵn!`);
        } else {
            reject(`Lỗi: Số ${num} là số lẻ!`);
        }
    });
}
let inputNumber = 5; 

checkNumber(inputNumber)
    .then((message) => {
        console.log("✅ Thành công:", message);
    })
    .catch((error) => {
        console.error("❌ Lỗi:", error);
    })
    .finally(() => {
        console.log("👉 Đã kiểm tra xong.");
    });