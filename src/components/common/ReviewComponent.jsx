import { FaUserAlt } from "react-icons/fa";

function ReviewComponent({ review }) {
    return (
        <div key={review.id} className="d-block toast w-100 my-2 rounded-4" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header bg-dark rounded-2">
                <strong className="me-auto">
                    <FaUserAlt style={{ fontSize: "25px", marginBottom: "5px", paddingRight: "10px" }} /> Recensione di: {review.name}
                </strong>
                <small className="text-body-secondary"> 11 mins ago </small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body bg-white text-dark rounded-2">
                {review.text}
            </div>
        </div>
    )
}

export default ReviewComponent
