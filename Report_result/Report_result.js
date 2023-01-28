function solution(id_list, report, k) {
  let answer = [];
  let id_listObj = {};
  let reportObj = {};
  let reportedCount = {};
  report.forEach((v) => {
    let reporter = v.split(' ')[0];
    let suspect = v.split(' ')[1];
    if (reportObj[suspect]) {
      if (!reportObj[suspect].includes(reporter)) {
        reportObj[suspect].push(reporter);
      }
    } else {
      reportObj[suspect] = [reporter];
    }
  });
  for (let i in reportObj) {
    reportedCount[i] = reportObj[i].length;
  }

  for (let i in reportedCount) {
    if (reportedCount[i] >= k) {
      for (let j of reportObj[i]) {
        id_listObj[j] ? id_listObj[j]++ : (id_listObj[j] = 1);
      }
    }
  }
  for (let i = 0; i < id_list.length; i++) {
    if (!id_listObj[id_list[i]]) {
      answer.push(0);
    } else {
      answer.push(id_listObj[id_list[i]]);
    }
  }
  return answer;
}

// 다른 풀이
function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
