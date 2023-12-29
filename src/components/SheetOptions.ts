/*
 * @Description:  luckySheet 表格基础配置文件
                可以在当前属性中设置前端表格的基本属性值，
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-10-30 13:34:41
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-15 10:22:51
 * @FilePath: \my-vue-app\src\components\SheetOptions.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */

/**
 * 自定义配置工具栏
 */
const showtoolbarConfig: Record<string, boolean> = {
    undoRedo: true, //撤销重做，注意撤消重做是两个按钮，由这一个配置决定显示还是隐藏
    paintFormat: true, //格式刷
    currencyFormat: true, //货币格式
    percentageFormat: true, //百分比格式
    numberDecrease: true, // '减少小数位数'
    numberIncrease: true, // '增加小数位数
    moreFormats: true, // '更多格式'
    font: true, // '字体'
    fontSize: true, // '字号大小'
    bold: true, // '粗体 (Ctrl+B)'
    italic: true, // '斜体 (Ctrl+I)'
    strikethrough: true, // '删除线 (Alt+Shift+5)'
    underline: true, // '下划线 (Alt+Shift+6)'
    textColor: true, // '文本颜色'
    fillColor: true, // '单元格颜色'
    border: true, // '边框'
    mergeCell: true, // '合并单元格'
    horizontalAlignMode: true, // '水平对齐方式'
    verticalAlignMode: true, // '垂直对齐方式'
    textWrapMode: true, // '换行方式'
    textRotateMode: true, // '文本旋转方式'
    image: true, // '插入图片'
    link: true, // '插入链接'
    chart: true, // '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）
    postil: true, //'批注'
    pivotTable: true, //'数据透视表'
    function: true, // '公式'
    frozenMode: true, // '冻结方式'
    sortAndFilter: true, // '排序和筛选'
    conditionalFormat: true, // '条件格式'
    dataVerification: true, // '数据验证'
    splitColumn: true, // '分列'
    screenshot: true, // '截图'
    findAndReplace: true, // '查找替换'
    protection: true, // '工作表保护'
    print: true, // '打印'
};

/**
 * 自定义配置底部sheet页
 */
const showsheetbarConfig: Record<string, boolean> = {
    add: true, // 新增sheet
    menu: true, // sheet管理菜单
    sheet: true, // sheet页显示
};

/**
 * 自定义配置底部计数栏
 */
const showstatisticBarConfig: Record<string, boolean> = {
    count: true, // 计数栏
    view: true, // 打印视图
    zoom: true, // 缩放
};

/**
 * 自定义单元格右键菜单
 */
const cellRightClickConfig: Record<string, boolean> = {
    copy: true, // 复制
    copyAs: true, // 复制为
    paste: true, // 粘贴
    insertRow: true, // 插入行
    insertColumn: true, // 插入列
    deleteRow: true, // 删除选中行
    deleteColumn: true, // 删除选中列
    deleteCell: true, // 删除单元格
    hideRow: true, // 隐藏选中行和显示选中行
    hideColumn: true, // 隐藏选中列和显示选中列
    rowHeight: true, // 行高
    columnWidth: true, // 列宽
    clear: true, // 清除内容
    matrix: true, // 矩阵操作选区
    sort: true, // 排序选区
    filter: true, // 筛选选区
    chart: true, // 图表生成
    image: true, // 插入图片
    link: true, // 插入链接
    data: true, // 数据验证
    cellFormat: true, // 设置单元格格式
};

/**
 * 自定义sheet页右击菜单
 */
const sheetRightClickConfig: Record<string, boolean> = {
    delete: true, // 删除
    copy: true, // 复制
    rename: true, //重命名
    color: true, //更改颜色
    hide: true, //隐藏，取消隐藏
    move: true, //向左移，向右移
};

/**
 * 初始化表格数据（不写默认初始化3个空sheet页，对象内属性不配置。配置loadUrl则无需在前台配置）
 * *** 前端测试数据格式时使用 ***
 */
