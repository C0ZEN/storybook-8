import { PrimeReactContext } from 'primereact/api';
import { withReactContext } from 'storybook-react-context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function uiGetPrimeReactContextDecorator(): any {
  return withReactContext({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Context: PrimeReactContext,
    initialState: { ripple: true },
  });
}
