//https://www.eclipse.org/paho/clients/js/
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  var Recibido;
  function MOstrar(){
    console.log(Recibido)
   document.getElementById('lname3').value=document.getElementById('lname3').innerHTML=Recibido.split(":")[2];
  }
  

  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
// called when a message arrives
  function onMessageArrived(message) {
    var le=document.getElementById("Sensor");
    var l=document.getElementById("Sensor1");
    console.log("onMessageArrived:"+message.payloadString);
    variables=(message.payloadString).split(("-"));
  }
  function mostrard(){
    var dat=document.getElementById("info");
    dat.innerHTML=variables[0];
  }
  function mostrar2(){
    var dat=document.getElementById("info");
    dat.innerHTML=variables[1];
  }
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "mchela.fie@unach.edu.ec",
    password: "Djmarioo1905",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("mchela.fie@unach.edu.ec/sensores2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "mchela.fie@unach.edu.ec/sensores";
    client.send(message);
	
  }
  function doFail(e){
    console.log(e);
	
  }
  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    Recibido=message.payloadString
    if(Recibido.split(":")[0]==0){
      document.getElementById('lname1').value="apagado";
    }else{
      document.getElementById('lname1').value="prendido";
    }
    if(Recibido.split(":")[1]==0){
      document.getElementById('lname2').value="apagado";
    }else{
      document.getElementById('lname2').value="prendido";
    }
  }
  
