function validation() {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (email.match(pattern)) 
    {
        return true;
        
    }
    else 
    {
        text.innerHTML = "Please provide a valid email address";
        text.style.color = "hsl(354, 100%, 66%)";
        return false; 
        
    }
}