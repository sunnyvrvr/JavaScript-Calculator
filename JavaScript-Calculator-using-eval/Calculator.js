
function calculate(){
    input = document.getElementById('result').value;
    result = eval(input);
    console.log(result);
    //한줄코드를 통해서, 최종값을 다시 내가 워하는 result 필드에 넣기
    //1. 내가 원하는 필드(result)라는 필드를 선택한다
    //2. 연산한 값을 할당한다.
    //console.log(document.getElementById('result'));
    document.getElementById('result').value = result;
}
function clearResult(){
    document.getElementById('result').value = "";
}
