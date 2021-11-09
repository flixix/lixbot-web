function load(serverCount) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let res = JSON.parse(this.responseText);
      serverCount.innerHTML = '<h2>Lix is used in</h2><h1>' + res.bot.count + '</h1><h2>servers</h2><p>Powered by <a href="https://horstlang.org">Horst</a></p>'
    }
    xhttp.open("GET", "https://horstcors.herokuapp.com/https://lixbot-info-api.herokuapp.com/");
    xhttp.send()
}