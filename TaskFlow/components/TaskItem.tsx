import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskItemProps {
  item: Task;
  onToggle: (item: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ item, onToggle, onDelete }: TaskItemProps) {
  return (
    <TouchableOpacity
      style={styles.taskRow}
      onPress={() => onToggle(item)}
      onLongPress={() => onDelete(item.id)}
      activeOpacity={0.7}
    >
      <MaterialIcons
        name={item.completed ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={item.completed ? '#5A6472' : '#2E5BBA'}
      />
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.title}
      </Text>
      <MaterialIcons name="drag-handle" size={20} color="#CBD5E1" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  taskText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2A44',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#5A6472',
  },
});
