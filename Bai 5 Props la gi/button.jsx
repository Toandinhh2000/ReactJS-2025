bimport styles from "./Button.module.css";
import className from "className";

export default function Button({primary}) {
  return (
    <Button
    className(classNames(styles.btn, {
[styles.primary]:primary,
    })}
    >
  Click me
  </button>
  );
}