const data: Record<string, any>[] = [
    {
        name: 'Sheet1', //工作表名称
        color: '', //工作表颜色
        index: '0', //工作表索引
        status: 1, //激活状态
        order: 0, //工作表的下标
        hide: 0, //是否隐藏
        row: 36, //行数
        column: 18, //列数
        defaultRowHeight: 19, //自定义行高
        defaultColWidth: 73, //自定义列宽
        celldata: [], //初始化使用的单元格数据， 格式[{r:0,c:0,v:{m:"value",v:"value",ct: {fa: "General", t: "g"}}}]
        config: {
            merge: {}, //合并单元格
            rowlen: {}, //表格行高
            columnlen: {}, //表格列宽
            rowhidden: {}, //隐藏行
            colhidden: {}, //隐藏列
            borderInfo: {}, //边框
            authority: {}, //工作表保护
        },
        scrollLeft: 0, //左右滚动条位置
        scrollTop: 315, //上下滚动条位置
        luckysheet_select_save: [], //选中的区域
        calcChain: [], //公式链
        isPivotTable: false, //是否数据透视表
        pivotTable: {}, //数据透视表设置
        filter_select: {}, //筛选范围
        filter: null, //筛选配置
        luckysheet_alternateformat_save: [], //交替颜色
        luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
        luckysheet_conditionformat_save: {}, //条件格式
        frozen: {}, //冻结行列配置
        chart: [], //图表配置
        zoomRatio: 1, // 缩放比例
        image: [], //图片
        showGridLines: 1, //是否显示网格线
        dataVerification: {}, //数据验证配置

        // 以下属性在初始化时无需配置
        visibledatarow: [], //所有行的位置
        visibledatacolumn: [], //所有列的位置
        ch_width: 2322, //工作表区域的宽度
        rh_height: 949, //工作表区域的高度
        load: '1', //已加载过此sheet的标识
        // "data": [], //更新和存储使用的单元格数据，初始化时从celldata转换而来
    },
];

/**
 * 表格hook事件
 */
