/**
 * VALIDATE for the input
 * ----------dấu / / thay cho dấu ""----------------
 *  regex = /./; khớp với bất cứ ký tự nào ngoại trừ xuống dòng. String("hello").match(regex);
 *  regex = /abc/; khớp đúng với chuỗi abc. String("hello").match(regex);
 *  regex = /[abc]/; khớp với bất cứ ký tự nào trong tập hợp , [] là tập hợp. String("hello").match(regex);
 *  regex = /[^b]/; khớp với bất cứ ký tự nào miễn sao không phải là b
 *  regex = /[^b]an/; an cộng thêm tiền tố là gì cũng được miễn sao ko phải là b
 *  regex = /\s*ngoc\s* /               // tìm chữ ngọc, \ là biễu diễn đi theo sau là ký tự, s là space, * đi trước nó là lặp lại.
 *  regex = /(.*)/ tìm bất cứ chuỗi nào
 *  regex = /có.+!/ dấu + có nghĩa là ít nhất 1 lần, 
 */
class Validate {
    /**
     * validate input
     * @param {string} id of the element
     * @param {reges string} pattern for checking
     * @param {string} mess for error
     * @returns flat: boolean
     */
    vali(id,pattern,mess){
        const value = document.getElementById(id).value;
        
        if (pattern.test(value)) {
            this.accept(id)
            return true
        } 
        this.err(id,mess)
        return false
    }
    /**
     * checking acount is exsit or not
     * @param {string} id of the element
     * @param {array} array 
     * @param {string} errText message err
     * @returns flat: true false    
     */
    checkAccount(id,array,errText){
        const acco = document.getElementById(id).value;
        if(array === null) return
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (acco===element["acco"]) {
                this.err(id,errText)
                return true
            }
        }
        this.accept(id);
        return false
    }
    /**
     * Show message error
     * @param {} id of element
     * @param {*} errText mess when erro
     * @returns nothing, stop function
     */
    err(id, errText) {
        let father = document.getElementById(id).parentElement;
        let grandFather = father.parentElement;
        let childElement = grandFather.children;
        let isError = false;
        for (let i = 0; i < childElement.length; i++) {
            let element = childElement[i];
            if (element.nodeName === "P") {
                isError = true;
                break
            }
        }
        if (isError) return
        let element = document.createElement("p");
        let node = document.createTextNode(errText);
        element.appendChild(node);
        element.setAttribute("class","text-danger");
        grandFather.appendChild(element);
        return;
    }
    /**
     * Hide element
     * @param {*} id of element
     */
    accept(id) {
        let father = document.getElementById(id).parentElement;
        let grandFather = father.parentElement;
        let childElement = grandFather.children;
        for (let i = 0; i < childElement.length; i++) {
            let element = childElement[i];
            if (element.nodeName === "P") {
                element.remove();
                break
            }
        }
    }

}
