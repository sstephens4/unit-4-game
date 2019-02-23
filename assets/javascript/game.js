$(document).ready(function () {


    var random = Math.floor(Math.random() * 120) + 1;

    $(".randomNumber").text(random);

    var crystal1 = Math.floor(Math.random() * 5 + 1);
    var crystal2 = Math.floor(Math.random() * 5 + 1);
    var crystal3 = Math.floor(Math.random() * 5 + 1);
    var crystal4 = 10;

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 120) + 1;

        $(".randomNumber").text(random);

        var crystal1 = Math.floor(Math.random() * 3 + 1);
        var crystal2 = Math.floor(Math.random() * 3 + 1);
        var crystal3 = Math.floor(Math.random() * 3 + 1);
        var crystal4 = Math.floor(Math.random() * 3 + 1);

        userTotal = 0;

        $(".userTotal").text(userTotal);

    }

    function winning() {
        wins++;
        console.log(wins);
        $("#wins").text(wins);
        reset();
    }

    function losing() {
        losses++;
        console.log(losses);
        $("#losses").text(losses);
        reset();   
    }

    $("#crystal1").on("click", function () {
        userTotal = userTotal + crystal1;
        console.log(userTotal);
        $(".userTotal").text(userTotal);

        if (userTotal == random) {
            winning()
            
        }

        else if (userTotal > random) {
            losing()
        }

        $("#crystal2").on("click", function () {
            userTotal = userTotal + crystal2;
            console.log(userTotal)
            $(".userTotal").text(userTotal);

            if (userTotal == random) {
                winning()
            }

            else if (userTotal > random) {
                losing()
            }

            $("#crystal3").on("click", function () {
                userTotal = userTotal + crystal3;
                console.log(userTotal)
                $(".userTotal").text(userTotal);

                if (userTotal == random) {
                    winning()
                }

                else if (userTotal > random) {
                    losing()
                }

                $("#crystal4").on("click", function () {
                    userTotal = userTotal + crystal4;
                    $(".userTotal").text(userTotal);

                    if (userTotal == random) {
                        winning()
                    }

                    else if (userTotal > random) {
                        losing()
                    }
                });
            });
        });
    });
});
