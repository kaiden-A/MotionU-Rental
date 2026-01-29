

function AddProducts(){


    return(
        <>

        <div className="modal" id="addProductModal">
            <div classname="modal-content">
                <div classname="modal-header">
                    <h2 classname="modal-title">Add New Product</h2>
                    <button classname="close-modal" id="closeProductModal">&times;</button>
                </div>
                <form id="productForm">
                    <div classname="form-grid">
                        <div classname="form-group">
                            <label classname="form-label" for="productName">Product Name *</label>
                            <input type="text" id="productName" classname="form-input" required/>
                        </div>
                        
                        <div classname="form-group">
                            <label classname="form-label" for="productCategory">Category *</label>
                            <select id="productCategory" classname="form-select" required>
                                <option value="">Select Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="tools">Tools</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="party">Party & Events</option>
                            </select>
                        </div>
                        
                        <div classname="form-group">
                            <label classname="form-label" for="dailyRate">Daily Rate ($) *</label>
                            <input type="number" id="dailyRate" classname="form-input" min="1" step="0.01" required/>
                        </div>
                        
                        <div classname="form-group">
                            <label classname="form-label" for="stockQuantity">Stock Quantity *</label>
                            <input type="number" id="stockQuantity" classname="form-input" min="1" required/>
                        </div>
                        
                        <div classname="form-group full-width">
                            <label classname="form-label" for="productDescription">Description *</label>
                            <textarea id="productDescription" classname="form-textarea" required></textarea>
                        </div>
                        
                        <div classname="form-group full-width">
                            <label classname="form-label">Product Image</label>
                            <div classname="image-upload" id="imageUpload">
                                <i classname="fas fa-cloud-upload-alt"></i>
                                <p>Click to upload product image</p>
                                <p style="font-size: 0.875rem; color: var(--text-light); margin-top: 8px;">JPEG, PNG up to 5MB</p>
                            </div>
                            <input type="file" id="imageInput" accept="image/*" style="display: none;"/>
                            <img id="imagePreview" classname="image-preview" alt="Product Preview"/>
                        </div>
                    </div>
                    
                    <div classname="modal-actions">
                        <button type="button" classname="modal-btn secondary" id="cancelProduct">Cancel</button>
                        <button type="submit" classname="modal-btn primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )

}

export default AddProducts;