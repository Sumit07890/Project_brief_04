function Welcome({ userName, projectName }) {
  return (
    <div className="welcome">
      <h2>Welcome, {userName}!</h2>
      <p>Project: {projectName}</p>
    </div>
  );
}

export default Welcome;