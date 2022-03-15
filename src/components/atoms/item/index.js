import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,} 
from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';


const ListItem = ({ todo, deleteTodo, markTodoComplete }) => {
  const COLORS = {primary: '#1f145c', white: '#fff'};

  return (
    <View style={styles.listItem}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.primary,
            textDecorationLine: todo?.completed ? 'line-through' : 'none',
          }}>
          {todo?.task}
        </Text>
      </View>
      {!todo?.completed && (
        <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
          <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
            <Icon name="done" size={20} color="white" />
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <View style={styles.actionIcon}>
          <Icon name="delete" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;