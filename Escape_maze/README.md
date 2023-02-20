[https://school.programmers.co.kr/learn/courses/30/lessons/159993](https://school.programmers.co.kr/learn/courses/30/lessons/159993)

[프로그래머스

코드 중심의 개발자 채용. 스택 기반의 포지션 매칭. 프로그래머스의 개발자 맞춤형 프로필을 등록하고, 나와 기술 궁합이 잘 맞는 기업들을 매칭 받으세요.

programmers.co.kr](https://school.programmers.co.kr/learn/courses/30/lessons/159993)

## **문제 설명**

1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.

미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 만약, 탈출할 수 없다면 -1을 return 해주세요.

## **제한사항**

- 5 ≤ maps의 길이 ≤ 100
  - 5 ≤ maps\[i\]의 길이 ≤ 100
  - maps\[i\]는 다음 5개의 문자들로만 이루어져 있습니다.
    - S : 시작 지점
    - E : 출구
    - L : 레버
    - O : 통로
    - X : 벽
  - 시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재합니다.
  - 출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있습니다.

## **입출력 예**

| maps                                        | result |
| ------------------------------------------- | ------ |
| \["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"\] | 16     |
| \["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"\] | \-1    |

## **문제풀이**

**[https://pabeba.tistory.com/m/91](https://pabeba.tistory.com/m/91)**

[알고리즘 - Dijksrta (다익스트라) (feat. Javascript)

다익스트라 알고리즘 이란? 음의 가중치가 없는 그래프의 한 정점(頂點, Vertex)에서 모든 정점까지의 최단거리를 각각 구하는 알고리즘(최단 경로 문제, Shortest Path Problem)입니다. 에츠허르 다익스

pabeba.tistory.com](https://pabeba.tistory.com/m/91)

다익스트라 알고리즘에 대해 알아야 문제를 풀 수 있더라고요.... 저는 처음에 풀지 못하여 질문방에서 배움을 얻었어요.

#### **문제 풀이를 크게 본다면**

1.  시작부터 레버까지 움직인 거리 구하기
2.  레버부터 종료까지 움직인 거리 구하기
3.  1,2 값 더하기 혹은 갈 수 없다면 -1 값 내보내기

```
function solution(maps) {
  //시작, 레버, 출구의 x,y 좌표를 설정할 예정
  var answer = 0;
  let start = [];
  let lever = [];
  let exit = [];
  // 지도 분리
  const map = maps.map((row) => row.split(''));
  //시작, 레버, 출구의 x,y 좌표를 설정
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'S') start = [i, j];
      if (map[i][j] === 'L') lever = [i, j];
      if (map[i][j] === 'E') exit = [i, j];
    }
  }
  //가로 세로 길이 저장
  const rowLength = map.length;
  const columnLength = map[0].length;
  //최단 거리 구하는 함수 작성
  function findMinDist([x1, y1], [x2, y2]) {
    //방문 배열과 거리가 작성되는 배열 생성
    let visitedArr = [];
    let countArr = [];
    for (let i = 0; i < map.length; i++) {
      const visited = new Array(map[i].length).fill(false);
      const count = new Array(map[i].length).fill(Infinity);
      visitedArr.push(visited);
      countArr.push(count);
    }
    //시작점은 0부터 시작
    countArr[x1][y1] = 0;
    const queue = [[x1, y1]];

    while (queue.length) {
      const [qx, qy] = queue.shift();
      //방문했다면 다음 queue부르기
      if (visitedArr[qx][qy]) continue;
      visitedArr[qx][qy] = true;
      //갈 수 있는 방향 4곳 정해주기
      const nextWays = [
        [qx - 1, qy],
        [qx + 1, qy],
        [qx, qy - 1],
        [qx, qy + 1],
      ];
      for (let [nx, ny] of nextWays) {
        //갈 수 없는 곳 조건 설정
        if (
          nx < 0 ||
          ny < 0 ||
          nx >= rowLength ||
          ny >= columnLength ||
          map[nx][ny] === 'X'
        )
          continue;
          //그 곳에 갈 수 있는 방법 중 가장 작은 수와 비교
        countArr[nx][ny] = Math.min(countArr[nx][ny], countArr[qx][qy] + 1);
        if (visitedArr[nx][ny]) continue;
        queue.push([nx, ny]);
      }
    }
    //현재 값이 무한대라면 -1로 결과 값 도출 아니면 그 값 보내기
    return countArr[x2][y2] === Infinity ? -1 : countArr[x2][y2];
  }
  const first = findMinDist(start, lever);
  if (first === -1) return -1;
  const second = findMinDist(lever, exit);
  if (second === -1) return -1;
  answer = first + second;

  return answer;
}
```

## **소감**

조건을 만들 때 열과 행에서 헷갈려서 버벅거렸지만... 다시 정신차리고 잘 만들긴 했습니다. 물론 제가 혼자 생각해낸 코드는 아니지만 이걸 직접 수기로 작성해보면서 풀어보았고, 이해를 했습니다. 다른 문제가 생기면 잘 할 수 있을지 모르겠지만, 시간이 걸리더라도 꺾이지 않는 마음으로 풀어보겠습니다.
