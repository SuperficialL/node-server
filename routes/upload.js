/*
 * @Author: Superficial
 * @Date: 2019-11-06 21:57:27
 * @LastEditTime: 2020-03-04 17:39:36
 * @Description: 上传路由
 */

const Router = require("koa-router");
const UploadController = require("../controllers/upload");

const router = new Router({
  prefix: "/api/admin"
});

router.post("/uploads", UploadController.uploadImg);
router.get("/qiNiuToken", UploadController.uploadQiNiu);
router.post("/saveQiNiuUrl", UploadController.saveQiNiuUrl);

module.exports = router;
