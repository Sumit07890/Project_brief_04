function Card({ title, description, children }) {
  return (
    <div className="ui-card">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export default Card;