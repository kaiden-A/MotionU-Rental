
function Stats({total , pending , approved , revenue}){

    return(
        <>
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-header">
                        <div>
                            <div className="stat-value" id="totalRequests">{total}</div>
                            <div className="stat-label">Total Requests</div>
                        </div>
                        <div className="stat-icon total">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-header">
                        <div>
                            <div className="stat-value" id="pendingRequests">{pending || 0}</div>
                            <div className="stat-label">Pending Requests</div>
                        </div>
                        <div className="stat-icon pending">
                            <i className="fas fa-clock"></i>
                        </div>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-header">
                        <div>
                            <div className="stat-value" id="approvedRequests">{approved || 0}</div>
                            <div className="stat-label">Approved Requests</div>
                        </div>
                        <div className="stat-icon approved">
                            <i className="fas fa-check-circle"></i>
                        </div>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-header">
                        <div>
                            <div className="stat-value" id="totalRevenue">{`RM ${revenue || 0}`}</div>
                            <div className="stat-label">Total Revenue</div>
                        </div>
                        <div className="stat-icon revenue">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats;