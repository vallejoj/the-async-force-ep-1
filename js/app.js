(function  () {
  console.log("me crazy")



function people () {
var oReq= new XMLHttpRequest();
  oReq.addEventListener('load', responseHandler)
  oReq.open('GET', "http://www.swapi.co/api/people/4")
  oReq.send()

}
function responseHandler(){
  var response= JSON.parse(this.responseText)
  var per4= document.createElement('div')
   console.log(response)
  per4.innerHTML=response.name
  person4Name.appendChild(per4)
}

function worldHandler(){
  var response= JSON.parse(this.responseText)
  var world4= document.createElement('div')
   console.log(response)
  world4.innerHTML=response.name
  person4HomeWorld.appendChild(world4)
}

function homeworld() {
  var oReq= new XMLHttpRequest();
    oReq.addEventListener('load', worldHandler)
    oReq.open('GET', "http://www.swapi.co/api/planets/1/")
    oReq.send()
}
function people14 () {
var oReq= new XMLHttpRequest();
  oReq.addEventListener('load', per14Handler)
  oReq.open('GET', "http://www.swapi.co/api/people/44")
  oReq.send()

}
function per14Handler(){
  var response= JSON.parse(this.responseText)
  var per14= document.createElement('div')
   console.log(response)
  per14.innerHTML=response.name
  person14Name.appendChild(per14)
}

function species14 () {
var oReq= new XMLHttpRequest();
  oReq.addEventListener('load', spe14Handler)
  oReq.open('GET', "http://www.swapi.co/api/species/22/")
  oReq.send()

}
function spe14Handler(){
  var response= JSON.parse(this.responseText)
  var spe14= document.createElement('div')
   console.log(response)
  spe14.innerHTML=response.name
  person14Species.appendChild(spe14)
}

function film () {
var oReq= new XMLHttpRequest();
  oReq.addEventListener('load', filmHandler)
  oReq.open('GET', ' http://swapi.co/api/films/ ')
  oReq.send()
}
function filmHandler(){
  var i = 0
while (i<7) {

  var response= JSON.parse(this.responseText)
  var putFilms= document.createElement('li')
   console.log(response)
  putFilms.innerHTML=response.results[i].title
  films.appendChild(putFilms)
  i++
}
}



people()
homeworld()
people14()
species14()
film();
})()
