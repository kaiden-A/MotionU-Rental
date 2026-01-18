

function Form(){


    return(
        <div className="request-form" id="requestForm" style={{display : "block"}}>
            <h3 className="form-title">Rental Details</h3>
            <form id="rentalForm">
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label" for="name">Full Name</label>
                        <input type="text" id="name" className="form-input" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" for="email">Email Address</label>
                        <input type="email" id="email" className="form-input" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" for="phone">Phone Number</label>
                        <input type="tel" id="phone" className="form-input" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" for="duration">Rental Duration</label>
                        <select id="duration" className="form-select" required>
                            <option value="">Select duration</option>
                            <option value="1">1 Day</option>
                            <option value="3">3 Days</option>
                            <option value="7">1 Week</option>
                            <option value="14">2 Weeks</option>
                        </select>
                    </div>
                    
                    <div className="form-group full-width">
                        <label className="form-label" for="notes">Additional Notes (Optional)</label>
                        <textarea id="notes" className="form-textarea" rows="3" placeholder="Any special requests or instructions..."></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn" id="submitBtn">
                        Submit Rental Request
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;