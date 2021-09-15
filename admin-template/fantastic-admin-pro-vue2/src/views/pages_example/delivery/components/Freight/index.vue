<template>
    <div>
        <el-table v-if="!(readonly && data.length == 0)" v-show="data.length != 0" :data="data" border class="freight">
            <el-table-column label="运送到">
                <template slot-scope="scope">
                    <div v-if="readonly">
                        <el-tag v-for="(item, index) in scope.row.list" :key="index" type="info">{{ getProvinceByCode(item) }}</el-tag>
                    </div>
                    <el-row v-else type="flex" align="middle">
                        <el-col>
                            <el-tag v-for="(item, index) in scope.row.list" :key="index" :disable-transitions="true" type="info" closable @close="deleteSingleFreight(scope.$index, item)">{{ getProvinceByCode(item) }}</el-tag>
                        </el-col>
                        <el-col style="width: 100px; text-align: right;">
                            <el-button size="small" plain @click="editFreight(scope.$index)">编 辑</el-button>
                        </el-col>
                    </el-row>
                </template>
            </el-table-column>
            <el-table-column :label="type == 1 ? '首件数（件）' : '首重量（kg）'" width="150" align="center">
                <template slot-scope="scope">
                    <span v-if="readonly">{{ scope.row.first_step }}</span>
                    <el-input v-else v-model="scope.row.first_step" v-format-int size="small" />
                </template>
            </el-table-column>
            <el-table-column label="首费（元）" width="150" align="center">
                <template slot-scope="scope">
                    <span v-if="readonly">{{ scope.row.first_price }}</span>
                    <el-input v-else v-model="scope.row.first_price" v-format-price size="small" />
                </template>
            </el-table-column>
            <el-table-column :label="type == 1 ? '续件数（件）' : '续重量（kg）'" width="150" align="center">
                <template slot-scope="scope">
                    <span v-if="readonly">{{ scope.row.continued_step }}</span>
                    <el-input v-else v-model="scope.row.continued_step" v-format-int size="small" />
                </template>
            </el-table-column>
            <el-table-column label="续费（元）" width="150" align="center">
                <template slot-scope="scope">
                    <span v-if="readonly">{{ scope.row.continued_price }}</span>
                    <el-input v-else v-model="scope.row.continued_price" v-format-price size="small" />
                </template>
            </el-table-column>
            <el-table-column v-if="!readonly" label="操作" width="100" align="center">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" plain @click="deleteFreight(scope.$index)">删 除</el-button>
                </template>
            </el-table-column>
            <template slot="empty">
                <span />
            </template>
            <template slot="append">
                <div v-if="!readonly" style="padding: 10px;">
                    <el-button type="primary" size="small" plain style="width: 100%;" @click="showFreightDialog">新增一条运费模版</el-button>
                </div>
            </template>
        </el-table>
        <el-button v-if="!readonly" v-show="data.length == 0" type="primary" size="small" plain @click="showFreightDialog">为指定地区设置运费模版</el-button>
        <el-dialog :visible.sync="dialog.visible" title="选择地区" width="800px" class="freight-dialog" append-to-body @closed="dialog.filter = ''">
            <div class="filter">
                <el-radio-group v-model="dialog.filter" size="small">
                    <el-radio-button label="">全部</el-radio-button>
                    <el-radio-button label="north">华北地区</el-radio-button>
                    <el-radio-button label="northeast">东北地区</el-radio-button>
                    <el-radio-button label="east">华东地区</el-radio-button>
                    <el-radio-button label="central">华中地区</el-radio-button>
                    <el-radio-button label="south">华南地区</el-radio-button>
                    <el-radio-button label="southwest">西南地区</el-radio-button>
                    <el-radio-button label="northwest">西北地区</el-radio-button>
                    <el-radio-button label="autonomousRegion">自治区</el-radio-button>
                    <el-radio-button label="provinceLevelCity">直辖市</el-radio-button>
                </el-radio-group>
            </div>
            <el-checkbox-group v-model="dialog.checkList" style="margin-left: 50px;">
                <el-row>
                    <el-col v-for="(item, index) in province" :key="index" :span="6">
                        <el-checkbox :label="item.code" :disabled="dialog.disableList.includes(item.code)">{{ item.name }}</el-checkbox>
                    </el-col>
                </el-row>
            </el-checkbox-group>
            <span slot="footer">
                <el-button type="primary" @click="freightDialogSubmit(dialog.index)">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import area from '@/util/area'

export default {
    props: {
        readonly: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: function() {
                return []
            }
        },
        type: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            dialog: {
                index: '',
                visible: false,
                filter: '',
                checkList: [],
                disableList: []
            }
        }
    },
    computed: {
        province() {
            let arr
            switch (this.dialog.filter) {
                case '':
                    arr = area
                    break
                case 'autonomousRegion':
                    arr = area.filter(item => item.autonomousRegion)
                    break
                case 'provinceLevelCity':
                    arr = area.filter(item => item.provinceLevelCity)
                    break
                default:
                    arr = area.filter(item => item.region == this.dialog.filter)
            }
            return arr
        }
    },
    created() {},
    mounted() {},
    methods: {
        // 显示省份勾选对话框
        showFreightDialog() {
            this.dialog.index = ''
            this.dialog.checkList = []
            this.dialog.disableList = this.getDisableProvinceList()
            this.dialog.visible = true
        },
        freightDialogSubmit(index) {
            if (this.dialog.checkList.length === 0) {
                this.$message({
                    message: '请勾选区域',
                    type: 'warning'
                })
            } else {
                let data = this.data
                if (index !== '') {
                    data[index].list = this.dialog.checkList
                } else {
                    data.push({
                        list: this.dialog.checkList,
                        first_step: '',
                        first_price: '',
                        continued_step: '',
                        continued_price: ''
                    })
                }
                this.$emit('update:data', data)
                this.dialog.visible = false
            }
        },
        // 编辑运费模版
        editFreight(index) {
            this.dialog.index = index
            this.dialog.checkList = this.data[index].list
            this.dialog.disableList = this.getDisableProvinceList(index)
            this.dialog.visible = true
        },
        // 删除运费模版
        deleteFreight(index) {
            let data = this.data
            data.splice(index, 1)
            this.$emit('update:data', data)
        },
        // 删除运费模版里的某个省份
        deleteSingleFreight(index, code) {
            let data = this.data
            data[index].list.splice(data[index].list.indexOf(code), 1)
            if (data[index].list.length === 0) {
                data.splice(index, 1)
            }
            this.$emit('update:data', data)
        },
        // 根据code显示名称，用于运费模版表格内展示
        getProvinceByCode(code) {
            let name = ''
            for (const key in area) {
                if (area[key].code === code) {
                    name = area[key].name
                }
            }
            return name
        },
        getDisableProvinceList(index) {
            let arr = []
            for (let key = 0; key < this.data.length; key++) {
                if (index !== key) {
                    arr = arr.concat(this.data[key].list)
                }
            }
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
.freight {
    margin-bottom: 10px;
    ::v-deep .el-tag {
        margin: 2px;
    }
    ::v-deep .el-input__inner {
        text-align: center;
    }
    ::v-deep .el-table__empty-block {
        min-height: inherit;
    }
}
.freight-dialog {
    .filter {
        text-align: center;
        margin-bottom: 20px;
    }
    ::v-deep .el-row {
        margin-bottom: 10px;
        .el-col {
            margin: 5px 0;
        }
    }
}
</style>
