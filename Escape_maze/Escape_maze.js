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
/*
function solution(maps) {

  let start = [];
  let lever = [];
  let exit = [];

  const map = maps.map((row) => row.split(''));
  const rowLength = map.length;
  const columnLength = map[0].length;
  map.forEach((row, x) => {
    row.forEach((col, y) => {
      if (col === 'S') start = [x, y];
      else if (col === 'L') lever = [x, y];
      else if (col == 'E') exit = [x, y];
    });
  });
  const findMinDist = ([x1, y1], [x2, y2]) => {
    const visitedArr = new Array(rowLength)
      .fill(null)
      .map(() => new Array(columnLength).fill(false));
    const countArr = new Array(rowLength)
      .fill(null)
      .map(() => new Array(columnLength).fill(Infinity));

    countArr[x1][y1] = 0;
    const queue = [[x1, y1]];

    while (queue.length) {
      const [qx, qy] = queue.shift();
      if (visitedArr[qx][qy]) continue;
      visitedArr[qx][qy] = true;
      const nextWays = [
        [qx - 1, qy],
        [qx + 1, qy],
        [qx, qy - 1],
        [qx, qy + 1],
      ];
      for (let [nx, ny] of nextWays) {
        if (
          nx < 0 ||
          nx >= rowLength ||
          ny < 0 ||
          ny >= columnLength ||
          map[nx][ny] === 'X'
        )
          continue;
        countArr[nx][ny] = Math.min(countArr[nx][ny], countArr[qx][qy] + 1);
        if (visitedArr[nx][ny]) continue;
        queue.push([nx, ny, countArr[nx][ny]]);
      }
    }
    return countArr[x2][y2] === Infinity ? -1 : countArr[x2][y2];
  };
  const first = findMinDist(start, lever);
  if (first === -1) return -1;
  const second = findMinDist(lever, exit);
  if (second === -1) return -1;

  return first + second;
}
*/
