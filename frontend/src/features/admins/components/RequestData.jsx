

function RequestData({id , total , date , personOrder , name }){

    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{personOrder}</td>
                <td>{name}</td>
                <td>{`RM ${total || 0}`}</td>
                <td>{date}</td>
                <td>
                    <button class="btn btn-sm btn-outline">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-success" >
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" >
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default RequestData;