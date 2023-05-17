import React from "react";
import babyroll from "../../assets/videos/Babyvid.mp4";

const BabyVideo = () => {
    return (
        <div className="video">
            <video 
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
            >
                <source src={babyroll} type="video/mp4" />
            </video>

        </div>
    )
}

export default BabyVideo