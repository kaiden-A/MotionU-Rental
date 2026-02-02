
function RequestDetails({requests , onClose , onApprove , onReject}){

    const statusChecker = {
        PENDING : 'pending',
        APPROVED : 'approved',
        REJECTED :'rejected'
    }


    return(
        <>
            <div className="modal" id="requestDetailsModal" style={{display: "flex"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Rental Request Details</h2>
                        <button className="close-modal" onClick={onClose}>&times;</button>
                    </div>
                    
                    <div className="request-details" id="requestDetailsContent">
                        <div className="detail-row">
                            <div className="detail-label">Request ID:</div>
                            <div className="detail-value">{requests.requestId}</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Email:</div>
                            <div className="detail-value">{requests.email}</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Request Date:</div>
                            <div className="detail-value">{requests.startDate}</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Duration:</div>
                            <div className="detail-value">{`${requests.durations} Day(s) `}</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Total Amount:</div>
                            <div className="detail-value">RM {requests.amount}</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Status:</div>
                            <div className="detail-value">
                                <span className={`status-badge status-${statusChecker[requests.status]}`}>
                                    {requests.status}
                                </span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Products:</div>
                            <div className="detail-value">
                                <ul style={{paddingLeft: "20px"}}>
                                    <li>{requests.name} ( {requests.quantity} x RM {requests.rate}/day)</li>
                                </ul>
                            </div>
                        </div>
                    
                            <div className="detail-row">
                                <div className="detail-label">Customer Notes:</div>
                                <div className="detail-value">{requests.note}</div>
                            </div>
                        </div>
                    
                    <div className="modal-actions" id="requestActions">
                            <button className="modal-btn secondary" onClick={onReject}>
                                <i className="fas fa-times"></i> Reject
                            </button>
                            <button className="modal-btn primary" onClick={onApprove}>
                                <i className="fas fa-check"></i> Approve
                            </button>
                        </div>
                </div>
            </div>
        </>
    )

}

export default RequestDetails;