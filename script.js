const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')


toggles.forEach(toggle => toggle.addEventListener('change',(e) =>dothTrick(e.target) 

))


function dothTrick(theClickedone){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theClickedone){
            fast.checked=false 
            
        }
    if(cheap === theClickedone){
        good.checked = false 
    }
    if(fast === theClickedone){
        cheap.checked = false
    }
    }

}