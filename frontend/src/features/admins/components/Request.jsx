import RequestData from "./RequestData";

function Request(){

    return(
        <>
            <div class="tab-content active" id="requests">
                <div class="tabs">
                    <button class="tab active" data-request-tab="pending">Pending</button>
                    <button class="tab" data-request-tab="approved">Approved</button>
                    <button class="tab" data-request-tab="rejected">Rejected</button>
                    <button class="tab" data-request-tab="completed">Completed</button>
                </div>
                
                <div class="request-tab-content active" id="pendingRequestsTab">
                    <div class="table-card">
                        <div class="table-container">
                            <table id="pendingRequestsTable">
                                <thead>
                                    <tr>
                                        <th>Request ID</th>
                                        <th>Customer</th>
                                        <th>Products</th>
                                        <th>Total</th>
                                        <th>Request Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* */}
                                    <RequestData/>
                                    <RequestData/>
                                    <RequestData/>
                                    <RequestData/>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="request-tab-content" id="approvedRequestsTab">
                    <div class="table-card">
                        <div class="table-container">
                            <table id="approvedRequestsTable">
                                <thead>
                                    <tr>
                                        <th>Request ID</th>
                                        <th>Customer</th>
                                        <th>Pickup Date</th>
                                        <th>Return Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Request;