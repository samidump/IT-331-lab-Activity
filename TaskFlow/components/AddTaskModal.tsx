import { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void;
}

export default function AddTaskModal({ visible, onClose, onSubmit }: AddTaskModalProps) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim() === '') return;
    onSubmit(title);
    setTitle('');
  };

  const handleClose = () => {
    setTitle('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <Pressable style={styles.backdrop} onPress={handleClose}>
        <View style={styles.centeredView}>
          <Pressable style={styles.modalView}>
            <Text style={styles.modalTitle}>New Task</Text>
            
            <TextInput
              style={styles.input}
              placeholder="What needs to be done?"
              placeholderTextColor="#94A3B8"
              value={title}
              onChangeText={setTitle}
              autoFocus
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleClose}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.button, styles.addButton]}
                onPress={handleAdd}
              >
                <Text style={styles.addButtonText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'flex-end',
  },
  centeredView: {
    width: '100%',
  },
  modalView: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2A44',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1F2A44',
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#F1F5F9',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5A6472',
  },
  addButton: {
    backgroundColor: '#2E5BBA',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});
