/**
 * YÊU CẦU THỨ 3: TẠO ĐỐI TƯỢNG NHÂN VIÊN TỪ NGƯỜI DÙNG NHẬP VÀO
 * Staff class
 * acco: account,
 * name: name
 * email:email
 * pass: password
 * dayW: day working
 * sala: salary
 * posi: position
 * timeW: time working
 * totaS : total salary
 */
class Staff {
  constructor(acco, name, email, pass, dayW, sala, posi, timeW) {
    this.acco = acco;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.dayW = dayW;
    this.sala = sala;
    this.posi = posi;
    this.timeW = timeW;
    this.totalSalary = this.totalSalary();
    this.type = this.award();
  }
  /**
   * YÊU CẦU 5 :
   * Xây dựng phương thức tính tổng lương cho đối tượng nhân viên
+nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
+nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
+nếu chức vụ là nhân viên: tổng lương = lương cơ bản *
   */
totalSalary(){
  let salary = 0;
  switch (this.posi) {
    case "Sếp":
      salary = this.sala*3;
      break;
    case "Trưởng phòng":
      salary = this.sala*2;
      break;
    case "Nhân viên":
      salary = this.sala;
      break;
  
    default:
      salary = 0;
      break;
  }
  return salary
};
  /**
   * YÊU CẦU 6:
   * Xây dựng phương thức xếp loại cho đối tượng nhân viên:
  +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
  +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
  +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
  +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình
   */
  award() {
    if (this.timeW > 192) {
      return "Nhân viên xuất sắc."
    } else if (this.timeW >= 176 && this.timeW <= 192) {
      return "Nhân viên giỏi."
    } else if (this.timeW >= 160 && this.timeW < 176) {
      return "Nhân viên khá."
    } else if (this.timeW < 160) {
      return "Nhân viên trung bình."
    } else {
      return "Xếp loại không tìm thấy."
    }
  }
 
}