function AssignmentJS() {
    const formDiv = document.getElementById("formDiv");
    const formbutton = document.getElementById("SubmitButton");
    const errorMessage = document.getElementById("error-message");

    if(formbutton != null) {
        formbutton.addEventListener("click", validateForm);
    }

    function validateForm(event) {
        event.preventDefault();

        const wordDescribe = document.getElementById("firstIn").value;
        const numberRating = document.getElementById("secondIn").value;
        const providedEmail = document.getElementById("thirdIn").value;
        const finalMessage = document.getElementById("fourthIn").value;
        const hiddenphrase = document.getElementById("fithIn").value;
        const doubleCheck = document.getElementById("sixthIn").value;
        let checkBox1 = document.querySelector("#check1");

        if(!wordDescribe || !numberRating || !providedEmail || !hiddenphrase || !doubleCheck) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid: No Input";
            alert("No Input");
            
        }

        else if(wordDescribe == "") {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid: Word Required";
        }

        else if(numberRating > 5 || numberRating < 1) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid: Number Must be from 1 to 5";
        }

        else if(!providedEmail.match(/^[A-Za-z0-9]+[@][a-z]+[\.][a-z]{2,3}/)) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid: Inproper email";
        }

        else if(finalMessage == " Message here") {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Please type a message";
        }
        else if(finalMessage.length <= 1) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "A word would be nice";
        }

        else if(hiddenphrase.length < 5) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid: Phrase must be at least 5 Characters";
        }

        else if(doubleCheck !== hiddenphrase) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid:  Not the phrase";
        }

        else if(!checkBox1.checked) {
            formbutton.style.backgroundColor = "red";
            errorMessage.innerHTML = "Invalid: Check must be checked";
        }

        else{
            formbutton.style.backgroundColor = "lime";
            errorMessage.innerHTML = "Form Submitted";

        }
    }

    const indexDark = document.getElementById("darkMode");
    const indexPink = document.getElementById("pinkMode");
    const indexMain = document.getElementById("Index");
    const indexDiv1 = document.getElementById("div1");
    const indexDiv2 = document.getElementById("div2");
    const indexDiv3 = document.getElementById("div3");
    const indexContainer = document.getElementById("flexContainer");
    const indexHeader1 = document.getElementById("indexHeader");

    if(indexDark != null) {
        indexDark.addEventListener("click", () => {
            if(indexMain.style.backgroundColor == "lightgrey") {
                indexMain.style.backgroundColor = "rgb(43, 159, 226)";
                indexDiv1.style.backgroundColor = "lightgreen";
                indexDiv2.style.backgroundColor = "lightgreen";
                indexDiv3.style.backgroundColor = "lightgreen";
                indexContainer .style.backgroundColor = "rgb(0, 102, 255)";
            }
            else {
                indexMain.style.backgroundColor = "lightgrey";
                indexDiv1.style.backgroundColor = "lightgrey";
                indexDiv2.style.backgroundColor = "lightgrey";
                indexDiv3.style.backgroundColor = "lightgrey";
                indexContainer .style.backgroundColor = "grey";

            }
       
        });
    }

    if(indexPink != null) {
        indexPink.addEventListener("click", () => {
            if(indexMain.style.backgroundColor == "pink") {
                indexMain.style.backgroundColor = "rgb(43, 159, 226)";
                indexDiv1.style.backgroundColor = "lightgreen";
                indexDiv2.style.backgroundColor = "lightgreen";
                indexDiv3.style.backgroundColor = "lightgreen";
                indexContainer .style.backgroundColor = "rgb(0, 102, 255)";
                indexHeader1.style.backgroundColor = "rgb(199, 197, 197)";
            }
            else {
                indexMain.style.backgroundColor = "pink";
                indexDiv1.style.backgroundColor = "pink";
                indexDiv2.style.backgroundColor = "pink";
                indexDiv3.style.backgroundColor = "pink";
                indexContainer.style.backgroundColor = "deeppink";
                indexHeader1.style.backgroundColor = "hotpink";
            }
       
        });
    }
}
AssignmentJS();


