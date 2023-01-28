<p data-ke-size="size16">22년 카카오톡 신입사원 입사 문제라고 합니다.</p>
<p data-ke-size="size16">문제 드립니다.</p>
<h3 data-ke-size="size23"><b>문제 설명</b></h3>
<p data-ke-size="size16">신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.</li>
<li>한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.</li>
</ul>
</li>
<li>k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.</li>
</ul>
</li>
</ul>
<p data-ke-size="size16">다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.</p>
<p data-ke-size="size16">유저 ID유저가 신고한 ID설명</p>
<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-align="alignLeft">
<tbody>
<tr>
<td>"muzi"</td>
<td>"frodo"</td>
<td>"muzi"가 "frodo"를 신고했습니다.</td>
</tr>
<tr>
<td>"apeach"</td>
<td>"frodo"</td>
<td>"apeach"가 "frodo"를 신고했습니다.</td>
</tr>
<tr>
<td>"frodo"</td>
<td>"neo"</td>
<td>"frodo"가 "neo"를 신고했습니다.</td>
</tr>
<tr>
<td>"muzi"</td>
<td>"neo"</td>
<td>"muzi"가 "neo"를 신고했습니다.</td>
</tr>
<tr>
<td>"apeach"</td>
<td>"muzi"</td>
<td>"apeach"가 "muzi"를 신고했습니다.</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16">각 유저별로 신고당한 횟수는 다음과 같습니다.</p>
<p data-ke-size="size16">유저 ID신고당한 횟수</p>
<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-align="alignLeft">
<tbody>
<tr>
<td>"muzi"</td>
<td>1</td>
</tr>
<tr>
<td>"frodo"</td>
<td>2</td>
</tr>
<tr>
<td>"apeach"</td>
<td>0</td>
</tr>
<tr>
<td>"neo"</td>
<td>2</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16">위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.</p>
<p data-ke-size="size16">유저 ID유저가 신고한 ID정지된 ID</p>
<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-align="alignLeft">
<tbody>
<tr>
<td>"muzi"</td>
<td>["frodo", "neo"]</td>
<td>["frodo", "neo"]</td>
</tr>
<tr>
<td>"frodo"</td>
<td>["neo"]</td>
<td>["neo"]</td>
</tr>
<tr>
<td>"apeach"</td>
<td>["muzi", "frodo"]</td>
<td>["frodo"]</td>
</tr>
<tr>
<td>"neo"</td>
<td>없음</td>
<td>없음</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16">따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.</p>
<p data-ke-size="size16">이용자의 ID가 담긴 문자열 배열<span>&nbsp;</span>id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열<span>&nbsp;</span>report, 정지 기준이 되는 신고 횟수<span>&nbsp;</span>k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.</p>
<hr data-ke-style="style1" />
<h3 data-ke-size="size23"><b>제한사항</b></h3>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>2 &le;<span>&nbsp;</span>id_list의 길이 &le; 1,000
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>1 &le;<span>&nbsp;</span>id_list의 원소 길이 &le; 10</li>
<li>id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.</li>
<li>id_list에는 같은 아이디가 중복해서 들어있지 않습니다.</li>
</ul>
</li>
<li>1 &le;<span>&nbsp;</span>report의 길이 &le; 200,000
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>3 &le;<span>&nbsp;</span>report의 원소 길이 &le; 21</li>
<li>report의 원소는 "이용자id 신고한id"형태의 문자열입니다.</li>
<li>예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.</li>
<li>id는 알파벳 소문자로만 이루어져 있습니다.</li>
<li>이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.</li>
<li>자기 자신을 신고하는 경우는 없습니다.</li>
</ul>
</li>
<li>1 &le;<span>&nbsp;</span>k<span>&nbsp;</span>&le; 200,<span>&nbsp;</span>k는 자연수입니다.</li>
<li>return 하는 배열은<span>&nbsp;</span>id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.</li>
</ul>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h2 data-ke-size="size26"><b>문제풀이</b></h2>
<h4 data-ke-size="size20"><b>저의 문제풀이(역시 기네요!)</b></h4>
<pre id="code_1674889191712" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>function solution(id_list, report, k) {
  let answer = [];
  let id_listObj = {};
  let reportObj = {};
  let reportedCount = {};
  report.forEach((v) =&gt; {
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
if (reportedCount[i] &gt;= k) {
for (let j of reportObj[i]) {
id_listObj[j] ? id_listObj[j]++ : (id_listObj[j] = 1);
}
}
}
for (let i = 0; i &lt; id_list.length; i++) {
if (!id_listObj[id_list[i]]) {
answer.push(0);
} else {
answer.push(id_listObj[id_list[i]]);
}
}
return answer;
}</code></pre>

<p data-ke-size="size16">저의 풀이를 확인해 볼게요.</p>
<p data-ke-size="size16">인자로 받는 id_list, report, k 중에 id_list, report를 객체로 변환해서 문제를 풀었습니다.<b></b><b></b></p>
<pre id="code_1674889576997" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>let reporter = v.split(' ')[0];
let suspect = v.split(' ')[1];
if (reportObj[suspect]) {
  if (!reportObj[suspect].includes(reporter)) {
    reportObj[suspect].push(reporter);
  }
} else {
  reportObj[suspect] = [reporter];
}
/*
{
  frodo: [ 'muzi', 'apeach' ],
  neo: [ 'frodo', 'muzi' ],
  muzi: [ 'apeach' ]
}
*/</code></pre>
<p data-ke-size="size16">처음으로 신고 배열에서 각각의 값을 신고자와 피의자로 split으로 나눴고</p>
<p data-ke-size="size16">신고자 객체에 피의자가 있으면서 동시에 동일한 사람이 신고를 하지 않으면 객체에 추가를 하는 if 문과 신고 객체에 용의자가 아예 없으면 배열로서 신고자를 추가 else문을 사용한 방식입니다.</p>
<p data-ke-size="size16">이런식으로 객체가 만들어집니다.</p>
<p data-ke-size="size16">객체를 만든 다음 몇번 신고가 되었는지를 counting 하는 객체를 for문으로 생성</p>
<pre id="code_1674891963207" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>for (let i in reportObj){
    reportedCount[i]=reportObj[i].length
  }  
  // { frodo: 2, neo: 2, muzi: 1 }</code></pre>
<p data-ke-size="size16">신고 숫자가 일정 신고 숫자를 넘으면 이용정지했다고 신고자에게 메일 발송. 신고자에게 몇개의 정지 메일이 갔는지 counting</p>
<pre id="code_1674892176268" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>for (let i in reportedCount){
      if(reportedCount[i]&gt;=k){
        for (let j of reportObj[i]){
          id_listObj[j] ? id_listObj[j]++ : id_listObj[j] =1
        }
      }
    }
    for (let i=0 ; i&lt;id_list.length ; i++){
      
      if (!id_listObj[id_list[i]]){
        answer.push(0)
      }else{
       answer.push(id_listObj[id_list[i]]) 
      }
    }</code></pre>
<p data-ke-size="size16">제가 고민했기 때문에 다 이해가 되지만 다른사람이 한눈에 알아볼 수 있을지 확신이 들지 않습니다. 그래서 다른분의 풀이를 벤치마킹하기 위해서 들고 왔습니다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<h4 data-ke-size="size20">&nbsp;</h4>
<h4 data-ke-size="size20"><b>다른 분의 풀이(깔끔해서 가져왔고 새로운 내용이 많아서 분석해보려고요)</b></h4>
<pre id="code_1674889293065" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map(a=&gt;{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])&gt;=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=&gt;good.get(a)||0)
  return answer;
}</code></pre>
<p data-ke-size="size16">첫 줄부터 모르는 것이 나왔군요! 하지만 어디서 많이 보긴했습니다. Set을 사용하여 중복값을 제거해 준 다음 새로운 배열로 만들었습니다. 벌써 같은 신고자가 같은 피의자를 신고한 것을 다 걸렀네요 고작 한문장으로 ㅠ 다음에 중복값 제거하는 것이 있으면 이것을 사용하겠습니다.</p>
<p data-ke-size="size16">새로운 배열을 만들고 map함수로 피의자와 신고자를 나누었네요.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">두 번째 새로운 지식은 new Map( ) 입니다.</p>
<p data-ke-size="size16">객체와 유사한 것이지만 다양한 방법으로 객체를 생성할 수 있습니다.</p>
<p data-ke-size="size16"><a href="https://ko.javascript.info/map-set">https://ko.javascript.info/map-set</a></p>
<p data-ke-size="size16">이 분이 아주 깔끔하게 포스팅해주셨습니다. 나중에 공부해서 저도 올려보도록 할게요.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">⭐️⭐️⭐️</p>
<pre id="code_1674896428281" class="angelscript" data-ke-language="javascript" data-ke-type="codeblock"><code>for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }</code></pre>
<p data-ke-size="size16">다시 풀이로 들어가보면 나누어준 report를 for of 문을 이용하여 객체의 key값에 피의자를 넣고 뒤에는 신고당한 횟수를 나오게 만들었네요. 그런데 뭔가 if 문이 들어가지 않았는데도 get 해서 값이 없으면 default로 1이 되라고 하네요??????????? 이런 귀중한건 별표를 해야겠죠?</p>
<pre id="code_1674896445629" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>for(const report of reports){
      if(counts.get(report[1])&gt;=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }</code></pre>
<p data-ke-size="size16">다음 문장도 위의 것과 비슷한 원리네요. k번 이상 신고 당하면 신고자에게 피의자들이 정지당했다고 메일이 가는 것을 counting</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그 다음에는 id_list를 map함수를 사용해서 정답 배열을 생성하는 방식입니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">정말 깔끔하네요. 다음부터는 꼭 배열의 중복이나 객체를 비교할 일이 생기면 Set 과 Map을 이용해서 도전해봐야겠습니다.</p>
<p data-ke-size="size16">&nbsp;</p>
