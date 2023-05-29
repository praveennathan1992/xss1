function callInput(){
        var input = document.getElementById('input-test').value;
        var testHtml = document.getElementById('test-html');
        var testInnerHTML = document.getElementById('test-innerHTML');
        $(testHtml).html(input);
        if(input === "<script>alert(document.cookie)</script>)
           {
            testInnerHTML.innerHTML = document.cokkie;
           }
           
       
}
    
function WriteCookie () {
       Cookies.set('token', 'eyJhbGciOiJIUzI1NiJ9.eyJGTEFHXzMiOiJGTEFHXzE6bkpVTTRLRVlkRDRtU01hbiIsIk9yZyI6Ik5leHR1cGxlIiwiVXNlcm5hbWUiOiJUZWFtX05leHR1cGxlIiwiRXZlbnQiOiJDVEYtMjAyMyIsImV4cCI6MTY4NTMzNjIzM30.AEyNFX9vglWG8QkDgPUfMaSLokznEyWUEAWWfQBy4CU') 
       Cookies.set('lorem', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..')
}

