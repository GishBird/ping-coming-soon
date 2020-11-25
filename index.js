
    const form = document.querySelector("form");
    const button = form.querySelector('[type="submit"]');
    const msg = 'Please provide a valid email address';

    const error = document.createElement('p');
    error.classList.add('error_text');
    error.textContent = msg;


    function checkEmail(e) {
        e.preventDefault();
        const email = e.target.querySelector('[type="email"]').value;
        if(!validateEmail(email)) {
            form.classList.add('error');
            form.insertBefore(error, button)
        } else {
            form.classList.remove('error');
            form.removeChild(error);
        }
        
    }
    function validateEmail(email) {
        const re = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        return re.test(email);
    }

    form.addEventListener('submit', checkEmail)



//     var text = document.getElementById("text");
//     var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

//     if (email.match(pattern)) 
//     {
//         return true;
        
//     }
//     else 
//     {
//         text.innerHTML = "Please provide a valid email address";
//         text.style.color = "hsl(354, 100%, 66%)";
//         return false; 
//     }
// }