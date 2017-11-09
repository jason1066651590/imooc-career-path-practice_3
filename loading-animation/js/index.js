$(function() {
    function move() {
        $('.top').animate({
            borderRadius: "50%",
            top: "180px"
        }, 1000, 'swing').animate({
            borderRadius: "0",
            top: '0px'
        }, 1000, 'swing');
        $('.left').animate({
            borderRadius: "50%",
            left: "180px"
        }, 1000, 'swing').animate({
            borderRadius: "0",
            left: '0px'
        }, 1000, 'swing');
        $('.right').animate({
            borderRadius: "50%",
            right: "180px"
        }, 1000, 'swing').animate({
            borderRadius: "0",
            right: '0px'
        }, 1000, 'swing');
        $('.bottom').animate({
            borderRadius: "50%",
            bottom: "180px"
        }, 1000, 'swing').animate({
            borderRadius: "0",
            bottom: '0px'
        }, 1000, 'swing');
    }
    setInterval(move,1000);
})
