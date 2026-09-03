import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Dashboard() {
  return (
    <>
      <PageTitle
        title="Dashboard"
        subtitle="Manage your restaurant orders and activities"
      />

      <div className="card-grid">
        <Card
          title="Total Orders"
          description="25 orders received"
        />

        <Card
          title="Today's Sales"
          description="₹12,500 total sales"
        />

        <Card
          title="Pending Orders"
          description="5 orders awaiting preparation"
        />
      </div>
    </>
  );
}

export default Dashboard;