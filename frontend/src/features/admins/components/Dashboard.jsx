import { useEffect, useState } from "react";
import Analytics from "./Analystics";
import Stats from "./Stats";
import { getDashboardData } from "../api/admins";


function Dashboard(){

    const [stat , setStat] = useState({});

    useEffect(() => {

        const fetchData = async() => {
            const data = await getDashboardData();
            setStat(data.data.data)
        
        }

        fetchData();

    }, [])

    return(
        <>
            <div className="tab-content active" id="dashboard">
                <Stats
                    total={stat.totalRequest}
                    pending={stat.totalPending}
                    approved={stat.totalApproved}
                    revenue={0}
                />
                <Analytics/>
                
                <div className="table-card">
                    <div className="table-header">
                        <h3 className="table-title">Recent Rental Requests</h3>
                        <div className="table-actions">
                            <button className="btn btn-outline">
                                <i className="fas fa-download"></i> Export
                            </button>
                        </div>
                    </div>
                    <div className="table-container">
                        <table id="recentRequestsTable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Products</th>
                                    <th>Duration</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add Data by JavaScript */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard;