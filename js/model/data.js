/**
 * This class is created for adding methods include:
 * 1. Create property array, manage the data of staff: arr
 * 2. delete() staff from data
 * 3. modify() staff from data
 * 4. update() staff from data
 * 5. search() staff from data
 * 6. findIndex() of staff from data
 * 7. setLocaleSto() set data to Locale Storage
 * 8. getLocalSto() get data from Locale Storage
 * 9. renderTable() render table when delete, modify, update...
 */
class Data {
    /**
     * this method for storing data of staff
     */
    arr = [];
    /**
     * Adding new staff acount in to the data        
     * @param {object} staff create const staff = new Staff(para1,para2,...)
     */
    add(staff) {
        this.arr.push(staff);
        this.setLocalSto();
        this.getLocalSto();
    }
    /**
     * this property is used to get old account when update information
     */
    oldAcco = 0;
    /**
     * Delete acount from data   
     * @param {*} acco acount from data
     */
    delete(acco) {
        let index = this.findIndex(acco);
        window.alert(`Đã xóa name: ${this.arr[index]["name"]} id: ${this.arr[index]["acco"]}`)
        this.arr.splice(index, index + 1);
        this.setLocalSto();
        this.getLocalSto();
        this.renderTable(this.arr);
    }
    /**
     * Modify acount from data  
     * @param {*} acco acount from data
     */
    modify(acco) {
        
        document.getElementById("btnThemNV").style.display = "none";
        document.getElementById("btnCapNhat").style.display = "inline-block";
        let index = this.findIndex(acco);
        const hel = new Helper();
        hel.getEle("tknv").value = this.arr[index]["acco"];
        hel.getEle("name").value = this.arr[index]["name"];
        hel.getEle("email").value = this.arr[index]["email"];
        hel.getEle("password").value = this.arr[index]["pass"];
        hel.getEle("datepicker").value = this.arr[index]["dayW"];
        hel.getEle("luongCB").value = this.arr[index]["sala"];
        hel.getEle("chucvu").value = this.arr[index]["posi"];
        hel.getEle("gioLam").value = this.arr[index]["timeW"];
        this.oldAcco = this.arr[index]["acco"];
        const val = new Validate();
        val.accept("tknv");
        val.accept("name");
        val.accept("email");
        val.accept("password");
        val.accept("datepicker");
        val.accept("luongCB");
        val.accept("chucvu");
        val.accept("gioLam");
    }
    /**
     * Update staff for database    
     * @param {*} acco string
     * @param {*} staff object
     */
    update(acco, staff) {
        let index = this.findIndex(this.oldAcco);
        // console.log();
        // console.log(acco);
        this.arr.splice(index, 1, staff);
        this.setLocalSto();
        this.getLocalSto();
        this.renderTable(this.arr);
        document.getElementById("btnThemNV").style.display = "block";
        document.getElementById("btnCapNhat").style.display = "none";
    }
    /**
     * Search a char in object.type and render table in the end
     * @param {*} char char on the even keyup
     * @returns return nothing when array is null
     */
    search(char) {
        if (this.arr == null) return
        const searchArray = [];
        let charLowerCase = char.toLowerCase();
        for (let index = 0; index < this.arr.length; index++) {
            const element = this.arr[index];
            const elementLowerCase = element["type"].toLowerCase();
            if (elementLowerCase.search(charLowerCase) !== -1) {
                searchArray.push(element)

            }
        }
        this.renderTable(searchArray);
    }
    /**
     * Looking for an the position of the acount
     * @param {*} acco acount in the object
     * @returns the index of an array: arr
     */
    findIndex(acco) {
        let index = -1;
        if (this.array === null) return
        for (let i = 0; i < this.arr.length; i++) {
            const element = this.arr[i];
            if (element["acco"] === acco) {
                index = i;
                break
            }

        }
        return index;
    }
    /**
     * set Locale storage by window object for the next time render
     */
    setLocalSto() {
        const json = JSON.stringify(this.arr);
        window.localStorage.setItem("data", json);

    }
    /**
   * get Locale storage by window object for the next time render
   */
    getLocalSto() {

        const item = window.localStorage.getItem("data");
        const string = JSON.parse(item);
        if (string == null) return
        this.arr = string;
    }
    /**
     * render table for html document
     * @param {*} array this.arr
     */
    renderTable(array) {
        let content = "";
        if (array.length == 0) {
            document.getElementById("tableDanhSach").innerHTML = `<tr></tr>`;
        }
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            content += `
            <tr>
                <td>${element.acco}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.dayW}</td>
                <td>${element.posi}</td>
                <td>${element.totalSalary}</td>
                <td>${element.type}</td>
                <td class = "d-flex">
                <button class="btn btn-danger" onclick=data.delete("${element.acco}")>Xóa</button>
                <button class="btn btn-warning ml-1" data-toggle="modal" data-target="#myModal" onclick=data.modify("${element.acco}")>Sửa</button>
                </td>
            </tr>
            `
            document.getElementById("tableDanhSach").innerHTML = content;
        }
    }
}