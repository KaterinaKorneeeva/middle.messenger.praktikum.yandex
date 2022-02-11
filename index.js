document.addEventListener('DOMContentLoaded', () => {

    const modalAddPhoto = document.getElementById('modalAddPhoto');
    const modalEditPass = document.getElementById('modalEditPass');
    const modalEditProfile = document.getElementById('modalEditProfile');

    const editProfileBtn = document.querySelector(".profile-info__edit-btn");
    const editPassBtn = document.querySelector(".profile-info__edit-pass");
    const addProfileBtn = document.querySelector(".profile-info__add-image");


    if (addProfileBtn) {
        addProfileBtn.addEventListener('click', function () {
            modalAddPhoto.classList.add('active');
        });
    }

    if (editPassBtn) {
        editPassBtn.addEventListener('click', function () {
            modalEditPass.classList.add('active');
        });
    }

    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function () {
            modalEditProfile.classList.add('active');
        });
    }

    window.onclick = function (event) {
        if (event.target == modalAddPhoto) {
            modalAddPhoto.classList.remove('active');
        }
        if (event.target == modalEditPass) {
            modalEditPass.classList.remove('active');
        }

        if (event.target == modalEditProfile) {
            modalEditProfile.classList.remove('active');
        }
    }
})