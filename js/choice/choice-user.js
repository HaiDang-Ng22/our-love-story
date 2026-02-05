// js/choice/choice-user.js

let hasChosen = false;

choiceAPI.onChoiceChanged(choice => {
    if (!choice) return;

    const container = document.getElementById('choice-box');
    container.innerHTML = `<h3>${choice.question}</h3>`;

    Object.keys(choice.options).forEach(key => {
        const text = choice.hidden ? 'XXXXXXXXXX' : choice.options[key];

        const btn = document.createElement('button');
        btn.innerText = `${key}. ${text}`;
        btn.disabled = !!choice.selectedByUser;

        btn.onclick = async () => {
            if (hasChosen || choice.selectedByUser) return;

            hasChosen = true;
            await choiceAPI.submitChoice(key);
            alert("🎉 Chúc mừng! Lựa chọn của em đã được gửi!");
        };

        container.appendChild(btn);
    });

    // Hiện đáp án đã chọn
    if (choice.selectedByUser) {
        const result = document.createElement('p');
        result.innerText = `💝 Em đã chọn: ${choice.options[choice.selectedByUser]}`;
        container.appendChild(result);
    }
});
