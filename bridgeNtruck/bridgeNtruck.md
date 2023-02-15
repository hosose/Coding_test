\[[https://school.programmers.co.kr/learn/courses/30/lessons/42583\]](https://school.programmers.co.kr/learn/courses/30/lessons/42583%5D)

다리를 지나는 트럭... 자료구조 중 큐에 대한 문제입니다.

### **문제 설명**

트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 \[7, 4, 5, 6\]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

| 경과시간 | 다리를 지난 트럭 | 다리를 건너는 트럭 | 대기 트럭   |
| -------- | ---------------- | ------------------ | ----------- |
| 0        | \[\]             | \[\]               | \[7,4,5,6\] |
| 1~2      | \[\]             | \[7\]              | \[4,5,6\]   |
| 3        | \[7\]            | \[4\]              | \[5,6\]     |
| 4        | \[7\]            | \[4,5\]            | \[6\]       |
| 5        | \[7,4\]          | \[5\]              | \[6\]       |
| 6~7      | \[7,4,5\]        | \[6\]              | \[\]        |
| 8        | \[7,4,5,6\]      | \[\]               | \[\]        |

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건

- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.

#### **입출력 예**

| bridge_length | weight | truck_weights                     | return |
| ------------- | ------ | --------------------------------- | ------ |
| 2             | 10     | \[7,4,5,6\]                       | 8      |
| 100           | 100    | \[10\]                            | 101    |
| 100           | 100    | \[10,10,10,10,10,10,10,10,10,10\] | 110    |

## **문제풀이**

자료구조 중 큐에 관한 문제였습니다. 먼저 들어간 트럭을 밖으로 빼내고 다시 트럭이 다리를 지나는 그런 그림. 다리위에 자동차가 지나가는 생각을 하면 쉽다고 생각합니다.

새로운 배열을 만들어서 다리라고 생각하고, 배열 하나하나에 트럭이 올라가있다고 생각합니다.

```
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let bridge_sum = 0;
  answer++;
  bridge.shift();
  bridge_sum += truck_weights[0];
  bridge.unshift(truck_weights.shift());

  while (bridge_sum > 0) {
    answer++;
    bridge_sum -= bridge.pop();
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      bridge_sum += truck_weights[0];
      bridge.unshift(truck_weights.shift());
    } else {
      bridge.unshift(0);
    }
  }
  return answer;
}
```

**다리 배열 만들기**

```
let bridge = Array.from({ length: bridge_length }, () => 0);
let bridge_sum = 0;
```

length 가 다리 길이인 배열을 만드는데 0으로 채워넣은 다리를 만들고, 지금은 다리에 트럭이 올라가지 않았으니 0으로 해놓습니다.

**첫번째 트럭 넣기**

```
answer++;
bridge.shift();
bridge_sum += truck_weights[0];
bridge.unshift(truck_weights.shift());
```

1초를 추가하고, 다리의 첫번째 부분을 빼내고 트럭 한 대를 다리 위로 보냅니다. 다리위에 트럭이 올라가면 무게도 증가하니 무게도 증가 시킵니다. 그럼? 첫번째 예제로 예를 들면, \[7,0\]

**다리위에 무게가 초과되었는지? 아직 트럭이 남았는지?**

```
while (bridge_sum > 0) {
    answer++;
    bridge_sum -= bridge.pop();
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      bridge_sum += truck_weights[0];
      bridge.unshift(truck_weights.shift());
    } else {
      bridge.unshift(0);
    }
  }
```

이제, 다리위에 무게가 0이 될 때까지 반복하는 문장을 만들겠습니다.

1번 반복될 때 마다 1초씩 추가해야겠죠?

그 다음 다리의 총 무게에서 배열의 마지막에 있는 숫자를 빼서 다리무게에서 뺍니다.

1\. 그 뺀 무게에서 다음 트럭의 무게를 더하고 초과 무게보다 많이 나가는 지 확인

2\. 대기 트럭이 있는지 확인

위 조건이 모두 충족된다면 다리위의 무게를 트럭의 무게로 더하고 배열의 첫 번째에 트럭을 추가합니다.

조건이 충족되지 않으면 첫 번째에 0을 추가해서 트럭을 올리지 않습니다. 이렇게 반복하면 모든 트럭을 보내고 몇 초가 걸리는지도 알 수 있습니다.

### **결론**

처음에는 다리를 배열로 만드는 것을 생각하지 못하였지만, 동료가 push와 shift를 사용한다는 말에 아.... 다리를 배열로 만든 통으로 생각하여 1초마다 트럭을 배열에 맞게 이동시키는 구나를 생각했습니다. 만약에 다음에 이런 문제가 나오고 1초에 한 배열이 아닌 0.5초에 한 배열씩 움직이는 문제가 나왔을 때는 배열 수를 두배를 만들면 되겠다는 생각도 하게 되었습니다.
