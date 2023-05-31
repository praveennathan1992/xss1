function callInput(){
        var input = document.getElementById('input-test').value;
        var testHtml = document.getElementById('test-html');
        var testInnerHTML = document.getElementById('result');
        $(testHtml).html(input);
        if(input === "<script>alert(document.cookie)</script>")
           {
            testInnerHTML.innerHTML = document.cookie;
           }
           
       
}
    
function WriteCookie () {
       Cookies.set('token', 'eyJhbGciOiJIUzI1NiJ9.eyJGTEFHXzQiOiJqblNheDdERm5sMTBnVDJtIiwiT3JnIjoiTmV4dHVwbGUiLCJVc2VybmFtZSI6Ik5leHR1cGxlX1RlYW0iLCJFdmVudCI6IkNURi0yMDIzIiwiRGF0ZSI6IjIwMjMtMDYtMDcifQ.APk30ZG6g3mfr5N4S7A5k8f8UHatwL247-2qUYglAHc') 
       Cookies.set('lorem', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..')
}

