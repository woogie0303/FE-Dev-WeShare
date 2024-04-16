interface Props {
  errMessage: string;
  errClass: string;
  isError: boolean;
}

function ErrorMessage({ errMessage, errClass, isError }: Props) {
  return (
    isError && <div className={`${errClass} text-red-500`}>{errMessage}</div>
  );
}

export default ErrorMessage;
