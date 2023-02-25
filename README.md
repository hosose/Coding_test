**[https://school.programmers.co.kr/learn/courses/30/lessons/160586](https://school.programmers.co.kr/learn/courses/30/lessons/160586)**

## **문제 설명**

휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다. 키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.

예를 들어, 1번 키에 "A", "B", "C" 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 "A", 두 번 누르면 "B", 세 번 누르면 "C"가 되는 식입니다.

같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다. 이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다. 또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다. 심지어 아예 할당되지 않은 경우도 있습니다. 따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.

이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.

1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때, 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.

단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.

## **제한사항**

- 1 ≤ keymap의 길이 ≤ 100
  - 1 ≤ keymap의 원소의 길이 ≤ 100
  - keymap\[i\]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
    - 예를 들어 keymap\[0\] \= "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
  - keymap의 원소의 길이는 서로 다를 수 있습니다.
  - keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.
- 1 ≤ targets의 길이 ≤ 100
  - 1 ≤ targets의 원소의 길이 ≤ 100
  - targets의 원소는 알파벳 대문자로만 이루어져 있습니다.

## **입출력 예**

| keymap               | targets           | result   |
| -------------------- | ----------------- | -------- |
| \["ABACD", "BCEFD"\] | \["ABCD","AABB"\] | \[9, 4\] |
| \["AA"\]             | \["B"\]           | \[-1\]   |
| \["AGZ", "BSSS"\]    | \["ASA","BGZ"\]   | \[4, 6\] |

---

## **문제 풀이**

```
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
```

좀 무식하게 풀어냈습니다.... ㅠ

다른 분들의 풀이를 한번 보실까요....

## **다른 분의 풀이**

```
function solution(keymap, targets) {
    const answer = [];
    const map = {}
    //키보드의 버튼을 객체로 생성
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    //reduce 함수를 이용하여 객체의 value 값을 지속 더해서 정답에 push
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}
```

### **reduce 함수**

```
arr.reduce(callback[,initialValue])
```

callback function에 들어갈 요소

1.  **accumulator** \- accumulator는 callback함수의 반환값을 누적합니다.
2.  **currentValue** \- 배열의 현재 요소
3.  **index**(Optional) - 배열의 현재 요소의 인덱스
4.  **array**(Optional) - 호출한 배열

\*\*

위의 분의 풀이는 reduce 함수를 사용해서 객체의 value 값이 NaN이면 falsy 값으로 인지하기 때문에 -1 이 나옵니다.

---

## **출처**

[https://tocomo.tistory.com/26](https://tocomo.tistory.com/26)