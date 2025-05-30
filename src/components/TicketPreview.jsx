import React, { useState } from "react";
import "../styles/TicketPreview.css";

import Frame1 from "../components/Frame1";
import Frame2 from "../components/Frame2";
import Frame3 from "../components/Frame3";

function TicketPreview({ logoImgUrl, fillColor, frameIndex }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleToggleColor = () => {
        setIsClicked((prev) => !prev);
    };

    const getFrameComponent = (index) => {
        switch (index) {
            case 1:
                return <Frame1 fillColor={fillColor} />;
            case 2:
                return <Frame2 fillColor={fillColor} />;
            case 3:
                return <Frame3 fillColor={fillColor} />;
            default:
                return <Frame1 fillColor={fillColor} />;
        }
    };

    const frameComponent = getFrameComponent(frameIndex);

    return (
        <div className="ticket-preview-container">
            <div className="preview-title-container">
                <p className="preview-text">나만의 럭키티켓을 만들어 봐요!</p>
                <img src={logoImgUrl} alt="이모지 아이콘" className="emoji-icon" />
            </div>

            <div className="ticket-frame" onClick={handleToggleColor}>
                {frameComponent}
            </div>

            {/* <div className="ticket-content">
                {frameComponent}
            </div> */}
        </div>
    );
}

export default TicketPreview;
