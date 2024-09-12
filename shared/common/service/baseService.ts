// Base service với các hàm chung cho CRUD
const baseService = (model) => {
    return {
      // Lấy tất cả dữ liệu
      getAll: async () => {
        return await model.find({});
      },
  
      // Lấy dữ liệu theo ID
      getById: async (id) => {
        return await model.findById(id);
      },
  
      // Thêm dữ liệu mới
      create: async (data) => {
        const newItem = new model(data);
        return await newItem.save();
      },
  
      // Cập nhật dữ liệu theo ID
      updateById: async (id, data) => {
        return await model.findByIdAndUpdate(id, data, { new: true });
      },
  
      // Xóa dữ liệu theo ID
      deleteById: async (id) => {
        return await model.findByIdAndDelete(id);
      },
    };
  };
  
  module.exports = baseService;
  