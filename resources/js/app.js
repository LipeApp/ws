import './bootstrap';
const channel = Echo.channel('chanel')
    .listen('.my-event', function (event){
        console.log(event)
    })
console.log(channel)
