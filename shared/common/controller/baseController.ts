// Base controller với các hàm chung cho CRUD
const baseController = (service) => {
    return {
      // Lấy tất cả dữ liệu
      getAll: async (req, res) => {
        try {
          const data = await service.getAll();
          res.status(200).json({ status: 200, data, message: 'Success' });
        } catch (error) {
          res.status(500).json({ status: 500, message: error.message });
        }
      },
  
      // Lấy dữ liệu theo ID
      getById: async (req, res) => {
        try {
          const data = await service.getById(req.params.id);
          if (!data) {
            return res.status(404).json({ status: 404, message: 'Not Found' });
          }
          res.status(200).json({ status: 200, data, message: 'Success' });
        } catch (error) {
          res.status(500).json({ status: 500, message: error.message });
        }
      },
  
      // Tạo dữ liệu mới
      create: async (req, res) => {
        try {
          const data = await service.create(req.body);
          res.status(201).json({ status: 201, data, message: 'Created successfully' });
        } catch (error) {
          res.status(400).json({ status: 400, message: error.message });
        }
      },
  
      // Cập nhật dữ liệu theo ID
      updateById: async (req, res) => {
        try {
          const data = await service.updateById(req.params.id, req.body);
          if (!data) {
            return res.status(404).json({ status: 404, message: 'Not Found' });
          }
          res.status(200).json({ status: 200, data, message: 'Updated successfully' });
        } catch (error) {
          res.status(400).json({ status: 400, message: error.message });
        }
      },
  
      // Xóa dữ liệu theo ID
      deleteById: async (req, res) => {
        try {
          const data = await service.deleteById(req.params.id);
          if (!data) {
            return res.status(404).json({ status: 404, message: 'Not Found' });
          }
          res.status(200).json({ status: 200, data, message: 'Deleted successfully' });
        } catch (error) {
          res.status(500).json({ status: 500, message: error.message });
        }
      },
    };
  };
  
  module.exports = baseController;
  