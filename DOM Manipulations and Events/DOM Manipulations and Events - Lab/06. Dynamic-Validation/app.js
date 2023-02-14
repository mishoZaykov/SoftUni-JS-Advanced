function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange(event) {
        let pattern = /[a-z]+@[a-z]+.[a-z]+/gm
        if(pattern.test(event.target.value)){
            event.target.classList.remove('error');
        }else{
            event.target.classList.add('error');
        }
    }
}