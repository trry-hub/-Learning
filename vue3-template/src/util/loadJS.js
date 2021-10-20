/**
 * 人际验证注入js
 */
export function initTCaptcha() {
    return new Promise((resolve, reject) => {
        if (window.TencentCaptcha) {
            resolve(true)
        } else {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.async = true
            script.src = 'https://ssl.captcha.qq.com/TCaptcha.js'
            script.onerror = reject
            script.onload = function() {
                resolve(true)
            }
            document.head.appendChild(script)
            return
        }
    })
}
