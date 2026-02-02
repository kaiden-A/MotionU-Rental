
function ApproveModal({onClose}){

    return(
        <>
            <div className="modal" id="approvalModal" style={{display : 'flex'}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Approve Rental Request</h2>
                        <button className="close-modal" onClick={onClose}>&times;</button>
                    </div>
                    
                    <form id="approvalForm">
                        <div className="form-grid">
                            {/* <div className="form-group">
                                <label className="form-label" for="pickupDate">Pickup Date *</label>
                                <input type="text" id="pickupDate" className="form-input datepicker" required readonly/>
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label" for="returnDate">Return Date *</label>
                                <input type="text" id="returnDate" className="form-input datepicker" required readonly/>
                            </div>
                             */}
                            <div className="form-group full-width">
                                <label className="form-label" for="approvalNotes">Notes for Customer</label>
                                <textarea id="approvalNotes" className="form-textarea" rows="3" placeholder="Add any instructions or information for the customer..."></textarea>
                            </div>
                        </div>
                        
                        <div className="modal-actions">
                            <button type="button" className="modal-btn secondary" onClick={onClose}>Cancel</button>
                            <button type="submit" className="modal-btn primary">Confirm Approval</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ApproveModal;