[https://school.programmers.co.kr/learn/courses/30/lessons/155652](https://school.programmers.co.kr/learn/courses/30/lessons/155652)

#### **문제 설명**

두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

- 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
- index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
- skip에 있는 알파벳은 제외하고 건너뜁니다.

예를 들어 s \= "aukks", skip \= "wbqd", index \= 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 \[b, c, d, e, f\]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 \[c, e, f, g, h\] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.

---

**제한사항**

- ≤ s의 길이 ≤ 50
- 1 ≤ skip의 길이 ≤ 10
- s와 skip은 알파벳 소문자로만 이루어져 있습니다.
  - skip에 포함되는 알파벳은 s에 포함되지 않습니다.
- 1 ≤ index ≤ 20

---

입출력 예

| sski    | p      | index | result  |
| ------- | ------ | ----- | ------- |
| "aukks" | "wbqd" | 5     | "happy" |

---

```
function solution(s, skip, index) {
    var answer = '';
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let splitS = s.split('')
  const splitSkip = skip.split('')
  const filteredAlphabet = alphabet.filter(a => !splitSkip.some(v => a.includes(v)))
  for (let i=0; i<splitS.length; i++){
    let changeI= filteredAlphabet.indexOf(splitS[i])+index
    if(changeI/filteredAlphabet.length>0){
      changeI =changeI - (filteredAlphabet.length*Math.floor(changeI/filteredAlphabet.length))
    }
    splitS[i] = filteredAlphabet[changeI]
  }

  answer = splitS.join('')
    return answer;
}
```

#### **배열에서 skip하는 alphabet을 삭제하기**

```
let splitS = s.split('')
const splitSkip = skip.split('')
const filteredAlphabet = alphabet.filter(a => !splitSkip.some(v => a.includes(v)))
```

skip 문자를 배열로 만들고 alphabet 배열에서 제거하는 과정입니다.

#### **index만큼 알파벳 증가하기**

- **나의 코드**

```
for (let i=0; i<splitS.length; i++){
    let changeI= filteredAlphabet.indexOf(splitS[i])+index
    if(changeI/filteredAlphabet.length>0){
      changeI =changeI - (filteredAlphabet.length*Math.floor(changeI/filteredAlphabet.length))
    }
    splitS[i] = filteredAlphabet[changeI]
  }
```

s의 알파벳을 증가시키는 코드입니다. 다른 분들의 풀이를 보니까 map을 사용하는 경우도 있더라고요. map 을 사용하면 한줄로 바뀌기 때문에 더 효과적이라고 생각됩니다.

처음에는 예외상황을 생각하지 않고 if 문을 filterdAlphabet.length보다 큰 것을 생각했습니다.

**옳지 못한 생각**

```
if(changeI>filteredAlphabet.length) //옳지 못한 생각
```

하지만 예외 상황이 발생하죠....

```
s = 'z'
skip = 'abcdefgjihjklmnopqrs'
index = 20
```

이런 식이 되면 changI의 값이 26 되고 filteredAlphabet.length 가 7이 됩니다.

26-7 은 19인데 이것 또한 필터된 알파벳 배열의 길이보다 길기 때문에 답이 나오지 않았습니다.

따라서, 나눗셈을 이용해서 그것의 몫과 length를 곱하여 빼게 되면 배열의 길이보다 항상 작은 값의 index를 갖게 되더라고요. (사실 %를 이용하여 나머지를 구해도 되더라고요..ㅎㅎ) 아무튼 그렇게 구한 index 값으로 필터된 배열의 값으로 변경해주면 정답입니다.

다른 분의 코드도 확인해 보면서 더 성장하는 개발자가 되어보야요.

- 다른 분의 코드

```
return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
```
