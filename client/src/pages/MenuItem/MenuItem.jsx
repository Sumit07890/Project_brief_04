import { useState } from "react";

function MenuItem() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    availability: "Available",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate Food Item Name
    if (!formData.name.trim()) {
      newErrors.name = "Food item name is required";
    }

    // Validate Category
    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    // Validate Description
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    // Validate Price
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    setErrors(newErrors);

    // Submit only if there are no errors
   if (Object.keys(newErrors).length === 0) {
  console.log("Menu Item Submitted:", formData);

  alert("Menu item added successfully!");

  setFormData({
    name: "",
    category: "",
    description: "",
    price: "",
    availability: "Available",
  });

  setErrors({});
}
  };

  return (
    <div className="menu-item-page">
      <h1>Add Menu Item</h1>
      <p>Add a new food item to your restaurant menu.</p>

      <form onSubmit={handleSubmit}>
        {/* Food Item Name */}
        <div>
          <label>Food Item Name *</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter food item name"
          />

          {errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label>Category *</label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Main Course"
          />

          {errors.category && (
            <p className="error">{errors.category}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label>Description *</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter food description"
          />

          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label>Price *</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
          />

          {errors.price && (
            <p className="error">{errors.price}</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <label>Availability</label>

          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit">
          Add Menu Item
        </button>
        <button
  type="button"
  onClick={() => {
    setFormData({
      name: "",
      category: "",
      description: "",
      price: "",
      availability: "Available",
    });

    setErrors({});
  }}
>
  Reset
</button>
      </form>
    </div>
  );
}

export default MenuItem;