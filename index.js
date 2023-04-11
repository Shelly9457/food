const eat_cotnainer = document.querySelector('.eat_cotnainer')
const gave_container = document.querySelector('.gave_container')
const eat_row = document.querySelector('.eat_row')

// eat_cotnainer.innerHTML += `
// <div class="swiper-slide">
//     <div class="eat_box" data-bs-toggle="modal" data-bs-target="#${item.id}">
//         <div class="eatImg_box">
//             <div class="eat_text">${item.name}</div>
//             <img src="${item.img}" class="eat_img">
//         </div>
//     </div>
// </div>
// `
eatDate.forEach((item, index) => {
    eat_row.innerHTML += `
    <div class="modal fade" id="${item.id}">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-1">${item.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <img src="${item.img}" class="my-3 d-block w-100 rounded-3">
                    <h3>
                    ${item.text}
                    </h3>
                </div>
                <div class="modal-footer">
                    <button class="btn" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
    `
})
gaveData.forEach(data => {
    gave_container.innerHTML += `
    <div class="col-lg-4 col-sm-6">
        <div class="gave_item">
            <img src="${data.img}" class="gave_img">
            <div class="gave_text">
                <h2 class="text-center fw">${data.name}</h2>
                <h4>
                    ${data.text}
                </h4>
            </div>
        </div>
    </div>
    `
})
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
