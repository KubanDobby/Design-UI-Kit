import { computed, ref, watch, type Ref } from "vue";

type Params<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
};

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: Params<T>): [Ref<T>, (next: T) => void] {
  const uncontrolled = ref(defaultValue) as Ref<T>;
  const controlled = ref(value) as Ref<T | undefined>;

  watch(
    () => value,
    (next) => {
      controlled.value = next;
    }
  );

  const current = computed<T>(() =>
    controlled.value !== undefined ? controlled.value : uncontrolled.value
  );

  const setValue = (next: T) => {
    if (controlled.value === undefined) {
      uncontrolled.value = next;
    }
    onChange?.(next);
  };

  return [current, setValue];
}
