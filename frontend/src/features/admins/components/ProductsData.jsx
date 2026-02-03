
function ProductsData({imgLink , name , available , rate , category , onDelete}){

    return(
        <>
                <tr>
                    <td>
                        <div class="product-image-small">
                            <img src={imgLink} alt={name} style={{width: "100%" , height: "100%" , objectFit: "cover"}}/>
                        </div>
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{`RM ${rate}/day`}</td>
                    <td>{`${available} Available`}</td>
                    {/* <td>28</td> */}
                    <td>
                        <button class="btn btn-sm btn-outline">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onClick={onDelete}>
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
        </>
    )
}

export default ProductsData;