    const bookBtns = document.querySelectorAll('.js-book-now-ticket') /*js-book-now-ticket được lưu vào biến bookBtns*/ /*lấy js-book-now-ticket từ btn*/
                                            // nếu id dùng #, class dùng .
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose = document.querySelector('.js-modal-close')

    function showBookTickets(){ // hàm bật modal,   // hàm hiển thị modal mua vé(thêm class open vào modal)
        modal.classList.add('open')
    // alert("Hi chào cậu !")
    }
    function hideBookTickets(){   // hàm ẩn modal mua vé(gỡ bot class open vào modal)
        modal.classList.remove('open')
    }
    // vòng lặp qua từng thẻ button và nghe hành vi click
    for(const bookBtn of bookBtns){   // tạo biến mới bookBtn được lưu lần lượt n nút btn
    bookBtn.addEventListener('click', showBookTickets) // addEventListener thêm sự kiện click để lắng nghe ,,truyền chuỗi truyền vào hàm showBookTickets
    // tức là khi click vào nút bookBtn(or có nhiều nút trên) thì addEventListener sẽ nghe được và biết được việc bạn click vào
    // trước dấu phẩy là tên hành vi, sau dấu phẩy là hàm sẽ được gọi hành vi xảy ra
    }
    modalClose.addEventListener('click', hideBookTickets)  // nghe hành vi click vào button close

    modal.addEventListener('click', hideBookTickets) // click ra bên bên ngoài sẽ đóng nhưng khi click vào been trong modal thì lại đóng

    //click ra ngoài de tắt modal tất cả (dùng )
    modalContainer.addEventListener('click', function (event) { // hàm có biến event, không cần gọi hàm ra như trên
        event.stopPropagation()   //event làm ngăn chặn hành vi mặc định
    })