var Messages = {}

Messages.status = {
    R:'退货',
    E:'换货',
    RETURN:'退货',
    EXCHANGE:'换货',
    CANCEL:'取消',
    PENDING:'待处理',
    PROCESSING: '处理中',
    REFUSED:'拒绝',
    SUCCESS:'成功',
    FAILURE:'失败',
    WAIT_PRECHECK:'待预检',
//    WAIT_PRECHECK:'待预检',
    PROCESSING:'正在处理',
    WAIT_STKOUT:'待出库',
    SHIPPING:'配送中',
    CLOSE:'交易完成',
    EXCEPTION:'待处理(异常)',
    WAIT_CANCEL:'待取消',
    CANCELLING:'取消中',
    CANCELLED:'取消成功',
//    CANCELLED:'入库失败',
    STKIN_FAILURE:'入库失败',
    CANCEL_FAILURE:'取消失败',
    APPROVED:'已审批',
    WAIT_STKIN:'待入库',
    STKINNING:'入库中',
    PASSED:'入库成功',
    STOCKOUT:'缺货',
    CANCELSUCC:'入库失败',
    CANCELFAIL:'取消失败',
    ACTIVE:'活跃',
    LOCKED:'锁定',
    DISABLED:'废弃',
    PRODUCT:'商品',
    POST:'邮费'
}

Messages.OrderException = {}
Messages.OrderException.Status = {
    PENDING:'待处理',
    CLOSED:'已关闭'
}
Messages.OrderException.Type = {
    ADDRESS_EXCEPTION:'地址异常',
    INVENTORY_EXCEPTION:'库存异常',
    PRICE_EXCEPTION:'价格异常',
    PRODUCT_EXCEPTION:'商品异常',
    CONFIRM_EXCEPTION:'备注异常'
}

Messages.returnReason = {
    R001:'商品质量问题',
    R002:'快递公司丢失',
    R003:'运输中商品损坏',
    R004:'发货错误',
    R005:'七天无理由',
    R006:'买家责任'
}


Messages.cancelReason = {
    D001:'拍错商品',
    D002:'商品缺少所需样式',
    D003:'卖家未及时发货',
    D004:'折扣、赠品、发票问题',
    D005:'缺货取消',
    D006:'其他原因'
}

Messages.shippingMethod = {
    "Other":'其他',
    "POST":'中国邮政平邮',
    "EMS":'EMS',
    "POSTB":'邮政国内小包',
    "EYB":'邮政电子商务小包',
    "STO":'申通E物流',
    "YTO":'圆通速递',
    "YUNDA":'韵达快运',
    "ZJS":'	宅急送',
    "FEDEX":'联邦快递',
    "DBL":'	德邦物流',
    "SHQ":'	华强物流',
    "ZTO":'	中通速递',
    "CCES":'CCES',
    "HTKY":'汇通快运',
    "TTKDEX	":'天天快递',
    "SF":'顺丰速运',
    "AIRFEX	":'亚风',
    "APEX":'全一',
    "LBEX":'龙邦',
    "CYEXP":'长宇',
    "DTW":'大田',
    "YUD":'长发',
    "STARS":'星晨急便',
    "ANTO":'安得',
    "CRE":'中铁快运',
    "EBON":'一邦速递',
    "HZABC":'杭州爱彼西',
    "DFH":'东方汇',
    "SY":'首业',
    "YC":'远长',
    "ZY":'中远',
    "YCT":'黑猫宅急便',
    "XB":'新邦物流',
    "NEDA":'港中能达',
    "XFHONG	":'鑫飞鸿快递',
    "WLB-ABC":'浙江ABC',
    "WLB-SAD":'赛澳递',
    "WLB-STARS":'星辰急便',
    "FAST":'快捷速递',
    "UC":'优速物流',
    "QRT":'	全日通快递'

}


Messages.buttons = {}

Messages.menus = {};

Messages.couponType = {
    Private:'定向优惠劵',
    Directional:'买送优惠券',
    Public:'店铺优惠劵'
}

Messages.couponStatus = {
    Release:'发行',
    Consume:'消费',
    Return:'退回'
}

Messages.costSource = {
    Marketing:'市场部',
    Store:'门店'
}
