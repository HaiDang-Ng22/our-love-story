// js/choice/choice-admin.js

async function createGiftChoice() {
    const data = {
        question: "Em muốn mua gì?",
        options: {
            a: "Mỹ phẩm",
            b: "Quần áo",
            c: "Trang sức"
        },
        hidden: true, // false = hiện đáp án
        selectedByUser: null,
        createdAt: Date.now()
    };

    await choiceAPI.createChoice(data);
    showNotification("Đã tạo lựa chọn cho em ❤️", "success");
}

// Realtime nhận kết quả
choiceAPI.onChoiceChanged(choice => {
    if (choice?.selectedByUser) {
        console.log("User đã chọn:", choice.selectedByUser);
        showNotification(
            `Cô ấy chọn: ${choice.options[choice.selectedByUser]} 💖`,
            "info"
        );
    }
});
