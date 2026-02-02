import { useEffect } from "react";
import RequestData from "./RequestData";
import { getRequests } from "../api/admins";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestDetails from "./RequestDetails";
import { useMemo } from "react";
import ApproveModal from "./ApproveModal";
import RejectModal from "./RejectModal";

function Request(){

    const [request , setRequest] = useState([]);
    const [openDetails , setOpenDetails] = useState(false);
    const [approve , setApprove] = useState(false);
    const [reject , setReject] = useState(false);
    const [currReq , setCurrReq] = useState({});

    const [status , setStatus] = useState("PENDING");

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

    const usedArray = useMemo(() => {
        if (!status) return request;

        return request.filter(r => r.status === status);
    }, [status, request]);


    return(
        <>
            {
                openDetails && 
                
                <RequestDetails 
                    requests={currReq} 
                    onClose={() => setOpenDetails(false)}
                    onApprove={() =>{ setOpenDetails(false) ;setApprove(true)  }}
                    onReject={() => { setOpenDetails(false); setReject(true)}}
                />
            }
            {approve && <ApproveModal onClose={() => setApprove(false)}/>}
            {reject && <RejectModal onClose={() => setReject(false)} />}
            <div class="tab-content active" id="requests">
                <div class="tabs">
                    <button class={`tab ${status === 'PENDING' ? "active" : ""}`} onClick={() => setStatus("PENDING")}>Pending</button>
                    <button class={`tab ${status === 'APPROVED' ? "active" : ""}`} onClick={() => setStatus("APPROVED")}>Approved</button>
                    <button class={`tab ${status === 'REJECTED' ? "active" : ""}`} onClick={() => setStatus("REJECTED")}>Rejected</button>
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
                                        usedArray?.map((r,i) => 
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