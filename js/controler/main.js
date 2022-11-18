/**
 * instace helper for main.js
 */
const hel = new Helper();
const data = new Data();
const val = new Validate();
//setup when create
data.getLocalSto();
data.renderTable(data.arr);
document.getElementById("btnThemNV").style.display = "block";
document.getElementById("btnCapNhat").style.display = "none";

// addeventlistener
hel.getEle("btnThem").onclick = () => {
    document.getElementById("btnThemNV").style.display = "inline-block";
    document.getElementById("btnCapNhat").style.display = "none";
    hel.getEle("tknv").value = "";
    hel.getEle("name").value = "";
    hel.getEle("email").value = "";
    hel.getEle("password").value = "";
    hel.getEle("datepicker").value = "";
    hel.getEle("luongCB").value = "";
    hel.getEle("chucvu").value = "Chọn chức vụ";
    hel.getEle("gioLam").value = "";
}
hel.getEle("btnThemNV").onclick = () => {

    let flat = true;
    const acount = val.vali("tknv", /^[0-9]{4,6}$/, "Tài khoản tối đa 4 - 6 ký số, không để trống");
    const name = val.vali("name", /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/, "Tên nhân viên phải là chữ, không để trống");
    const email = val.vali("email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email phải đúng định dạng, không để trống");
    const password = val.vali("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/, "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống");
    const datepicker = val.vali("datepicker", /^(0?[1-9]|[12][0-9]|3[01])[\/\-]|(0?[1-9]|1[012])\d{4}$/, "Ngày làm không để trống, định dạng mm/dd/yyyy");
    const salary = val.vali("luongCB", /\b([1-9][0-9][0-9][0-9][0-9][0-9][0-9]|1[0-9][0-9][0-9][0-9][0-9][0-9][0-9]|20000000)\b/, "Lương cơ bản 1 000 000 - 20 000 000, không để trống");
    const position = val.vali("chucvu", /(Sếp|Trưởng phòng|Nhân viên)/, "Chức vụ phải chọn chức vụ hợp lệ");
    const timeworking = val.vali("gioLam", /\b([8-9][0-9]|1[0-9][0-9]|200)\b/, "Số giờ làm trong tháng 80 - 200 giờ, không để trống")
    flat &&= acount;
    flat &&= name;
    flat &&= email;
    flat &&= password;
    flat &&= datepicker;
    flat &&= salary;
    flat &&= position;
    flat &&= timeworking;
    if (!flat) return;
    const acountRepeat = val.checkAccount("tknv", data.arr, "Tài khoản bị trùng");
    if (acountRepeat) return
    const staff = new Staff(
        hel.getValEle("tknv"),
        hel.getValEle("name"),
        hel.getValEle("email"),
        hel.getValEle("password"),
        hel.getValEle("datepicker"),
        hel.getValEle("luongCB"),
        hel.getValEle("chucvu"),
        hel.getValEle("gioLam")
    )
    data.add(staff);
    data.renderTable(data.arr);
    // hel.getEle("myModal").style.display = "none";
    $('#myModal').modal('hide');
    alert("Thêm thành công");
}
hel.getEle("btnCapNhat").onclick = () => {

    let flat = true;
    const acount = val.vali("tknv", /^[0-9]{4,6}$/, "Tài khoản tối đa 4 - 6 ký số, không để trống");
    const name = val.vali("name", /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/, "Tên nhân viên phải là chữ, không để trống");
    const email = val.vali("email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email phải đúng định dạng, không để trống");
    const password = val.vali("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/, "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống");
    const datepicker = val.vali("datepicker", /^(0?[1-9]|[12][0-9]|3[01])[\/\-]|(0?[1-9]|1[012])\d{4}$/, "Ngày làm không để trống, định dạng mm/dd/yyyy");
    const salary = val.vali("luongCB", /\b([1-9][0-9][0-9][0-9][0-9][0-9][0-9]|1[0-9][0-9][0-9][0-9][0-9][0-9][0-9]|20000000)\b/, "Lương cơ bản 1 000 000 - 20 000 000, không để trống");
    const position = val.vali("chucvu", /(Sếp|Trưởng phòng|Nhân viên)/, "Chức vụ phải chọn chức vụ hợp lệ");
    const timeworking = val.vali("gioLam", /\b([8-9][0-9]|1[0-9][0-9]|200)\b/, "Số giờ làm trong tháng 80 - 200 giờ, không để trống")
    flat &&= acount;
    flat &&= name;
    flat &&= email;
    flat &&= password;
    flat &&= datepicker;
    flat &&= salary;
    flat &&= position;
    flat &&= timeworking;
    if (!flat) return;
    const staff = new Staff(
        hel.getValEle("tknv"),
        hel.getValEle("name"),
        hel.getValEle("email"),
        hel.getValEle("password"),
        hel.getValEle("datepicker"),
        hel.getValEle("luongCB"),
        hel.getValEle("chucvu"),
        hel.getValEle("gioLam")
    )
    data.update(hel.getValEle("tknv"), staff)
    // data.renderTable(data.arr);
    $('#myModal').modal('hide');
    alert("Cập nhật thành công");
}

document.getElementById("searchName").onkeyup = () => {
    data.search(hel.getValEle("searchName"));
}

