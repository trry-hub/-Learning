// const API_BASE_V1 = '/api'
const API_BASE_V2 = '/qxs-api'

export default {
    // 登录
    checkCaptcha: `${API_BASE_V2}/public/captcha/v1/check`, // 检查人机校验
    checkWxCodeResult: `${API_BASE_V2}/public/v1/pc/scan-login-check`, // 微信扫码登录查询结果
    getWxCodeImage: `${API_BASE_V2}/public/v1/pc/wx-qrcode`, // 微信扫码登录二维码 0 医生登录直播推流端; 1组织登录;2微信绑定；3微信换绑；4敏感支付操作；5 代表登录直播推流端; 6 医生登录web直播推流端;
    getMobileLogin: `${API_BASE_V2}/public/v1/mobile/login`, // 验证码登录

    // 课程管理
    courseList: `${API_BASE_V2}/speaker-manager/course-list`, // 查询讲者自己的课程列表
    courseSave: `${API_BASE_V2}/speaker-manager/course/save`, // 讲者创建/修改自己的课程
    submitAudit: `${API_BASE_V2}/speaker-manager/course/submit-audit`, // 讲者提交课程审批
    courseDetail: `${API_BASE_V2}/speaker-manager/course-detail`, // 讲者后台-查看课程详情
    courseRemove: `${API_BASE_V2}/speaker-manager/course/remove` // 讲者后台-删除课程
}
