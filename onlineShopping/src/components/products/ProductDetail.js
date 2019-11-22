import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "update" : "add"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
      <TextInput
        name="unitsInStock"
        label="Units in Stocks"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || "/"}
        defaultOption="please select"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.id}
      />
      <button type="submit" className="btn btn-info">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
