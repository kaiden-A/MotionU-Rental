import { useContext } from "react";
import { ChooseContext } from "../../../context/ChooseContext";


function ProductsCard({image , name , desc , rate , addProducts}){


    return(
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="product-info">
                    <h3 className="product-title">{name}</h3>
                    <p className="product-description">{desc}</p>
                    <div className="product-footer">
                        <div className="product-price">{`RM ${rate}`}<span>/day</span></div>
                        <button className="add-to-cart" onClick={addProducts}>
                            <i className="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard;