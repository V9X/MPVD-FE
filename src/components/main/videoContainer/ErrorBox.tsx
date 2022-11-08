import { createUseStyles } from "react-jss";
import useErrorBoxClasses from './useErrorBoxClasses'

function ErrorWindow(props: {message: string}) {
  const classes = useErrorBoxClasses();

  return (
    <div className={classes.errorContainer}>
      <span>Something went wrong</span>
      <span>{props.message}</span>
    </div>
  );
}

export default ErrorWindow;
