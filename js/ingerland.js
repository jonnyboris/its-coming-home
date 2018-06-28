var $e = document.getElementById('hometime');
var $sound = document.getElementById('sound');
var $tune = document.getElementById('tune');
var playing = false;

setInterval(function () {
    var time = moment("2018-07-15 18:00:00").countdown().toString();
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