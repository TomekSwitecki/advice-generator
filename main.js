console.log(fetch("https://api.adviceslip.com/advice"))
$("button").click(function () {
    GenerateAdvice();
});

function GenerateAdvice()
{
   fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then(({ slip }) => {
        $("#advice").text(slip.advice);
        $("#advice_number").text(slip.id);
    });
};  

GenerateAdvice();