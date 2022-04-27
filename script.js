document.addEventListener("DOMContentLoaded", function (event) {

    let images = document.querySelectorAll('.img');

    images.forEach(image => {
        image.addEventListener('click', () => {

            removeAllShadows()
            image.classList.add('active-img')
        })
    });
    document.addEventListener('click', function (e) {
        if (e.target.closest('.wrap')) return;
        removeAllShadows();
    })
})

function removeAllShadows() {
    let allImages = document.querySelectorAll('.img')
    allImages.forEach(image => image.classList.remove('active-img'));
}