<p data-ke-size="size16"><a href="https://school.programmers.co.kr/learn/courses/30/lessons/150370" target="_blank" rel="noopener">https://school.programmers.co.kr/learn/courses/30/lessons/150370</a></p>
<figure id="og_1674566370971" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="프로그래머스" data-og-description="코드 중심의 개발자 채용. 스택 기반의 포지션 매칭. 프로그래머스의 개발자 맞춤형 프로필을 등록하고, 나와 기술 궁합이 잘 맞는 기업들을 매칭 받으세요." data-og-host="programmers.co.kr" data-og-source-url="https://school.programmers.co.kr/learn/courses/30/lessons/150370" data-og-url="https://programmers.co.kr/" data-og-image="https://scrap.kakaocdn.net/dn/z2k2K/hyRmZ3f7Cw/JDjMcHFrkqdE1ueJFiUl41/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630,https://scrap.kakaocdn.net/dn/4bEPo/hyRoMOKAKO/E48LCFAGcumcIsmTEFZ3WK/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630"><a href="https://school.programmers.co.kr/learn/courses/30/lessons/150370" target="_blank" rel="noopener" data-source-url="https://school.programmers.co.kr/learn/courses/30/lessons/150370">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/z2k2K/hyRmZ3f7Cw/JDjMcHFrkqdE1ueJFiUl41/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630,https://scrap.kakaocdn.net/dn/4bEPo/hyRoMOKAKO/E48LCFAGcumcIsmTEFZ3WK/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">프로그래머스</p>
<p class="og-desc" data-ke-size="size16">코드 중심의 개발자 채용. 스택 기반의 포지션 매칭. 프로그래머스의 개발자 맞춤형 프로필을 등록하고, 나와 기술 궁합이 잘 맞는 기업들을 매칭 받으세요.</p>
<p class="og-host" data-ke-size="size16">programmers.co.kr</p>
</div>
</a></figure>
<p data-ke-size="size16">카카오톡 채용 코딩테스트를 풀어보았습니다.</p>
<p data-ke-size="size16">문제나 조건들은 문제에 잘 나와있으니 굳이 블로그에 옮기지 않으면 안친절해 보이니 옮기겠습니다.</p>
<p data-ke-size="size18"><a href="https://pabeba.tistory.com/80#:~:text=%EC%A1%B4%EC%9E%AC%ED%95%98%EB%8A%94%20%EC%9E%85%EB%A0%A5%EB%A7%8C%20%EC%A3%BC%EC%96%B4%EC%A7%91%EB%8B%88%EB%8B%A4.-,%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4,-%EC%B2%98%EC%9D%8C%EC%97%90%EB%8A%94%20new%20Date" rel="noopener"><b>문제풀이 바로가기</b></a></p>
<h2 data-ke-size="size26"><b>문제</b></h2>
<div>
<p data-ke-size="size16">고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보<span>&nbsp;</span>n개가 있습니다. 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.</p>
<p data-ke-size="size16">예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.<br />당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.</p>
<p data-ke-size="size16"><b>모든 달은 28일까지 있다고 가정합니다.</b></p>
<p data-ke-size="size16">다음은 오늘 날짜가<span>&nbsp;</span>2022.05.19일 때의 예시입니다.</p>
약관 종류유효기간
<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-align="alignLeft">
<tbody>
<tr>
<td>A</td>
<td>6 달</td>
</tr>
<tr>
<td>B</td>
<td>12 달</td>
</tr>
<tr>
<td>C</td>
<td>3 달</td>
</tr>
</tbody>
</table>
번호개인정보 수집 일자약관 종류
<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-align="alignLeft">
<tbody>
<tr>
<td>1</td>
<td>2021.05.02</td>
<td>A</td>
</tr>
<tr>
<td>2</td>
<td>2021.07.01</td>
<td>B</td>
</tr>
<tr>
<td>3</td>
<td>2022.02.19</td>
<td>C</td>
</tr>
<tr>
<td>4</td>
<td>2022.02.20</td>
<td>C</td>
</tr>
</tbody>
</table>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>첫 번째 개인정보는 A약관에 의해 2021년 11월 1일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
<li>두 번째 개인정보는 B약관에 의해 2022년 6월 28일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.</li>
<li>세 번째 개인정보는 C약관에 의해 2022년 5월 18일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
<li>네 번째 개인정보는 C약관에 의해 2022년 5월 19일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.</li>
</ul>
<p data-ke-size="size16">따라서 파기해야 할 개인정보 번호는 [1, 3]입니다.</p>
<p data-ke-size="size16">오늘 날짜를 의미하는 문자열<span>&nbsp;</span>today, 약관의 유효기간을 담은 1차원 문자열 배열<span>&nbsp;</span>terms와 수집된 개인정보의 정보를 담은 1차원 문자열 배열<span>&nbsp;</span>privacies가 매개변수로 주어집니다. 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.</p>
</div>
<h2 data-ke-size="size26"><b>제한사항</b></h2>
<p data-ke-size="size16">제한사항</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>today는 "YYYY.MM.DD" 형태로 오늘 날짜를 나타냅니다.</li>
<li>1 &le;<span>&nbsp;</span>terms의 길이 &le; 20
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>terms의 원소는 "약관 종류<span>&nbsp;</span>유효기간" 형태의<span>&nbsp;</span>약관 종류와<span>&nbsp;</span>유효기간을 공백 하나로 구분한 문자열입니다.</li>
<li>약관 종류는<span>&nbsp;</span>A~Z중 알파벳 대문자 하나이며,<span>&nbsp;</span>terms<span>&nbsp;</span>배열에서<span>&nbsp;</span>약관 종류는 중복되지 않습니다.</li>
<li>유효기간은 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하입니다.</li>
</ul>
</li>
<li>1 &le;<span>&nbsp;</span>privacies의 길이 &le; 100
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>privacies[i]는<span>&nbsp;</span>i+1번 개인정보의 수집 일자와 약관 종류를 나타냅니다.</li>
<li>privacies의 원소는 "날짜<span>&nbsp;</span>약관 종류" 형태의<span>&nbsp;</span>날짜와<span>&nbsp;</span>약관 종류를 공백 하나로 구분한 문자열입니다.</li>
<li>날짜는 "YYYY.MM.DD" 형태의 개인정보가 수집된 날짜를 나타내며,<span>&nbsp;</span>today<span>&nbsp;</span>이전의 날짜만 주어집니다.</li>
<li>privacies의<span>&nbsp;</span>약관 종류는 항상<span>&nbsp;</span>terms에 나타난<span>&nbsp;</span>약관 종류만 주어집니다.</li>
</ul>
</li>
<li>today와<span>&nbsp;</span>privacies에 등장하는<span>&nbsp;</span>날짜의<span>&nbsp;</span>YYYY는 연도,<span>&nbsp;</span>MM은 월,<span>&nbsp;</span>DD는 일을 나타내며 점(.) 하나로 구분되어 있습니다.
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>2000 &le;<span>&nbsp;</span>YYYY<span>&nbsp;</span>&le; 2022</li>
<li>1 &le;<span>&nbsp;</span>MM<span>&nbsp;</span>&le; 12</li>
<li>MM이 한 자릿수인 경우 앞에 0이 붙습니다.</li>
<li>1 &le;<span>&nbsp;</span>DD<span>&nbsp;</span>&le; 28</li>
<li>DD가 한 자릿수인 경우 앞에 0이 붙습니다.</li>
</ul>
</li>
<li>파기해야 할 개인정보가 하나 이상 존재하는 입력만 주어집니다.</li>
</ul>
<p data-ke-size="size16">&nbsp;</p>
<h2 data-ke-size="size26"><b>문제풀이</b></h2>
<p data-ke-size="size16">처음에는 new Date()로 문제를 풀어보려고 했지만... 19번 테스트를 통과하지 못하였습니다. 대체 왜 틀리는지 이유라도 알고 싶지만...&nbsp;</p>
<p data-ke-size="size16">일단 저의 지저분한 코드를 올려보고 new Date()로 깔끔하게 푼 답변도 밑에 작성해보겠습니다.</p>
<p data-ke-size="size16">(그리고 저는 왜 자꾸 korea time으로 자동으로 변경이 안되는지 궁금하네요)</p>
<h4 data-ke-size="size20"><b>첫 번째 풀이(19번 테스트 실패!)</b></h4>
<pre id="code_1674566902787" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>function solution(today, terms, privacies) {
  let answer = [];
  let objectTerms = {}
for (let i of terms){
if(i[3]===undefined) objectTerms[i[0]] = Number(i[2])
else objectTerms[i[0]] = Number(i[2]+ i[3])
}
const Today = new Date(today)
const KoreaTime = new Date(Today.setHours(Today.getHours()+9))
for (let i =0 ; i&lt;privacies.length; i++){
  let collectPeriod = new Date(privacies[i].slice(0,-2))
  let expiredPeriod = collectPeriod.setMonth(collectPeriod.getMonth()+ objectTerms[privacies[i][11]])
  let koreaExpiredPeriod = new Date(expiredPeriod - (15*60*60*1000))
  
  if(koreaExpiredPeriod.getDate()&gt;28){
    koreaExpiredPeriod.setDate(28)
  }
  if(koreaExpiredPeriod&lt;KoreaTime){
   answer.push(i+1) 
  }
}
  return answer;
}</code></pre>
<h4 data-ke-size="size20"><b>업그레이드 코드(성공 사례)</b></h4>
<pre id="code_1674567016797" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>function solution(today, terms, privacies) {
  const termsT = {};
  const arr = [];
  today = new Date(today);

for (const v of terms) {
const a = v.split(" ");
termsT[a[0]] = Number(a[1]);
}

for (const idx in privacies) {
const a = privacies[idx].split(" ");
const b = new Date(a[0]);
b.setMonth(b.getMonth() + termsT[a[1]]);
if (b &lt;= today) {
arr.push(Number(idx) + 1);
}
}
return arr;
}</code></pre>

