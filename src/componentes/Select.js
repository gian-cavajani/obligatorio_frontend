const Select = (props) => {
  return (
    <select onChange={props.handle} ref={props.ref}>
      <option selected disabled>
        Elija una ciudad
      </option>
      {props.lista.map((d) => (
        <option key={d.id} value={d.id}>
          {d.nombre}
        </option>
      ))}
    </select>
  );
};

export default Select;
