function load(card1,card2,card3,card4) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let res = JSON.parse(this.responseText);
      card1.innerHTML = '<img src="' + res.flix.avatar + '"><h1>' + res.flix.name + '<a>#' + res.flix.discriminator + '</a></h1><h2>Developer</h2>'
      card2.innerHTML = '<img src="' + res.jimi.avatar + '"><h1>' + res.jimi.name + '<a>#' + res.jimi.discriminator + '</a></h1><h2>Co-developer</h2>'
      card3.innerHTML = '<img src="' + res.marc.avatar + '"><h1>' + res.marc.name + '<a>#' + res.marc.discriminator + '</a></h1><h2>Discord server admin</h2>'
      card4.innerHTML = '<img src="' + res.bot.avatar + '"><h1>' + res.bot.name + '<a>#' + res.bot.discriminator + '</a></h1><h2>Our masterpiece</h2>'
    }
    xhttp.open("GET", "https://horstcors.herokuapp.com/https://lixbot-info-api.herokuapp.com/");
    xhttp.send()
}