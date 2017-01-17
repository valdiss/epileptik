document.addEventListener("DOMContentLoaded", function() {

    let color = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let randomColor;
    let change = true;
    setInterval(function() {
        if (change === true) {
          randomColor = '#';
          for (let i = 0; i < 6; i++) {
            randomColor +=  color[Math.floor(Math.random() * color.length)];
          }
          document.querySelector('div').style.backgroundColor = randomColor;
        }
    }, 2000);


    let change_bgrd = function() {
        change = !change;
    };

    let divi = document.querySelector(".stromboscope");
    divi.addEventListener("click", change_bgrd);
});
