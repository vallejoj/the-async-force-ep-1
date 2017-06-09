(function() {
  console.log("me crazy")



  function people() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', responseHandler)
    oReq.open('GET', "http://www.swapi.co/api/people/4")
    oReq.send()

  }

  function responseHandler() {
    var response = JSON.parse(this.responseText)
    var per4 = document.createElement('div')

    per4.innerHTML = response.name
    person4Name.appendChild(per4)
  }

  function worldHandler() {
    var response = JSON.parse(this.responseText)
    var world4 = document.createElement('div')

    world4.innerHTML = response.name
    person4HomeWorld.appendChild(world4)
  }

  function homeworld() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', worldHandler)
    oReq.open('GET', "http://www.swapi.co/api/planets/1/")
    oReq.send()
  }

  function people14() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', per14Handler)
    oReq.open('GET', "http://www.swapi.co/api/people/14")
    oReq.send()

  }

  function per14Handler() {
    var response = JSON.parse(this.responseText)
    var per14 = document.createElement('div')

    per14.innerHTML = response.name
    person14Name.appendChild(per14)
  }

  function species14() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', spe14Handler)
    oReq.open('GET', "http://www.swapi.co/api/species/1/")
    oReq.send()

  }

  function spe14Handler() {
    var response = JSON.parse(this.responseText)
    var spe14 = document.createElement('div')

    spe14.innerHTML = response.name
    person14Species.appendChild(spe14)
  }

  function film() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', filmHandler)
    oReq.open('GET', ' http://swapi.co/api/films/ ')
    oReq.send()
  }


  function filmHandler() {
    var response = JSON.parse(this.responseText)
    for (var i = 0, len = response.results.length; i < len; i++) {
      var putFilms = document.createElement('h3')
      putFilms.className = "putFilms"
      putFilms.innerHTML = response.results[i].title
      films.appendChild(putFilms)

      var pTitle=document.createElement('h2')
      pTitle.className="pTitle"
      pTitle.innerHTML="Planet"
      putFilms.appendChild(pTitle)

      for (var j = 0; j < response.results[i].planets.length; j++) {

        (function(putFilms) {
          var yoReq = new XMLHttpRequest();
          yoReq.addEventListener('load', function() {

            var planetsList = document.createElement('li')
            planetsList.className = "planetsList"

            planetsList.innerHTML = JSON.parse(this.responseText).name

            putFilms.appendChild(planetsList)
            //  console.log(response)
          })
          console.log(response.results[i].planets[j])
          yoReq.open('GET', response.results[i].planets[j])
          yoReq.send()
        })(putFilms)
      }
    }
  }



  people()
  homeworld()
  people14()
  species14()
  film();
})()
