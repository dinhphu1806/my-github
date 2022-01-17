const sideBars = document.querySelectorAll('.js-side-bar')
const modalSidebar = document.querySelector('.js-modalSidebar')
const modalSidebarContainer = document.querySelector('.js-modalSidebar-container')
const modalSidebarClose = document.querySelector('.js-modalSidebar-close')
function showSidebar(){ // hàm bật hiển thị modalSidebar
    modalSidebar.classList.add('open')
}
function hideSidebar(){  // hàm ẩn modalSidebar
    modalSidebar.classList.remove('open')
}
for(const sideBar of sideBars){
    sideBar.addEventListener('click', showSidebar)
}
// tác động vào nút close rồi đóng
modalSidebarClose.addEventListener('click', hideSidebar)

modalSidebar.addEventListener('click', hideSidebar)

modalSidebarContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
