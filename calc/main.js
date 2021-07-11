(function(){
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');
//to link a fanction to the button in html
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        screen.value += value;

    })
    
});
//eval evaluetes an argument and returns the results
equal.addEventListener('click',function(e){
    if(screen.value === ''){
        screen.value='Please Enter Value';
    }else{
        let answer = eval(screen.value);
        screen.value=answer;
    }
})

clear.addEventListener('click',function(e){
    screen.value= '';
})

})();