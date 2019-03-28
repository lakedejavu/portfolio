$(document).ready(function () {
    $('#js').click(function(){
        $(this).wrap('<a href="js.html" target="_blank"></a>');        
    });

    //1.a Dates
    
    var checkBtn = document.getElementById('check');
    if(checkBtn){
        checkBtn.addEventListener('click', leapYear, false);
        function leapYear()  {
            var year = document.getElementById('year').value;
            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
            {
                document.getElementById('leapyear').innerHTML = year + " is leap year";
                document.getElementById('year').value = '';
            }
            else{
                document.getElementById('leapyear').innerHTML =  year + " is NOT a leap year";
                document.getElementById('year').value = '';
            }       
        }
    }
   
    
    // 1.b due date

   
    //2. show more or less content
    var content = document.getElementById('text-content');
    var show = document.getElementById('show-more');

    show.onclick = function(){
        if(content.className == 'open'){
            content.className = '';
            show.textContent = 'Show More';
            content.style.transition = "all 1s";              
        }
        else{
            content.className = 'open';
            content.style.transition = "all 1s";    
            show.textContent = 'Show Less';
        }

    };

    // 3. Add an item to a list, remove item
   
    var add_btn = document.getElementById('add-btn');   

    function addToList(){
        

        var list = document.getElementsByTagName('ul')[0];
        var newItem = document.createElement('li');
        newItem.className = 'list-group-item';

        //get input value
        var input = document.getElementById('input-item').value;
        var newText = document.createTextNode(input);
        newItem.appendChild(newText);       
        list.appendChild(newItem);
        document.getElementById('input-item').value = '';
       
        //remove from List
        newItem.addEventListener('click', removeFromList, false);
        function removeFromList(){
            newItem.remove();
        }
    }

    add_btn.onclick = addToList;
    
   
   // 4. random number generator
   
       
});