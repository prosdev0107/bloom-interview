import React from 'react';
import {
  View,
  Text,
  Image,
  ImageProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface IPhotoProps extends ImageProps {
  onRemove: () => void;
}

export const Photo: React.FC<IPhotoProps> = ({onRemove, ...props}) => {
  return (
    <View style={styles.container}>
      <Image {...props} style={styles.photo} />
      <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
        <Text>&#x274C;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  photo: {
    width: '100%',
    height: 100,
    borderRadius: 15,
  },
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    elevation: 4,
  },
});
