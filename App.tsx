import { Button, View } from 'react-native';

import { Message } from './src/component/Message';
import { useState } from 'react';

import { styles } from './styles'

export default function App () {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      {show && <Message /> }

      <Button 
        title={show ? 'Fechar mensagem' : 'Abrir mensagem'}
        onPress={() => setShow((prevState) => !prevState)}
        color='#3b82f6'
      />
    </View>
  );
}