const hook: Record<string, any> = {
    /**
     * @description 进入单元格编辑模式之前触发。在选中了某个单元格且在非编辑状态下，通常有以下三种常规方法触发进入编辑模式
     *              ·双击单元格
     *              ·敲Enter键
     *              ·使用API：enterEditMode
     * @param range {array} 当前选区范围
     * @return void
     */
    cellEditBefore: (range: Array<any>): void => {
        console.log('range ===>>> ', range);
    },
    /**
     * @description 更新这个单元格值之前触发，return false 则不执行后续的更新。
     *              在编辑状态下修改了单元格之后，退出编辑模式并进行数据更新之前触发这个钩子
     * @param r 单元格所在行数
     * @param c 单元格所在列数
     * @param value 要修改的单元格内容 {Object | String | Number}
     * @param isRefresh 是否刷新整个表格
     * @return void | boolean
     */
    cellUpdateBefore: (r: number, c: number, value: object | string | number, isRefresh: boolean): void | boolean => {
        console.log('r===>>>', r);
        console.log('c===>>>', c);
        console.log('value===>>>', value);
        console.log('isRefresh===>>>', isRefresh);
        // return false
    },
    /**
     * @description 更新这个单元格值之后触发。
     * @param r 单元格所在行数
     * @param c 单元格所在列数
     * @param oldValue 修改前的单元格对象
     * @param newValue 修改后的单元格对象
     * @param isRefresh 是否刷新整个表格
     * @return void
     */
    cellUpdated: (r: number, c: number, oldValue: object, newValue: object, isRefresh: boolean): void => {
        console.log('r===>>>', r);
        console.log('c===>>>', c);
        console.log('oldValue===>>>', oldValue);
        console.log('newValue===>>>', newValue);
        console.log('isRefresh===>>>', isRefresh);
    },

    /**
     * @description 单元格渲染前触发，return false 则不渲染该单元格.
     * @param cell 单元格对象
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [c]:单元格所在列号
     *          {Number} [start_r]:单元格左上角的水平坐标
     *          {Number} [start_c]:单元格左上角的垂直坐标
     *          {Number} [end_r]:单元格右下角的水平坐标
     *          {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet 当前sheet对象
     * @param ctx 当前画布的context
     * @return void | boolean
     */
    cellRenderBefore: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        ctx: object
    ): void | boolean => {
        console.log('cell===>>>', cell);
        console.log('position===>>>', position);
        console.log('sheet===>>>', sheet);
        console.log('ctx===>>>', ctx);
        // return false
    },

    /**
     * @description 单元格渲染结束后触发，return false 则不渲染该单元格.
     * @param cell 单元格对象
     * @param position {
     *            {Number} [r]:单元格所在行号
     *            {Number} [c]:单元格所在列号
     *            {Number} [start_r]:单元格左上角的水平坐标
     *            {Number} [start_c]:单元格左上角的垂直坐标
     *            {Number} [end_r]:单元格右下角的水平坐标
     *            {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet 当前sheet对象
     * @param ctx 当前画布的context
     * @return void | boolean (return false 后表格内容还是渲染了，不确定官方文档描述是否正确)
     */
    cellRenderAfter: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        ctx: object
    ): void | boolean => {
        console.log('cell===>>>', cell);
        console.log('position===>>>', position);
        console.log('sheet===>>>', sheet);
        console.log('ctx===>>>', ctx);
        // return false
    },

    /**
     * @description 所有单元格渲染之前执行的方法。在内部，这个方法加在了luckysheetDrawMain渲染表格之前。
     * @param data 当前工作表二维数组数据
     * @param sheet 当前sheet对象
     * @param ctx 当前画布的context
     * @return void
     */
    cellAllRenderBefore: (data: object, sheet: object, ctx: object): void => {
        console.log('data===>>>', data);
        console.log('sheet===>>>', sheet);
        console.log('ctx===>>>', ctx);
    },

    /**
     * @description 行标题单元格渲染前触发，return false 则不渲染行标题
     * @param rowNum 行号
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [top]:单元格左上角的垂直坐标
     *          {Number} [width]:单元格宽度
     *          {Number} [height]:单元格高度
     *        }
     * @param ctx 当前画布的context
     * @return void | boolean
     */
    rowTitleCellRenderBefore: (rowNum: string, position: { r: number; top: number; width: number; height: number }, ctx: object): void | boolean => {
        console.log('rowNum ===>>> ', rowNum);
        console.log('position ===> ', position);
        console.log('ctx ===>>> ', ctx);
        // return false
    },

    /**
     * @description 行标题单元格渲染后触发，return false 则不渲染行标题
     * @param rowNum 行号
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [top]:单元格左上角的垂直坐标
     *          {Number} [width]:单元格宽度
     *          {Number} [height]:单元格高度
     *        }
     * @param ctx 当前画布的context
     * @returns void | boolean
     */
    rowTitleCellRenderAfter: (rowNum: string, position: { r: number; top: number; width: number; height: number }, ctx: object): void | boolean => {
        console.log('rowNum ===>>> ', rowNum);
        console.log('position ===> ', position);
        console.log('ctx ===>>> ', ctx);
        // return false
    },

    /**
     * @description 列标题单元格渲染前触发，return false 则不渲染列标题
     * @param columnAbc 列标题字符
     * @param position {
     *          {Number} [c]:单元格所在列号
     *          {Number} [left]:单元格左上角的水平坐标
     *          {Number} [width]:单元格宽度
     *          {Number} [height]:单元格高度
     *        }
     * @param ctx 当前画布的context
     * @returns void | boolean
     */
    columnTitleCellRenderBefore: (
        columnAbc: object,
        position: { c: number; left: number; width: number; height: number },
        ctx: object
    ): void | boolean => {
        console.log('columnAbc ===>>> ', columnAbc);
        console.log('position ===>>> ', position);
        console.log('ctx ===>>> ', ctx);
        // return false
    },

    /**
     * @description 列标题单元格渲染后触发，return false 则不渲染列标题
     * @param columnAbc 列标题字符
     * @param position {
     *          {Number} [c]:单元格所在列号
     *          {Number} [left]:单元格左上角的水平坐标
     *          {Number} [width]:单元格宽度
     *          {Number} [height]:单元格高度
     *        }
     * @param ctx 当前画布的context
     * @returns void | boolean
     */
    columnTitleCellRenderAfter: (
        columnAbc: string,
        position: { c: number; left: number; width: number; height: number },
        ctx: object
    ): void | boolean => {
        console.log('columnAbc ===>>> ', columnAbc);
        console.log('position ===>>> ', position);
        console.log('ctx ===>>> ', ctx);
    },

    /**
     * @description 单元格点击前的事件，return false则终止之后的点击操作
     * @param cell 单元格对象
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [c]:单元格所在列号
     *          {Number} [start_r]:单元格左上角的水平坐标
     *          {Number} [start_c]:单元格左上角的垂直坐标
     *          {Number} [end_r]:单元格右下角的水平坐标
     *          {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet 当前sheet对象
     * @param ctx 当前画布的context
     * @returns void | boolean
     */
    cellMousedownBefore: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        ctx: object
    ): void | boolean => {
        console.log('cell ===>>> ', cell);
        console.log('position ===>>> ', position);
        console.log('sheet ===>>> ', sheet);
        console.log('ctx ===>>> ', ctx);
        return false;
    },

    /**
     * @description 单元格点击后的事件，return false则终止之后的点击操作
     * @param cell 单元格对象
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [c]:单元格所在列号
     *          {Number} [start_r]:单元格左上角的水平坐标
     *          {Number} [start_c]:单元格左上角的垂直坐标
     *          {Number} [end_r]:单元格右下角的水平坐标
     *          {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet 当前sheet对象
     * @param ctx 当前画布的context
     * @returns void | boolean
     */
    cellMousedown: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        ctx: object
    ): void | boolean => {
        console.log('cell ===>>> ', cell);
        console.log('position ===>>> ', position);
        console.log('sheet ===>>> ', sheet);
        console.log('ctx ===>>> ', ctx);
    },

    /**
     * @description 鼠标移动事件，可通过cell判断鼠标停留在哪个单元格
     * @param cell 单元格对象
     * @param position {
     *           {Number} [r]:单元格所在行号
     *           {Number} [c]:单元格所在列号
     *           {Number} [start_r]:单元格左上角的水平坐标
     *           {Number} [start_c]:单元格左上角的垂直坐标
     *           {Number} [end_r]:单元格右下角的水平坐标
     *           {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet
     * @param moveState { 鼠标移动状态，可判断现在鼠标操作的对象，false和true
     *          {Boolean} [functionResizeStatus]:工具栏拖动
     *          {Boolean} [horizontalmoveState]:水平冻结分割栏拖动
     *          {Boolean} [verticalmoveState]:垂直冻结分割栏拖动
     *          {Boolean} [pivotTableMoveState]:数据透视表字段拖动
     *          {Boolean} [sheetMoveStatus]:sheet改变你位置拖动
     *          {Boolean} [scrollStatus]:鼠标触发了滚动条移动
     *          {Boolean} [selectStatus]:鼠标移动框选数据
     *          {Boolean} [rowsSelectedStatus]:通过行标题来选择整行操作
     *          {Boolean} [colsSelectedStatus]:通过列标题来选择整列操作
     *          {Boolean} [cellSelectedMove]:选框的移动
     *          {Boolean} [cellSelectedExtend]:选框下拉填充
     *          {Boolean} [colsChangeSize]:拖拽改变列宽
     *          {Boolean} [rowsChangeSize]:拖拽改变行高
     *          {Boolean} [chartMove]:图表移动
     *          {Boolean} [chartResize]:图表改变大小
     *          {Boolean} [rangeResize]:公式参数高亮选区的大小拖拽
     *          {Boolean} [rangeMove]:公式参数高亮选区的位置拖拽
     *        }
     * @param ctx 当前画布的context
     * @returns void
     */
    sheetMousemove: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        moveState: {
            functionResizeStatus: boolean;
            horizontalmoveState: boolean;
            verticalmoveState: boolean;
            pivotTableMoveState: boolean;
            sheetMoveStatus: boolean;
            scrollStatus: boolean;
            selectStatus: boolean;
            rowsSelectedStatus: boolean;
            colsSelectedStatus: boolean;
            cellSelectedMove: boolean;
            cellSelectedExtend: boolean;
            colsChangeSize: boolean;
            rowsChangeSize: boolean;
            chartMove: boolean;
            chartResize: boolean;
            rangeResize: boolean;
            rangeMove: boolean;
        },
        ctx: object
    ): void => {
        console.log('cell ===>>> ', cell);
        console.log('position ===>>> ', position);
        console.log('sheet ===>>> ', sheet);
        console.log('moveState ===>>> ', moveState);
        console.log('ctx ===>>> ', ctx);
    },

    /**
     * @description 鼠标按钮释放事件，可通过cell判断鼠标停留在哪个单元格
     * @param cell 单元格对象
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [c]:单元格所在列号
     *          {Number} [start_r]:单元格左上角的水平坐标
     *          {Number} [start_c]:单元格左上角的垂直坐标
     *          {Number} [end_r]:单元格右下角的水平坐标
     *          {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet 当前sheet对象
     * @param moveState { --- 鼠标移动状态，可判断现在鼠标操作的对象，false和true
     *          {Boolean} [functionResizeStatus]:工具栏拖动
     *          {Boolean} [horizontalmoveState]:水平冻结分割栏拖动
     *          {Boolean} [verticalmoveState]:垂直冻结分割栏拖动
     *          {Boolean} [pivotTableMoveState]:数据透视表字段拖动
     *          {Boolean} [sheetMoveStatus]:sheet改变你位置拖动
     *          {Boolean} [scrollStatus]:鼠标触发了滚动条移动
     *          {Boolean} [selectStatus]:鼠标移动框选数据
     *          {Boolean} [rowsSelectedStatus]:通过行标题来选择整行操作
     *          {Boolean} [colsSelectedStatus]:通过列标题来选择整列操作
     *          {Boolean} [cellSelectedMove]:选框的移动
     *          {Boolean} [cellSelectedExtend]:选框下拉填充
     *          {Boolean} [colsChangeSize]:拖拽改变列宽
     *          {Boolean} [rowsChangeSize]:拖拽改变行高
     *          {Boolean} [chartMove]:图表移动
     *          {Boolean} [chartResize]:图表改变大小
     *          {Boolean} [rangeResize]:公式参数高亮选区的大小拖拽
     *          {Boolean} [rangeMove]:公式参数高亮选区的位置拖拽
     *          {Boolean} [cellRightClick]:单元格右击
     *          {Boolean} [rowTitleRightClick]:行标题右击
     *          {Boolean} [columnTitleRightClick]:列标题右击
     *          {Boolean} [sheetRightClick]:底部sheet页右击
     *          {Boolean} [hyperlinkClick]:点击超链接
     *        }
     * @param ctx 当前画布的context
     * @returns void
     */
    sheetMouseup: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        moveState: {
            functionResizeStatus: boolean;
            horizontalmoveState: boolean;
            verticalmoveState: boolean;
            pivotTableMoveState: boolean;
            sheetMoveStatus: boolean;
            scrollStatus: boolean;
            selectStatus: boolean;
            rowsSelectedStatus: boolean;
            colsSelectedStatus: boolean;
            cellSelectedMove: boolean;
            cellSelectedExtend: boolean;
            colsChangeSize: boolean;
            rowsChangeSize: boolean;
            chartMove: boolean;
            chartResize: boolean;
            rangeResize: boolean;
            rangeMove: boolean;
            cellRightClick: boolean;
            rowTitleRightClick: boolean;
            columnTitleRightClick: boolean;
            sheetRightClick: boolean;
            hyperlinkClick: boolean;
        },
        ctx: object
    ): void => {
        console.log('cell ===>>> ', cell);
        console.log('position ===>>> ', position);
        console.log('sheet ===>>> ', sheet);
        console.log('moveState ===>>> ', moveState);
        console.log('ctx ===>>> ', ctx);
    },

    /**
     * @description 鼠标滚动事件
     * @param position {
     *          {Number} [scrollLeft]:横向滚动条的位置
     *          {Number} [scrollTop]:垂直滚动条的位置
     *          {Number} [canvasHeight]:canvas高度
     *        }
     * @return void
     */
    scroll: (position: { scrollLeft: number; scrollTop: number; canvasHeight: number }): void => {
        console.log('position ===>>> ', position);
    },

    /**
     * @description 鼠标拖拽文件到Luckysheet内部的结束事件
     * @param cell 单元格对象
     * @param position {
     *          {Number} [r]:单元格所在行号
     *          {Number} [c]:单元格所在列号
     *          {Number} [start_r]:单元格左上角的水平坐标
     *          {Number} [start_c]:单元格左上角的垂直坐标
     *          {Number} [end_r]:单元格右下角的水平坐标
     *          {Number} [end_c]:单元格右下角的垂直坐标
     *        }
     * @param sheet 当前sheet对象
     * @param ctx  当前画布的context
     * @param event 当前事件对象
     * @returns void
     */
    cellDragStop: (
        cell: object,
        position: { r: number; c: number; start_r: number; start_c: number; end_r: number; end_c: number },
        sheet: object,
        ctx: object,
        event: object
    ): void => {
        console.log('cell ===>>> ', cell);
        console.log('position ===>>> ', position);
        console.log('sheet ===>>> ', sheet);
        console.log('ctx ===>>> ', ctx);
        console.log('event ===>>> ', event);
    },

    /**
     * @description 框选或者设置选区后触发
     * @param sheet 当前sheet对象
     * @param range 选区范围，可能为多个选区
     * @returns void
     */
    rangeSelect: (sheet: object, range: object | Array<any>): void => {
        console.log('sheet ===>>> ', sheet);
        console.log('range ===>>> ', range);
    },

    /**
     * @description 移动选区前，包括单个单元格 (TODO)
     * @param range 当前选区范围，只能为单个选区
     * @returns void
     */
    rangeMoveBefore: (range: Array<any>): void => {
        console.log('range ===>>> ', range);
    },

    /**
     * @description 移动选区后，包括单个单元格 (TODO)
     * @param oldRange
     * @param newRange
     * @returns void
     */
    rangeMoveAfter: (oldRange: Array<any>, newRange: Array<any>): void => {
        console.log('oldRange ===>>> ', oldRange);
        console.log('newRange ===>>> ', newRange);
    },

    /**
     * @description 选区粘贴前
     * @param range 选区范围，可能为多个选区
     * @param data 要被粘贴的选区范围所对应的数据
     * @returns void
     */
    rangePasteBefore: (range: object | Array<any>, data: object): void => {
        console.log('range ===>>> ', range);
        console.log('data ===>>> ', data);
    },

    /**
     * @description 激活工作表前
     * @param i sheet页的index
     * @param isPivotInitial 是否切换到了数据透视表页
     * @param isNewSheet  是否新建了sheet页
     * @returns void
     */
    sheetActivate: (i: number, isPivotInitial: boolean, isNewSheet: boolean): void => {
        console.log('i ===>>> ', i);
        console.log('isPivotInitial ===>>> ', isPivotInitial);
        console.log('isNewSheet ===>>> ', isNewSheet);
    },

    /**
     * @description 表格创建之前触发。旧的钩子函数叫做beforeCreateDom
     * @param book  整个工作簿的配置（options）
     * @returns void
     */
    workbookCreateBefore: (book: object): void => {
        console.log('book ===>>> ', book);
    },

    /**
     * @description 表格创建之后触发
     * @param book 整个工作簿的配置（options）
     * @returns void
     */
    workbookCreateAfter: (book: object): void => {
        console.log('book ===>>> ', book);
    },

    /**
     * @description 协同编辑中的每次操作后执行的方法，监听表格内容变化，
     *              即客户端每执行一次表格操作，Luckysheet将这次操作存到历史记录中后触发，
     *              撤销重做时因为也算一次操作，也会触发此钩子函数。
     * @param operate 本次操作的历史记录信息，根据不同的操作，会有不同的历史记录
     * @returns void
     */
    updated: (operate: object): void => {
        console.log('updated ===>>> ', operate);
    },

    /**
     * @description 插入批注之前，return false 则不插入批注
     * @param r 单元格所在行号
     * @param c 单元格所在列号
     * @returns void | boolean
     */
    commentInsertBefore: (r: number, c: number): void | boolean => {
        console.log('r ===>>> ', r);
        console.log('c ===>>> ', c);
        // return false
    },

    /**
     * @description 插入批注之后
     * @param r 单元格所在行号
     * @param c 单元格所在列号
     * @param cell 被插入批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}，包含批注信息
     * @returns void
     */
    commentInsertAfter: (r: number, c: number, cell: object): void => {
        console.log('r ===>>> ', r);
        console.log('c ===>>> ', c);
        console.log('cell ===>>> ', cell);
    },

    /**
     * @description 删除批注之前，return false 则不删除批注
     * @param r 单元格所在行号
     * @param c 单元格所在列号
     * @param cell 要删除的批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}，可以看到批注信息
     * @returns void | boolean
     */
    commentDeleteBefore: (r: number, c: number, cell: object): void | boolean => {
        console.log('r ===>>> ', r);
        console.log('c ===>>> ', c);
        console.log('cell ===>>> ', cell);
        return true;
    },

    /**
     * @description 删除批注之后
     * @param r 单元格所在行号
     * @param c 单元格所在列号
     * @param cell 被删除批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}，可以看到批注已被删除
     * @returns void
     */
    commentDeleteAfter: (r: number, c: number, cell: object): void => {
        console.log('r ===>>> ', r);
        console.log('c ===>>> ', c);
        console.log('cell ===>>> ', cell);
    },

    /**
     * @description 修改批注之前，return false 则不修改批注
     * @param r 单元格所在行号
     * @param c 单元格所在列号
     * @param value 新的批注内容
     * @result void | boolean
     */
    commentUpdateBefore: (r: number, c: number, value: string): void | boolean => {
        console.log('r ===>>> ', r);
        console.log('c ===>>> ', c);
        console.log('value ===>>> ', value);
        return true;
    },

    /**
     * @description 修改批注之后
     * @param r 单元格所在行号
     * @param c 单元格所在列号
     * @param oldCell 修改前批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}
     * @param newCell 修改后批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}
     * @returns void
     */
    commentUpdateAfter: (r: number, c: number, oldCell: object, newCell: object): void => {
        console.log('r ===>>> ', r);
        console.log('c ===>>> ', c);
        console.log('oldCell ===>>> ', oldCell);
        console.log('newCell ===>>> ', newCell);
    },

    /**
     * @description 点击分页按钮回调函数，返回当前页码，利用jquery分页插件sPage
     * @param page
     * @returns void
     */
    onTogglePager: (page: object): void => {
        console.log('page ===>>> ', page);
    },
};

