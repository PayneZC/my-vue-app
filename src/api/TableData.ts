/*
 * @Description: 电子表格全部数据类型数据类型
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-10-24 14:37:46
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-25 13:38:18
 * @FilePath: /my-vue-app/src/api/TableData.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */

/**
 * 电子表格主表数据
 */
export interface TableData {
  id?: string, // 主键ID
  procInsId?: string, // 流程实例ID
  tableName?: string, // 表格名称
  creatUser?: string, // 表格创建人
  creatDate?: string | object, // 创建时间
  lastUpDate?: string, // 最后修改时间
  lastUpUser?: string, // 最后更新人
  secret?: string, // 表格密级
  remark?: string, // 表格相关说明
  members?: string // 协同编辑人员 （暂时用字符串拼接）
}

/**
 * 电子表格sheet页数据
 */
export interface SheetData {
  id?: string, // 主键ID
  tableId?: string, // 表格主键ID
  name?: string, //工作表名称
  color?: string, // 工作表颜色
  index?: string, // 工作表索引（同主键）
  status?: number, // 工作表激活状态 1/激活0/未激活
  order?: number, // 工资表的下标（排序）
  hide?: number, // 是否隐藏1/隐藏0/不隐藏
  row?: number, // 行数
  colum?: number, // 列数
  defaultRowHeight?: number, // 自定义行高
  defaultColWidth?: number, // 自定义列宽
  celldata?: string, // 初始化使用的单元格数据
  config?: string, // 表格配置数据
  scrollLeft?: number, // 左右滚动条位置
  scrollTop?: number, // 上下滚动条位置
  luckysheet_select_save?: string, // 选中的区域
  calcChain?: string, // 公式链
  isPivotTable?: string, // 是否数据透视表
  pivotTable?: string, // 数据透视表设置
  filter_select?: string, // 筛选范围
  filter?: string, // 筛选配置
  luckysheet_alternateformat_save?: string, // 交替颜色
  luckysheet_alternateformat_save_modelCustom?: string, // 自定义交替颜色
  luckysheet_conditionformat_save?: string, // 条件格式
  frozen?: string, // 冻结行列配置
  chart?: string, // 图表配置
  zoomRatio?: number, // 缩放比例 默认1，为0~1之间的二位小数数字。比如0.1、0.56
  image?: string, // 图片
  showGridLines?: number, // 是否显示网格线;1表示显示，0表示隐藏
  dataVerification?: string // 数据验证配置
}

/**
 * 电子表格协同参与人数据
 */
export interface TableMembers {
  id?: string, // 主键ID
  tableId?: string, // 表格主键id
  memberId?: string, // 用户userAccount
  lastUpDate?: string, // 最后编辑时间
  lastUpContent?: string, // 最后编辑内容
  editPermission?: string // 编辑全新 1有权限，0只读
}