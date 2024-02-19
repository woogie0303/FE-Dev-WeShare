interface Props {
  errMessage: string;
  errClass: string;
}

function ErrorMessage({ errMessage, errClass }: Props) {
  return <div className={`${errClass} text-red-500`}>{errMessage}</div>;
}

export default ErrorMessage;