/**
 * 表格 初始化 基础配置
 */
const options: Record<string, any> = {
    container: 'luckysheet', // 设定DOM容器的id
    title: '电子表格', // 设定表格名称
    lang: 'zh', // 设定表格语言
    gridKey: '', // 表格唯一key
    loadUrl: '', // 加载整个工作簿
    loadSheetUrl: '', // 加载其它页celldata
    allowUpdate: false, // 允许更新，与updateUrl配置使用，共享编辑时必须开启
    updateUrl: '', // 更新地址，配置websocket地址，数据pako压缩，后台需要先解压
    updateImageUrl: '', // 缩略图更新地址
    plugins: [{ name: 'chart' }], // 插件支持“chart”（官网上直接传字符串'chart'会报错）
    column: 26, // 空表格列数，默认60
    row: 50, // 空表格行数，默认84
    autoFormatw: false, // 亿万格式，自动格式化
    accuracy: undefined, // 精度
    allowCopy: true, // 允许复制
    showtoolbar: true, // 是否显示工具栏
    showtoolbarConfig, // 自定义工具栏
    showinfobar: false, // 是否显示信息栏
    showsheetbar: true, // 是否显示底部sheet页
    showsheetbarConfig, // 自定义底部sheet页
    showstatisticBar: true, // 是否显示底部计数栏
    showstatisticBarConfig, // 自定义底部计数栏
    enableAddRow: true, // 允许添加行
    enableAddBackTop: true, // 允许回到顶部
    userInfo: '用户信息', // 右上角展示用户信息（可以是字符串或HTML模板，对象格式{userImage: 【头像地址】, userName: 【用户名】}）
    userMenuItem: [], // 用户信息菜单（点击右上角头像弹出）
    myFolderUrl: '', // 左上角 < 返回按钮链接
    devicePixelRatio: window.devicePixelRatio, // 设备比例（比例越大表格分辨率越高）
    unctionButton: '', // 右上角功能按钮（html模板，定义功能按钮）
    showConfigWindowResize: true, // 自动缩进界面（图表或数据透视表的配置会在右侧弹出，设置弹出后表格是否会自动缩进）
    forceCalculation: false, // 强制刷新公式（带公式的表格初始化时默认加载数据记录的值，开启后后执行公式计算，对性能有所影响）
    cellRightClickConfig, // 自定义单元格右键菜单
    sheetRightClickConfig, // 自定义sheet页右击菜单
    rowHeaderWidth: 46, // 行标题区域的宽度，0为隐藏行标题
    columnHeaderHeight: 20, // 列标题区域的高度，0为隐藏列标题
    sheetFormulaBar: true, // 是否显示公式栏
    defaultFontSize: 11, // 初始化默认字体大小
    limitSheetNameLength: true, // 是否限制工作表名长度
    defaultSheetNameMaxLength: 31, // 默认允许工作表名的最大长度
    pager: null, // 分页器（sPage分页器）
    // data, // 后台加载数据前端不用配置
    // hook // 使用uploadUrl后，利用项目自带数据更新逻辑
};

export default options;
