// 랜덤 숫자 생성
function getRandomInt() {
    const digits = new Set();
    while (digits.size < 3) {
        const digit = Math.floor(Math.random() * 10);
        digits.add(digit);
    }
    return Array.from(digits).join('');
}




// 볼과 스트라이크 계산
function getBallStrikeCount(userInput, randomNum) {
    let balls = 0;
    let strikes = 0;

    // 스트라이크 계산
    for (let i = 0; i < 3; i++) {
        if (userInput[i] === randomNum[i]) {
            strikes++;
        }
    }

    // 볼 계산
    for (let i = 0; i < 3; i++) {
        if (userInput[i] !== randomNum[i] && randomNum.includes(userInput[i])) {
            balls++;
        }
    }

    return { balls, strikes };
}

export { getRandomInt, getBallStrikeCount };

