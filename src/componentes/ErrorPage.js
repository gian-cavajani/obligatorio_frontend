import { Link } from 'react-router-dom';
import CardFooter from './CardFooter';

const ErrorPage = () => {
  return (
    <section className="card col-6 shadow rounded offset-3 mt-5">
      <article className="card-body">
        <h2>ERROR 404</h2>
      </article>
      <CardFooter subtitle={<Link to="/">Hacia el login</Link>} />
    </section>
  );
};

export default ErrorPage;
