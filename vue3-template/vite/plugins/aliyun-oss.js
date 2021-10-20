import vitePluginAliyunOss from 'vite-plugin-aliyun-oss'
// let fs = require('fs')

export default function createAliyunOss() {
    let AliyunOssConfig = {
        accessKeyId: 'LTAI5tAJF2prBCRd7FKeDcxf',
        accessKeySecret: 'jQsfVvIx1meFq8nHzMZsV1SIbKDT9f',
        bucket: 'qxs-academy-admin'
    }
    if (!(process.env.ENV_MODE === 'production' || process.env.ENV_MODE === 'test')) {
        return
    }

    try {
        // AliyunOssConfig = JSON.parse(fs.readFileSync('/opt/config/aliyunConfig.json'))
        // AliyunOssConfig.bucket = 'qxs-academy-admin'
    } catch (e) {
        console.log(e)
    }
    return vitePluginAliyunOss({
        ossFilePath: ['./dist/**', '!./dist/*.html'], // 上传哪个文件或文件夹  可以是字符串或数组
        dist: 'ksh', // 需要上传到oss上的给定文件目录
        // region: AliyunOssConfig.region,
        accessKeyId: AliyunOssConfig.accessKeyId,
        accessKeySecret: AliyunOssConfig.accessKeySecret,
        bucket: AliyunOssConfig.bucket,
        setHeaders: () => {
            console.log('WebpackAliyunOss uploading ........')
            // some operations to filePath
            // return false to use default header
            return {
                'Cache-Control': 'max-age=31536000'
            }
        }
    })
}
