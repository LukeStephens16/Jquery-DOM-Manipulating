$(document).ready(function () {


     /* Objective 1 */

      let button = $("<button>Submit</button>")
      button.appendTo("body")
        button.click(function () {
        alert('You are a sweet soul')
    })


    /* Objective 2 */

    $('#me').hover(function () {
        $(this).css("background-color", "powderblue");
    }, function () {
        $(this).css("background-color", "");
    });


    /* Objective 3 */

    $('#submitBtn').click(function () {
        alert($('#textBox').val());
    })


    /* Objective 4 */


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }


    $('#ptag').click(function (event) {
        $(event.target).css("color", getRandomColor())
    })


    /* Objective 5 */

    $('#btn').click(function () {
        $('<span>' + 'Luke Stephens' + '</span>').appendTo($('#span'))

    })


    /* Objective 6 */

    let friends = ['jack', 'morgan', 'prim', 'jackson', 'noah', 'kaleb', 'clayton', 'jenna', 'jonathon', 'joe']

    let friendsCount = 0

    $('#btnTwo').click(function () {
        for (let i = 0; i < friends.length; i++) {
            let listItem = $("<li>" + (friends[i]) + "</li>");
            $(listItem).appendTo($('#ul'));
        }
       

    })
})
