import { useEffect } from "react";
import RequestData from "./RequestData";
import { getRequests } from "../api/admins";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestDetails from "./RequestDetails";

function Request(){

    const [request , setRequest] = useState([]);
    const [openDetails , setOpenDetails] = useState(false);
    const [currReq , setCurrReq] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try{

                const res = await getRequests();
                console.log(res.data);
                setRequest(res.data.requests);
                
            }catch(err){

                if(err.response.status === 401){
                    navigate('/login')
                }

                console.error(err.response?.data || err.message);
            }
        }

        fetchData();

    }, [])

    return(
        <>
            {openDetails && <RequestDetails requests={currReq} onClose={() => setOpenDetails(false)}/>}
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
                                    {
                                        request?.map((r,i) => 
                                            <RequestData 
                                                key={i}
                                                id={r.requestId}
                                                total={r.amount}
                                                personOrder={r.email}
                                                date={r.startDate}
                                                name={r.name}
                                                openDetails={() => {setOpenDetails(true) ; setCurrReq(r)}}
                                            />
                                        )
                                    }

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