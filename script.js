$(document).ready(function(){
    $('.myclass1').click(function(){
        $.getJSON("https://www.potterapi.com/v1/sortingHat",function(data){
            console.log(data);
            var house=data;
            $('p').append(house);
        })
    })
})
