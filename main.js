var CosmicLink = cosmicLib.CosmicLink
var coslink

function start()
{
  refreshRedirection()
  setTamper()

  if(location.search.length > 2) {
    coslink = new CosmicLink(document.URL)

    coslink.getQuery().then(function(query){
      node.append(node.grab("query"), "/" + query)
    })

    refreshQR()
  } else {
    var transactionNode = node.grab("CL_transactionNode")
    node.clear(transactionNode)
    node.append(transactionNode, "No transaction.")
  }
}

function switchPage(from, to){
  node.append(node.grab("hidden"), from)
  node.append(node.grab("page"), to)
}

function switchQR(){
  if(localStorage.QR == "true") localStorage.QR = false
  else localStorage.QR = true
  refreshQR()
}

function refreshQR(){
  if(localStorage.QR == "true"){
    coslink.getQuery().then(function(query){
      var url = getAuthenticatorUrl()+query
      new QRCode(node.grab("QR"), url)
    })
  } else {
    node.clear(node.grab("QR"))
  }
}

function switchRedirection(){
  if(localStorage.redirect == "true") localStorage.redirect = false
  else localStorage.redirect = true
  refreshRedirection()
}

function refreshRedirection(){
  var checkboxNode = node.grab("checkbox")
  if(localStorage.redirect == "true") {
    checkboxNode.textContent = "✔"
    node.grab("redirect").className = "enabled"
  }
  else {
    checkboxNode.textContent = "✘"
    node.grab("redirect").className = ""
  }
}

function selectAuthenticator(){
  var selector = node.grab("authenticators")
  var value = selector.options[selector.selectedIndex].value
  localStorage.authenticator = value
  refreshQR()
}

/*** Experimental Robot Factory ***/

function myHash(){
  if(localStorage.myHash) return localStorage.myHash

  var alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var size = 32;

  var hash = ""
  for (var i = 0; i < size; i++) {
     hash += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }

  localStorage.myHash = hash
  return hash
}

function setTamper(){
  var tamper = node.grab("tamper")
  tamper.src = "https://robohash.org/" + myHash()
}


/// HTML Elements helper
var node = {}

node.append = function(el1, arg) {
  if(typeof arg == "string" || arg instanceof Error) {
    var el2 = document.createTextNode(arg)
  } else { var el2 = arg }
  el1.appendChild(el2)
}

node.clear = function(el) { el.innerHTML = '' }

node.grab = function(id) { return document.getElementById(id) }
