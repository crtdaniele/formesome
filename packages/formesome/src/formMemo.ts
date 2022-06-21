import React, { FunctionComponent } from 'react';

const valueAreEqual = (prevProps: any, nextProps: any) => {
  if ('value' in prevProps && 'value' in nextProps) {
    return prevProps.value === nextProps.value;
  }
  return false;
};

/**
 * formMemo is a wrapper to use to wrap your component with the input to memoize and avoid re-render unnecessary
 * @param children an element in jsx or tsx
 * @returns A memoized component
 */
export function formMemo<T>(children: FunctionComponent<T>) {
  return React.memo(children, valueAreEqual);
}
