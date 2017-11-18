var cDealer = { 
    name: 'Enterprize Car Rentals',  
    Midsize: {
      price:100,
      available:31
    },    
    Economy: {
      price:55,
      available:25
    },
                                                                           
    Tesla: {
      price:130000,
      available:10
    }
    };
  
  

var uRenter = {
    
        Economy:[],
        Midsize:[],
        Tesla:[]
    };
    
function displayInfo(val){
    var selection = cDealer[val];
    document.getElementById('displayInfo').innerHTML = val + " $" + selection.price + "<br>" + selection.available + " Available";
}    
    function makeReservation(){
        
        var size = document.forms["carSelect"]['type'].value;
        var uRenter = document.forms["carSelect"]['firstname']['lastname'].value;
        
        if( size == "none"){
            alert("Please choose a car type");
        }
        else if( uRenter ==""){
            alert("Please enter your name");
        } else { 
            uRenter[size].push({name: uRenter})
            cDealer[size].available--;
            document.getElementById('displayInfo').innerHTML = "Thank you<br>Your reservation was succesful!"
    }
    return false;
    }
  



