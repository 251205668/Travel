'use strict'
let defaultCity = '上海'
try {
    // 为了防止某些浏览器设置无痕模式 不能正常使用localStorage
    if (localStorage.city) {
        defaultCity = localStorage.city
    }

} catch (e) {

}
export default ({
    city: defaultCity
})