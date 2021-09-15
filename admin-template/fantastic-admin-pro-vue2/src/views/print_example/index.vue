<template>
    <div>
        <page-header title="打印" content="基于 Print.js ，可打印 pdf, html, image, json 四种类型数据，更多参数说明请查看文档">
            <el-button icon="el-icon-link" @click="open('https://printjs.crabbly.com/')">Print.js 官网</el-button>
        </page-header>
        <page-main title="打印页面">
            <el-table id="printJS-form" :data="tableData" stripe border style="width: 100%;">
                <el-table-column prop="date" label="日期" width="180" />
                <el-table-column prop="name" label="姓名" width="180" />
                <el-table-column prop="address" label="地址" />
            </el-table>
            <el-alert title="因为打印页面元素是需要将样式存放在 @media print { } 里，不然打印出来是无样式效果，所以不建议使用在需要打印第三方组件的页面元素上，除非手动去设置打印样式" type="warning" show-icon :closable="false" style="margin: 10px 0;" />
            <el-button @click="print('html')">打印</el-button>
        </page-main>
        <page-main title="打印图片">
            <el-button @click="print('image')">打印</el-button>
        </page-main>
        <page-main title="打印JSON（推荐）">
            <el-button @click="print('json')">打印</el-button>
        </page-main>
    </div>
</template>

<script>
import printJS from 'print-js'

export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        print(type) {
            if (type == 'html') {
                printJS({
                    printable: 'printJS-form',
                    type: 'html',
                    style: `
                        @media print {
                            #printJS-form .el-table__body-wrapper {
                                border: 1px solid #000 !important;
                            }
                        }
                    `
                })
            } else if (type == 'image') {
                printJS({
                    printable: [
                        require('@/assets/images/login-bg.jpg'),
                        require('@/assets/images/login-bg.jpg')
                    ],
                    type: 'image',
                    imageStyle: 'width:50%;margin-bottom:20px;'
                })
            } else if (type == 'json') {
                let someJSONdata = [
                    {
                        name: 'John Doe',
                        email: 'john@doe.com',
                        phone: '111-111-1111'
                    },
                    {
                        name: 'Barry Allen',
                        email: 'barry@flash.com',
                        phone: '222-222-2222'
                    },
                    {
                        name: 'Cool Dude',
                        email: 'cool@dude.com',
                        phone: '333-333-3333'
                    }
                ]
                printJS({
                    printable: someJSONdata,
                    properties: ['name', 'email', 'phone'],
                    type: 'json',
                    gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
                    gridStyle: 'border: 2px solid #3971A5;'
                })
            }
        },
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>

<style lang="scss" scoped>
@media print {
    #printJS-form ::v-deep .el-table__body-wrapper {
        border: 1px solid #000 !important;
    }
}
</style>
