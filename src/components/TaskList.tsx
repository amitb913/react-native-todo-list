import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Dim } from "../Constants";
import CreateTaskButton from "./CreateTaskButton";
import EditModal from "./EditModal";
import TaskItem from "./TaskItem";

interface TaskListProps {}

const TaskList = (props: TaskListProps) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
    { id: 4, name: "Task 4" },
    { id: 5, name: "Task 5" },
    { id: 6, name: "Task 6" },
    { id: 7, name: "Task 7" },
    { id: 8, name: "Task 8" },
    { id: 9, name: "Task 9" },
    { id: 10, name: "Task 10" },
    { id: 11, name: "Task 11" },
    { id: 12, name: "Task 12" },
    { id: 13, name: "Task 13" },
    { id: 14, name: "Task 14" },
    { id: 15, name: "Task 15" },
    { id: 16, name: "Task 16" },
    { id: 17, name: "Task 17" },
  ]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);
  const [textEntry, setTextEntry] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <EditModal
        visible={editModalVisible}
        textEntry={textEntry}
        onPressCancel={() => {
          setEditModalVisible(false);
          setTextEntry("");
          setEditing(false);
          setEditingId(0);
        }}
        onPressSave={() => {
          // if editing, update the task
          if (editing) {
            const newTasks = tasks.map((task) => {
              if (task.id === editingId) {
                return { ...task, name: textEntry };
              }
              return task;
            });
            setTasks(newTasks);
          } else {
            setTasks([...tasks, { id: tasks.length + 1, name: textEntry }]);
            // TODO: change this when using db _id fields
          }
          setEditModalVisible(false);
          setTextEntry("");
          setEditing(false);
          setEditingId(0);
        }}
        editing={editing}
        setTextEntry={setTextEntry}
      />
      <FlatList
        style={{
          width: Dim.width,
          //   backgroundColor: "red",
        }}
        contentContainerStyle={{
          paddingVertical: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem
            onPressEdit={() => {
              // Editing state tells EditModal whether to edit
              // existing task or create new task
              setEditing(true);
              setEditingId(item.id);
              setEditModalVisible(true);
              setTextEntry(item.name);
            }}
            name={item.name}
            onPressDelete={() => {
              const newTasks = tasks.filter((task) => task.id !== item.id);
              setTasks(newTasks);
            }}
          />
        )}
        keyExtractor={(item): string => item.id.toString()}
        ListFooterComponent={
          <CreateTaskButton
            onPress={() => {
              setEditModalVisible(true);
              setTextEntry("");
              setEditing(false);
            }}
          />
        }
      />
    </View>
  );
};

export default TaskList;
