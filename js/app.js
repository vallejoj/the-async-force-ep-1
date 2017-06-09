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

function homeworld() {

  var response= JSON.parse(this.responseText)

  var per4HW=document.createElement('div')
  per4HW.innerHTML=wResponse.name
  person4HomeWorld.appendChild(per4)
  oReq.addEventListener('load', homeworld)
  oReq.open('GET', "http://www.swapi.co/api/people/5")
  oReq.send()
}

people()

})()
