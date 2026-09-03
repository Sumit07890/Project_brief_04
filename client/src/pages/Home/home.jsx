import Card from "../../components/ui/Card";
import Welcome from "../../components/ui/Welcome";
import Button from "../../components/ui/Button";
function Home() {
  return (
    <>
      <Welcome />

      <div className="card-grid">
        <Card
          title="Popular Items"
          description="Explore our most popular restaurant dishes."
        />

        <Card
          title="Easy Ordering"
          description="Place your food order quickly and easily."
        />
        <Button onClick={() => alert("Welcome to FoodHub!")}>
  Explore Food
</Button>
      </div>
    </>
  );
}

export default Home;