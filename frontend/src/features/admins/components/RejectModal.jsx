
function RejectModal({onClose}){

    return(
        <>
            <div className="modal" id="rejectionModal" style={{display : "flex"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Reject Rental Request</h2>
                        <button className="close-modal" onClick={onClose}>&times;</button>
                    </div>
                    
                    <form id="rejectionForm">
                        <div className="form-group full-width">
                            <label className="form-label" for="rejectionReason">Reason for Rejection *</label>
                            <select id="rejectionReason" className="form-select" required>
                                <option value="">Select Reason</option>
                                <option value="unavailable">Product Unavailable</option>
                                <option value="invalid">Invalid Request Details</option>
                                <option value="payment">Payment Issues</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div className="form-group full-width">
                            <label className="form-label" for="rejectionNotes">Additional Notes</label>
                            <textarea id="rejectionNotes" className="form-textarea" rows="3" placeholder="Provide additional details..."></textarea>
                        </div>
                        
                        <div className="modal-actions">
                            <button type="button" className="modal-btn secondary" onClick={onClose}>Cancel</button>
                            <button type="submit" className="modal-btn primary">Confirm Rejection</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RejectModal;