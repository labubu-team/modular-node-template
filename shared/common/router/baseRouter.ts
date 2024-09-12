const express = require('express');

// Tạo Base Router với các route CRUD
const baseRouter = (controller) => {
  const router = express.Router();

  router.get('/', controller.getAll);       // Lấy tất cả
  router.get('/:id', controller.getById);   // Lấy theo ID
  router.post('/', controller.create);      // Tạo mới
  router.put('/:id', controller.updateById); // Cập nhật theo ID
  router.delete('/:id', controller.deleteById); // Xóa theo ID

  return router;
};

module.exports = baseRouter;
