/*
 * @Author: SuperficialL
 * @Date: 2019-09-04 22:59:01
 * @LastEditTime: 2020-09-14 13:03:30
 * @Description: 配置文件
 */
const path = require("path");
const package = require("./package.json");
const environment = process.env.NODE_ENV;
const isDevMode = Object.is(environment, undefined);
const isProdMode = Object.is(environment, "production");

module.exports = {
  environment: environment,
  isDevMode,
  isProdMode,

  INFO: {
    name: package.name,
    version: package.version,
    author: package.author,
    site: "https://www.zhangwurui.net",
    github: "https://github.com/SuperficialL",
    keywords: ["Vue", "Nuxt.js", "Nodejs", "MongoDB", "Express", "Nginx"],
  },

  APP: {
    NAME: "个人博客",
    URL: "https://www.zhangwurui.net",
    // 端口
    PORT: 3000,
    FRONT_END_PATH: isProdMode
      ? path.join(__dirname, "../../", "nuxt-web/current")
      : path.join(__dirname, "..", "nuxt-web"),
  },

  // mongo数据库
  MONGODB: {
    limit: 16,
    uri:
      "mongodb://Superficial:.zrui.950312@49.233.165.116:27017/website?authSource=admin",
    username: "Superficial",
    password: ".zrui.950312",
  },

  // 跨域
  CROSS_DOMAIN: {
    allowedOrigins: [
      "https://zhangwurui.net",
      "https://admin.zhangwurui.net",
      "https://api.zhangwurui.net",
    ],
    allowedReferer: "zhangwurui.net",
    weiChatReferer: "https://servicewechat.com"
  },

  BAIDU: {
    site: "www.zhangwurui.net",
    token: "PdtIgAM22ycFgJL0",
  },

  // 安全相关配置
  SECURITY: {
    // 密钥
    secretKey: "secretKey",
    // 过期单位  s
    expiresIn: 60 * 60 * 24,
  },

  // 邮件发送者
  EMAIL: {
    host: "smtp.163.com",
    sender: "15871930413@163.com",
    user: "347106739@qq.com",
    password: "zrui950312",
  },
  qiniu: {
    accessKey: "6lEYwVPcfmNGYBMWqgKZXl-isn80eojd1x7squfm",
    secretKey: "Wol1jwZwhIW8qx4dJHlG3ctJJbVV9Ek6w0TMfu3t",
    media_bucket: "periodical",
    pic_bucket: "statices",
  },
  JHApi: {
    key: "8d3aff4ed1531e65c3ba3414309dd843",
  },
};
