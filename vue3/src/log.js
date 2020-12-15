// window.consoleParams = {
//     hideLog: false, // default false
//     color: '#58baff', // default '#58baff'
//     fontSize: '16px', // default '12px'
//     height: 50, // default 50
//     backgroundUrl: 'http://img.soogif.com/oTaaBm2f12ro2oHYt8MXO7ucTZ9LFDff.gif_s400x0' // default Array
// }

window.log = console.log = (function(originFunc) {
    return function() {
        if (window.consoleParams && window.consoleParams.hideLog) return // 生产环境不显示log
        let showType
        let tempStr
        let resArgs
        let backgroundUrl
        let backgroundUrlArr = [
            'http://img.soogif.com/oTaaBm2f12ro2oHYt8MXO7ucTZ9LFDff.gif_s400x0',
            'http://i687.photobucket.com/albums/vv237/4-one/4-1/ICON-4/nhj-ks-114.gif',
            'http://q.qqbiaoqing.com/q/2016/08/31/6249acc01f000b9f5035e2ae3d786e1c.gif',
            'http://q.qqbiaoqing.com/q/2016/09/30/4401f0bd2a752c171141bd293dd53cf9.gif',
            'http://q.qqbiaoqing.com/q/2013/07/08/1c7900035a1b63435f4b5ea4b7a99632.gif',
            'http://q.qqbiaoqing.com/q/2016/10/04/2c00341f4ac8c036a5370a372a21c7f1.gif',
            'http://q.qqbiaoqing.com/q/2016/11/09/55a2a87f7374e6c0e368338916553607.gif',
            'http://q.qqbiaoqing.com/q/2014/01/11/9f22ca6ad1a314c4e09ba00db936e18a.gif',
            'http://q.qqbiaoqing.com/q/2016/09/05/2177d7400bc5cf2c9486a94a0bbb07bc.gif',
            'http://q.qqbiaoqing.com/q/2016/09/07/36617726c78632464fb9e5ee90666a7c.gif'
        ]
        let params = Array.prototype.slice.call(arguments) // 保存arguments数组，有push方法
        let color =
            (window.consoleParams && window.consoleParams.color) || '#58baff'
        let fontSize =
            (window.consoleParams && window.consoleParams.fontSize) || '12px'
        if (window.consoleParams && window.consoleParams.url) {
            backgroundUrl = window.consoleParams && window.consoleParams.url
        } else {
            backgroundUrl =
                backgroundUrlArr[parseInt(Math.floor(Math.random() * 10))]
        }
        let backgroundHeightSize =
            (window.consoleParams && window.consoleParams.height) || 50

        let iconStyle =
            'line-height: ' +
            backgroundHeightSize +
            'px; padding: ' +
            backgroundHeightSize / 2 +
            'px 10px ' +
            backgroundHeightSize / 2 +
            'px ' +
            backgroundHeightSize +
            'px; color: ' +
            color +
            '; font-size: ' +
            fontSize +
            '; background: url(' +
            backgroundUrl +
            ') no-repeat left center; background-size: auto ' +
            backgroundHeightSize +
            'px'
        let args = ['%c', iconStyle]

        if (!params.length) {
            args[0] = '%c ' + '(请输入要打印的值...)'
            resArgs = args
        } else {
            params.some(p => {
                if (
                    typeof p !== 'string' &&
                    typeof p !== 'number' &&
                    typeof p !== 'boolean'
                ) {
                    if (p.constructor === Array) {
                        showType = 3
                    } else if (p.constructor === Object) {
                        showType = 2
                    }
                    return false
                }
                showType = 1
            })
            if (showType === 1) {
                for (let i = 0; i < params.length; i++) {
                    if (typeof params[i] === 'string') {
                        params[i] = '"' + params[i] + '"'
                    }
                }
                tempStr = params.join(' ')
                args[0] = '%c ' + tempStr
                resArgs = args
            } else if (showType === 2) {
                // 打印的是对象
                window.data = params
                console.warn('该数据为对象，请使用table(data)查看数据！')
            } else if (showType === 3) {
                // 打印的是数组
                console.table(params)
            } else {
                resArgs = args.concat(params)
            }
        }
        originFunc.apply(console, resArgs)
    }
})(console.log)
