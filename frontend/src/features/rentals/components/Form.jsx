import { useContext  , useState} from "react";
import { ChooseContext } from "../../../context/ChooseContext";
import { createRequest } from "../api/users";
import Notifications from "../../components/Notifications";

function Form({setDays}){

    const {choose} = useContext(ChooseContext);

    const [success , setSuccess] = useState(false);

    const [email , setEmail] = useState("");
    const [start , setStart] = useState("");
    const [end , setEnd] = useState("");
    const [notes , setNotes] = useState("");

    const calculateDays = (startDate, endDate) => {
        if (!startDate || !endDate) return 0;

        const startTime = new Date(startDate);
        const endTime = new Date(endDate);

        const diffTime = endTime - startTime;
        return Math.ceil(diffTime  / (1000 * 60 * 60 * 24));
    };

      const handleStartChange = (value) => {
        setStart(value);
        setDays(calculateDays(value, end));
    };

    const handleEndChange = (value) => {
        setEnd(value);
        setDays(calculateDays(start, value));
    };



    const sendForm = async (e) => {
        
        e.preventDefault();
        
        try{

    
            const promises = choose.map(c => 
                createRequest( c.productId, email, start ,end ,c.quantity ,notes)
            );

            

            const responses = await Promise.all(promises);
            console.log(responses);
            
            const allSuccess = responses.every(res => res.data.success);

            if (allSuccess) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        }catch(err){
            console.error(err.response?.data || err.message);
        }

    }

    

    return(
        <>
            {success && <Notifications onClose={() => setSuccess(false)} success={true} message={'Successfully Send Request , Check Your Email for Confirmations'}/>}
            <div className="request-form" id="requestForm" style={{display : "block"}}>
                <h3 className="form-title">Rental Details</h3>
                <form id="rentalForm" onSubmit={sendForm}>
                    <div className="form-grid">
                        
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="form-input" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" htmlFor="start-time">Start Time</label>
                            <input 
                                type="date" 
                                id="start-time" 
                                className="form-input" 
                                required
                                value={start}
                                onChange={(e) => handleStartChange(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="end-time">End Time</label>
                            <input 
                                type="date" 
                                id="end-time" 
                                className="form-input" 
                                required
                                value={end}
                                onChange={(e) => handleEndChange(e.target.value)}
                            />
                        </div>                    
    
                        
                        <div className="form-group full-width">
                            <label className="form-label" htmlFor="notes">Additional Notes (Optional)</label>
                            <textarea 
                                id="notes" 
                                className="form-textarea" 
                                rows="3" 
                                placeholder="Any special requests or instructions..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="submit-btn" id="submitBtn">
                            Submit Rental Request
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;