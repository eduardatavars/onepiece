document.addEventListener('DOMContentLoaded', function () {
    const fruta = document.querySelectorAll('.fruta');
    const resetFruta = document.querySelectorAll('.fruta__text--inactive');
    const resetActiveStyle = document.querySelectorAll('.fruta img');
    
    fruta.forEach((fruta, index) => {
        fruta.addEventListener('click', function() {
            const frutaText = this.nextElementSibling.classList;
            const frutaActiveStyle = this.querySelector('img');
    
            if (frutaText.contains('fruta__text--inactive')) {
                for (i = 0; i < resetFruta.length; i++) {
                    resetFruta[i].classList.add('fruta__text--inactive');
                    resetActiveStyle[i].classList.remove('--isActive');
                }
            }
    
            frutaText.toggle('fruta__text--inactive');
            frutaActiveStyle.classList.toggle('--isActive');
        })
    })

})
