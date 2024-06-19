function getRandomInt(min, max) {
    let randomNum;
    let bool = false;

    while(!bool){
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //랜덤숫자생성
        let num = String(randomNum).split('').map(Number) //랜덤숫자를 배열로 변환
    
        if(num[0] !== num[1] && num[0] !== num[2] && num[1] !== num[2]){
            bool=true;
        } //각 자릿수가 서로 다른지 확인
    }

    return randomNum
}
    //100 이상 999 이하의 각 자릿수가 서로 다른 세 자리 수 생성
    let randomNum = getRandomInt(100, 999);
    console.log(randomNum);

export { getRandomInt, getBallStrikeCount };

