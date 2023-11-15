let DOM = document.querySelectorAll(".maindiv");
DOM.forEach(function(one) { 
    one.addEventListener("click", function() {
        
        if (one.classList.contains("open")) {
            one.className = "maindiv";
        }
        else { 
            one.className = " maindiv open";
        }
    });
});
