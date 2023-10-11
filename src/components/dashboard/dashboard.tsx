import React from "react";
import InventoryOverview from "./inventoryOverview";
import DashboardSummary from "./inventorySummary";

function Dashboard() {
    return (
        <section className="content">
            <DashboardSummary />
            <InventoryOverview />
        </section>
        
    );
}

export default Dashboard;