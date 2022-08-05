const CardFooter = ({ title, subtitle, extras }) => {
  return (
    <article className="card-footer">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
    </article>
  );
};

export default CardFooter;
