import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Profile() {
  return (
    <>
      <PageTitle
        title="Profile"
        subtitle="Manage your profile information"
      />

      <div className="card-grid">
        <Card
          title="Restaurant Information"
          description="View and manage your restaurant details."
        />

        <Card
          title="Account Settings"
          description="Manage your account preferences."
        />
      </div>
    </>
  );
}

export default Profile;