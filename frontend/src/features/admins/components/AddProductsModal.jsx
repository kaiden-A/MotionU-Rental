import { useState } from "react";
import { postProducts } from "../api/admins";
import { useRef } from "react";


function AddProducts({onClose}){

    const [name , setName] = useState("");
    const [rate , setRate] = useState("");
    const [category , setCategory] = useState("");
    const [image , setImage] = useState("");
    const [quantity , setQuantity] = useState(0);
    const [desc , setDesc] = useState("");
    const [imagePreview , setImagePreview] = useState("");

    const fileInputReff = useRef(null);

    const handleClickDiv = () => {
        fileInputReff.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file); // store the File object
        setImagePreview(URL.createObjectURL(file)); // preview
    };


    const sendForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("rate", rate);
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("desc", desc);
        if (image) formData.append("image", image); // attach file

        try {
            const res = await postProducts(formData);

            if (res.data.success) {
                onClose();
            }
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    };

    return(
        <>

        <div className="modal" style={{display : "flex"}}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Add New Product</h2>
                    <button className="close-modal" onClick={onClose}>&times;</button>
                </div>
                <form id="productForm" onSubmit={sendForm}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label" htmlFor="productName">Product Name *</label>
                            <input 
                                type="text" 
                                id="productName" 
                                className="form-input" 
                                required
                                onChange={(e) => setName(e.target.value)}    
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" htmlFor="productCategory">Category *</label>
                            <select 
                                id="productCategory" 
                                onChange={(e) => setCategory(e.target.value)} 
                                className="form-select" required
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="tools">Tools</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="party">Party & Events</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" htmlFor="dailyRate">Daily Rate ($) *</label>
                            <input t
                                type="number" 
                                id="dailyRate" 
                                className="form-input" 
                                min="1" step="0.01" 
                                required
                                onChange={(e) => setRate(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" htmlFor="stockQuantity">Stock Quantity *</label>
                            <input 
                                type="number" 
                                id="stockQuantity" 
                                className="form-input" 
                                min="1" required
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group full-width">
                            <label className="form-label" htmlFor="productDescription">Description *</label>
                            <textarea 
                                id="productDescription" 
                                className="form-textarea" 
                                required
                                onChange={(e) => setDesc(e.target.value)}    
                            />
                        </div>
                        
                        <div className="form-group full-width">
                            <label className="form-label">Product Image</label>
                            <div className="image-upload" id="imageUpload" onClick={handleClickDiv} style={{display : imagePreview ? "none" : "block"}}>
                                <i className="fas fa-cloud-upload-alt"></i>
                                <p>Click to upload product image</p>
                                <p style={{fontSize: "0.875rem" , color: "#64748b" , marginTop: "8px"}}>JPEG, PNG up to 5MB</p>
                            </div>
                            <input 
                                type="file" 
                                id="imageInput" 
                                ref={fileInputReff}
                                accept="image/*"
                                style={{display: "none"}}
                                onChange={handleImageChange}
                            />
                            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" style={{display : 'block'}} />}
                        </div>
                    </div>
                    
                    <div className="modal-actions">
                        <button type="button" className="modal-btn secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="modal-btn primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )

}

export default AddProducts;