<p data-ke-size="size16">위에 있는 성공 사례와 실패 사례의 차이점은 19번 테스트가 통과될 뿐만 아니라, 코드가 깔끔합니다.</p>
<p data-ke-size="size16">저는 배열 분리를 할 때, slice와 뭐 if문을 잔뜩 사용하면서 나눴다면... 업그레이드 코드는 split으로 깔끔하게 나눴습니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">console.log로 확인해보면 차이점은 일(date) 를 28일로 바꾼 디테일 밖에 없는데 19번 테스트를 통과하지 못하더라고요. 그래서 28일로 바꾸는 detail을 삭제하고 진행해도 안되더라고요! ㅎㅎ 그래서 업그레이드 코드를 알기 전이기 때문에 new Date() 함수를 사용하지 않고 진행했습니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20"><b>두 번째 풀이</b></h4>
<pre id="code_1674567650698" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>function solution(today, terms, privacies) {
  let answer = [];
  let Today = today.split('.').map((v) =&gt; Number(v));
  let Terms = {};
  terms.forEach((v) =&gt; {
    let [kind, period] = v.split(' ');
    Terms[kind] = Number(period);
  });
  privacies.forEach((v, i) =&gt; {
    let [collectDate, termskind] = v.split(' ');
    let [y, m, d] = collectDate.split('.').map((v) =&gt; Number(v));

    m += Terms[termskind];    //유효기간 더하기
    d--;					//하루 빼야 유효기간 내 보관이 가능합니다.
    if (m &gt; 12) {
      if (m % 12 === 0) {		//12의 배수이면 년도가 변화하지 않습니다. 아니면 변화합니다.
        y += parseInt(m / 12) - 1;
        m = 12;
      } else {
        y += parseInt(m / 12);
        m = m % 12;
      }
    }

    if (y &lt; Today[0]) {   	//년도가 현재 년도보다 작으면 파기
      answer.push(i + 1);
    } else if (y === Today[0]) {
      if (m &lt; Today[1]) {		//년도가 같고 달이 작으면 파기
        answer.push(i + 1);
      } else if (m === Today[1]) {		//달이 같고 일수가 작으면 파기
        if (d &lt; Today[2]) {
          answer.push(i + 1);
        }
      }
    }

});
return answer;
}</code></pre>

<p data-ke-size="size16">복잡해 보이지만 위에 있는 처음 짠 코드를 new Date() 함수 없이 작성한 코드라고 생각이 됩니다.</p>
<p data-ke-size="size16">유효기간을 객체로 나누고</p>
<p data-ke-size="size16">개인정보 저장 날짜와 저장 기간을 더해서 여러개의 if 문을 이용하여 조건을 만족시켰습니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">아직 갈 길이 먼 것 같습니다. 조금 더 노력하여 코드를 깔끔하게 작성해보겠습니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
