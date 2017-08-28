$('#field').css({
    width: '200px',
    height: '150px',
    border: '10px',
    background: '#009a0f',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
});

$('#ball').css ({
    position: 'absolute',
    left: '0',
    top: '0',
    width: '40px',
    height: '40px',
    transition: 'all 1s'
});

var field = document.getElementById('field');
var ball = document.getElementById('ball');
field.onclick = function(event) {
    var fieldCoords = this.getBoundingClientRect();

    var fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
    };

    var ballCoords = {
        top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
        left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};