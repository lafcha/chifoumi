document.addEventListener("DOMContentLoaded", function (event) {


    /************ACTIVE/DISABLE IMAGE ON CLICK ************/
    let images = document.querySelectorAll('.img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            removeAllShadows()
            image.classList.add('active-img')
        })
    });

    document.addEventListener('click', function (e) {
        if (e.target.closest('#wrap')) return;
        if (e.target.closest('#btn-wrap')) return;
        removeAllShadows()
    });

    /************ON PLAY CLICK ************/
    document.querySelector('#btn').addEventListener('click', () => {

        let anImageIsActive = false;
        let getImages = document.querySelectorAll('.img');
        getImages.forEach(img => {
            if(img.classList.contains('active-img')){
                anImageIsActive = true;
            }
        })
        if(anImageIsActive){
            removeAllElements()
            let selectedImageClass = document.getElementsByClassName('active-img');
            let playersChoice = selectedImageClass[0].id
            let result = playGame(playersChoice);
            displayResults(result, playersChoice);
            setTimeout(() => {   displayReplayBtn()}, 1000);
        }
        

    });

    document.querySelector('#replay-btn').addEventListener('click', () => {
        document.location.reload();
    })
});

function removeAllShadows() {
    let allImages = document.querySelectorAll('.img');
    allImages.forEach(image => image.classList.remove('active-img'));
}

function removeAllElements() {
    let box = document.getElementById('game-not-played');
    box.style.opacity = "0";
    setTimeout(() => { box.style.display = "none" }, 1000);
}

function displayReplayBtn() {

    let btn = document.querySelector('#replay-wrap');
    btn.style.display = "flex";
}
