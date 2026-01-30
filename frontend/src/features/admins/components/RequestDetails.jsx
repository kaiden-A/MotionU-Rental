
function RequestDetails({requests , onClose}){


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
                            <div className="detail-value">$322</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Status:</div>
                            <div className="detail-value">
                                <span className="status-badge status-pending">
                                    {requests.status}
                                </span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Products:</div>
                            <div className="detail-value">
                                <ul style={{paddingLeft: "20px"}}>
                                    <li>Cordless Drill Set (1 x $18/day)</li><li>Tool Kit Set (1 x $28/day)</li>
                                </ul>
                            </div>
                        </div>
                    
                            <div className="detail-row">
                                <div className="detail-label">Customer Notes:</div>
                                <div className="detail-value">Home renovation project</div>
                            </div>
                        </div>
                    
                    <div className="modal-actions" id="requestActions">
                            <button className="modal-btn secondary" id="rejectRequestBtn">
                                <i className="fas fa-times"></i> Reject
                            </button>
                            <button className="modal-btn primary" id="approveRequestBtn">
                                <i className="fas fa-check"></i> Approve
                            </button>
                        </div>
                </div>
            </div>
        </>
    )

}

export default RequestDetails;