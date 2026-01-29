
function Analytics(){

    return(
        <>
            <div className="analytics-grid">
                <div className="chart-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Monthly Rental Trends</h3>
                        <select className="form-select" style={{width: "150px"}}>
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                            <option>All Time</option>
                        </select>
                    </div>
                    <div className="chart-container">
                        <div className="chart-placeholder">
                            <div style={{textAlign: "center"}}>
                                <i className="fas fa-chart-line fa-3x" style={{marginBottom: "16px" , color: "#e2e8f0"}}></i>
                                <p>Monthly rental chart would appear here</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="chart-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Top Products</h3>
                    </div>
                    <div className="chart-container">
                        <div className="chart-placeholder">
                            <div style={{textAlign: "center"}}>
                                <i className="fas fa-chart-pie fa-3x" style={{marginBottom: "16px" , color: "#e2e8f0"}}></i>
                                <p>Product popularity chart would appear here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics;