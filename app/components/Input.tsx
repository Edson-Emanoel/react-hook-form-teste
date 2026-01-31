interface IInput {
  errorMessage: any;
}

const Input = ({ errorMessage, ...rest }: IInput) => {
  return (
    <>
      <input type="text" {...rest} />
      <small className="text-red-400 italic mt-0.5">{errorMessage}</small>
    </>
  );
};

export default Input;
