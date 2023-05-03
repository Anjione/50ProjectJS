let progress = document.getElementById('progress')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circles = document.querySelectorAll('.circle')

let currentActive = 1

//Kiểm tra vị trí đang active khi nhấn next
next.addEventListener('click', () => {
    currentActive++
    console.log("check-----", currentActive)
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

//Kiểm tra vị trí đang active khi nhấn prev
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }

    update()
})

//Hàm cập nhật trạng thái
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
        let actives = document.querySelectorAll('.active')

        //Thay đổi width của thanh progress
        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

        //Set trạng thái cho button (disabled: true/false)
        if (currentActive === 1) {
            prev.disabled = true
        } else if (currentActive === circles.length) {
            next.disabled = true
        } else {
            prev.disabled = false
            next.disabled = false
        }
    })
}



