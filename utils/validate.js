/*
 * @Author: SuperficiaL
 * @Date: 2020-05-14 17:00:53
 * @Descripttion: 参数验证
 */
const isArray = array => Array.isArray(array)

const isString = string => typeof string === 'string'

// 数组是否无效
const arrayIsInvalid = array => !array || !array.length

// 检查数字是否无效
const numberIsInvalid = number => number === null || number === undefined || isNaN(number)

// 数组去重
const arrayUniq = (a, b = []) => [...new Set([...a, ...b])]

// 获取对象值数组
const objectValues = object => Object.keys(object).map(key => object[key])

exports.isArray = isArray
exports.isString = isString
exports.arrayUniq = arrayUniq
exports.objectValues = objectValues
exports.arrayIsInvalid = arrayIsInvalid
exports.numberIsInvalid = numberIsInvalid