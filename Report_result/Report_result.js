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
