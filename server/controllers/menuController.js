const getMenu = (req, res) => {
  res.json({
    success: true,
    message: "FoodHub menu retrieved successfully",
    data: [
      {
        id: 1,
        name: "Paneer Tikka",
        price: 220
      },
      {
        id: 2,
        name: "Butter Chicken",
        price: 320
      }
    ]
  });
};

const getMenuItem = (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    message: "Menu item retrieved successfully",
    menuItemId: id
  });
};

const createMenuItem = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Menu item created successfully",
    data: req.body
  });
};

const updateMenuItem = (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    message: "Menu item updated successfully",
    menuItemId: id,
    data: req.body
  });
};

const deleteMenuItem = (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    message: "Menu item deleted successfully",
    menuItemId: id
  });
};

module.exports = {
  getMenu,
  getMenuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
};