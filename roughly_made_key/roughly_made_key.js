function solution(keymap, targets) {
  var answer = [];
  for (let i = 0; i < targets.length; i++) {
    //총 index 값 설정
    let addedIdx = 0;
    for (let j = 0; j < targets[i].length; j++) {
      //index 값 비교를 위한 배열 생성
      let minArr = [];
      for (let k = 0; k < keymap.length; k++) {
        //키보드에 값이 없으면 등록 안하는 조건
        if (keymap[k].indexOf(targets[i][j]) === -1) continue;
        minArr.push(keymap[k].indexOf(targets[i][j]));
      }
      //최솟값을 찾아서 +1 된 값 최종값에 더하기
      addedIdx += Math.min(...minArr) + 1;
    }
    //minArr의 값이 없으면 무한대로 표현 되니 -1값 넣어주기
    if (addedIdx === Infinity) answer.push(-1);
    else answer.push(addedIdx);
  }
  return answer;
}
