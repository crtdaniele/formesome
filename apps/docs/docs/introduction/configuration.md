---
sidebar_position: 2
---

# Configuration

Let's go to configure your app to use Formesome. The first thing is to install the Formesome Provider.

## Formesome Provider

```tsx title="src/App.tsx"
import { FormesomeProvider } from 'formesome';
import { Home } from './Home';

const App: React.FC = () => {
  return (
    <FormesomeProvider>
      <Home />
    </FormesomeProvider>
  );
};

export default App;
```

:::tip Recoil in your app?

If you use Recoil in your app, you don't need to install the Formesome Provider.

:::
