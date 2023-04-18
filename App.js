
 
import { NativeBaseProvider,Box ,Text} from 'native-base';
import { LoginScreen } from './src/Screens/LoginScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}

 
