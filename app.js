/*
 * @Author: Superficial
 * @Date: 2019-09-30 12:46:53
 * @LastEditTime: 2020-05-14 15:38:03
 * @Description: App入口文件
 */

const express = require("express");
const helmet = require('helmet');
const bodyParser = require("body-parser");
const { ready } = require("consola");

const { APP } = require("./app.config");
const mongodb = require("./core/db");

// mongodb server connect
mongodb.connect();

// app routes
const routes = require("./core/routes");
const app = new express();

// app config
app.set("port", APP.PORT);
app.use(helmet());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// app routes
routes(app);

app.listen(APP.PORT, () => {
  ready(`App runing! http://127.0.0.1:${APP.PORT}`);
});
