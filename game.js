import {getRandomInt, getBallStrikeCount} from bsball.js

// 볼, 스트라이크 출력하기
function printResult(userInput, computerNumber){
    const {balls, strikes} = getBallStrikeCount(userInput, computerNumber);
    console.log(`${userInput} -> ${balls}B${strikes}S`);
}

// 게임 루프 및 종료 처리
function playGame () {
    const computerNumber = getRandomInt();
    let attempts = 0;
    let userInput = '';

    console.log(`Computer generated number: ${computerNumber}`); // Debugging line
    
    while ( userInput !== computerNumber) {
        userInput = prompt('세 자리 숫자를 입력하세요:');
        
        if (userInput === null) {
            console.log('게임이 취소되었습니다.');
            return;
        }
                
        if ( userInput.length !== 3 || !/^\d+$/.test(userInput)) {
            console.log('유효한 세 자리 숫자를 입력하세요.');
            continue;
        }

        attempts++;
        printResult(userInput, computerNumber);

        if (userInput === computerNumber) {
            console.log( `${attempts}번만에 맞히셨습니다. 게임을 종료합니다.`);
            break;
        }
    }
}

window.onload = playGame;