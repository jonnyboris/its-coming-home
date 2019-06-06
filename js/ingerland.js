var $e = document.getElementById('hometime');
var $sound = document.getElementById('sound');
var $tune = document.getElementById('tune');
var playing = false;

var time = moment("2019-06-09 21:15:00").countdown().toString();
$e.innerText = time;

setInterval(function () {
    var time = moment("2019-06-09 21:15:00").countdown().toString();
    $e.innerText = time;
}, 1000)


$sound.onclick = function () {
    if(!playing) {
        $tune.play();
        $sound.classList = 'on';
    } else {
        $tune.pause();
        $sound.classList = 'off';
    }
    playing = !playing;
}
