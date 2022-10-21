import './bootstrap';
const channel = Echo.channel('chanel')
    .listen('.my-event', function (event){
        document.getElementById("online").innerText = event;
    })
console.log(channel)
