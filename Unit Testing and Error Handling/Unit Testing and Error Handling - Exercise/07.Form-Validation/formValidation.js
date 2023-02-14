function validate() {
  
    document.getElementById('company').addEventListener('change', ()=>{
        const companyInfo = document.getElementById('companyInfo');
        if(document.getElementById('company').checked === false){
            companyInfo.style.display = 'none';
        }else{
            companyInfo.style.display = 'block';
        }
    });
  
    document.getElementById('submit').addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault()

        let wrongInput = [];

        let username = document.getElementById('username');
        const patternUsername = /^[a-zA-Z0-9]{3,20}$/g
        if(!patternUsername.test(username.value)){
            wrongInput.push(username);
        }

        let email = document.getElementById('email');
        const patternEmail = /^.*@.*\..*$/g;
        if(!patternEmail.test(email.value)){
            wrongInput.push(email);
        }

        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password');
        const patternPassword = /^[\w]{5,15}$/g;
        if(!patternPassword.test(password.value) || password.value !== confirmPassword.value){
            wrongInput.push(password);
            wrongInput.push(confirmPassword);
        }

        let checkbox = document.getElementById('company')

        if(checkbox.checked){
            let companyNumber = document.getElementById('companyNumber');
            let patternCompanyNumber = /^[\d]{4}$/g;
            if(!patternCompanyNumber.test(companyNumber.value) || companyNumber.value < 1000){
                wrongInput.push(companyNumber);
            }
        }

        wrongInput.forEach((input) => input.style.borderColor = 'red');

        if(wrongInput.length === 0){
            document.querySelector('#valid').style.display = 'block';
        }else{
            document.querySelector('#valid').style.display = 'none';
        }
    }
}
