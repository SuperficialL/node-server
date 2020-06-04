/*
 * @author: SuperficialL
 * @Date: 2019-08-24 12:35:32
 * @LastEditTime: 2020-05-14 18:10:55
 * @Description: 设置控制器
 */

const Option = require("../models/Option");
const {
  humanizedHandleError,
  humanizedHandleSuccess,
  buildController,
  initController
} = require("../core/processor");

// controller
const OptionCtrl = initController();

// 获取设置
OptionCtrl.GET = (req, res) => {
  Option.findOne({})
    .then(humanizedHandleSuccess(res, "配置项获取成功"))
    .catch(humanizedHandleError(res, "配置项获取失败"))
};

// 修改设置
OptionCtrl.PUT = ({body: options, body: {_id}}, res) => {

  // 如果 _id 是 null 或空值
  if (!_id) {
    Reflect.deleteProperty(options, "_id")
  }

  // 置空 Likes 字段
  Reflect.deleteProperty(options, "meta");

  // 检测黑名单和 ping 地址列表不能存入空元素
  const checkEmpty = data => (data && data.length) ? data.filter(t => !!t) : [];
  options.ping_sites = checkEmpty(options.ping_sites);
  options.blacklist.ips = checkEmpty(options.blacklist.ips);
  options.blacklist.mails = checkEmpty(options.blacklist.mails);
  options.blacklist.keywords = checkEmpty(options.blacklist.keywords);

  const optionService = _id
    ? Option.findByIdAndUpdate(_id, options, {new: true})
    : new Option(options).save();
  optionService
    .then(humanizedHandleSuccess(res, "配置项修改成功"))
    .catch(humanizedHandleError(res, "配置项修改失败"))
};

module.exports = buildController(OptionCtrl);
