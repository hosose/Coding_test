/*
function solution(today, terms, privacies) {
  let answer = [];
  let objectTerms = {}
for (let i of terms){
if(i[3]===undefined) objectTerms[i[0]] = Number(i[2])
else objectTerms[i[0]] = Number(i[2]+ i[3])
}
const Today = new Date(today)
const KoreaTime = new Date(Today.setHours(Today.getHours()+9))
for (let i =0 ; i<privacies.length; i++){
  let collectPeriod = new Date(privacies[i].slice(0,-2))
  let expiredPeriod = collectPeriod.setMonth(collectPeriod.getMonth()+ objectTerms[privacies[i][11]])
  let koreaExpiredPeriod = new Date(expiredPeriod - (15*60*60*1000))
  
  if(koreaExpiredPeriod.getDate()>28){
    koreaExpiredPeriod.setDate(28)
  }
  console.log(koreaExpiredPeriod)
  if(koreaExpiredPeriod<KoreaTime){
   answer.push(i+1) 
  }
}
  return answer;
}
*/

function solution(today, terms, privacies) {
  let answer = [];
  let Today = today.split('.').map((v) => Number(v));
  let Terms = {};
  terms.forEach((v) => {
    let [kind, period] = v.split(' ');
    Terms[kind] = Number(period);
  });
  privacies.forEach((v, i) => {
    let [collectDate, termskind] = v.split(' ');
    let [y, m, d] = collectDate.split('.').map((v) => Number(v));

    m += Terms[termskind];
    d--;
    if (m > 12) {
      if (m % 12 === 0) {
        y += parseInt(m / 12) - 1;
        m = 12;
      } else {
        y += parseInt(m / 12);
        m = m % 12;
      }
    }

    if (y < Today[0]) {
      answer.push(i + 1);
    } else if (y === Today[0]) {
      if (m < Today[1]) {
        answer.push(i + 1);
      } else if (m === Today[1]) {
        if (d < Today[2]) {
          answer.push(i + 1);
        }
      }
    }
  });
  return answer;
}
