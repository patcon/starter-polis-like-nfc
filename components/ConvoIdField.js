import * as React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const Component = ({ disabled, value, onValueChange, error }) => {

  return (
    <View>
      <TextInput
        disabled={disabled}
        label="Conversation ID"
        mode="outlined"
        value={value}
        onChangeText={onValueChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <HelperText type="error" visible={error} style={{minHeight: 28, marginBottom: -24}}>{error}</HelperText>
    </View>
  );
};

export default Component;