import React from "react";

function DashboardSummary() {
    return (
        <div>
            <div className="titleHeader">
                <div className='titleName'>Dashboard</div>
            </div>
            <h3>Summary</h3>
            <div className="asContainer">
                {/* Items Available Summary */}
                <div className="summaryBox">
                    <div className="scContainer">
                        <p className="summaryCount">235</p>
                    </div>
                    <div className="slabelContainer">
                        <p className="slabel">Items Borrowed</p>
                    </div>
                </div>

                {/* Items Borrowed Summary */}
                <div className="summaryBox">
                    <div className="scContainer">
                        <p className="summaryCount">235</p>
                    </div>
                    <div className="slabelContainer">
                        <p className="slabel">Items Borrowed</p>
                    </div>
                </div>

                {/* Pending Requests Summary */}
                <div className="summaryBox">
                    <div className="scContainer">
                        <p className="summaryCount">235</p>
                    </div>
                    <div className="slabelContainer">
                        <p className="slabel">Pending Request</p>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default DashboardSummary;