let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button=> {
    button.addEventListener('click', (e) => {
        // console.log("clicked")
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerText)

        switch (e.target.innerText) {
            case 'C':
                display.innerText = ''; //clearing the display
                break;
            case '←':
                if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);  //backspace or delete key
                }
                break;
            case '=':
                try {
                display.innerText = eval(display.innerText);   //evaluating the calculations
                } catch {
                    display.innerText='Error'
            }
            break;
            default:
                display.innerText += e.target.innerText;  //adding all to the display
        }
    })
})