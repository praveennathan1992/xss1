function callInput(){
        var input = document.getElementById('input-test').value;
        var testHtml = document.getElementById('test-html');
        var testInnerHTML = document.getElementById('test-innerHTML');
        $(testHtml).html(input);
        testInnerHTML.innerHTML = input; // ...; my%20name=John%20Smith
    }
function WriteCookie () {
       Cookies.set('token', 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQ3Jvc3NTaXRlIFNjcmlwdGluZyIsIkZMQUdfMzoiOiJuSlVNNEtFWWRENG1TTWFuIiwiSXNzdWVyIjoiTmV4dHVwbGUiLCJVc2VybmFtZSI6IlhTUyIsImV4cCI6MTY4NTMyNzY3NywiaWF0IjoxNjg1MzI3Njc3fQ.zh352IRPtaVCD0-RCGedHvO7bSW5xwC7MIxEm6a0SnY' ) 
       Cookies.set('lorem','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')
}
