import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, RefreshControl } from "react-native";
import { Dim } from "../Constants";
import {
  getTasks,
  addTask,
  editTask,
  removeTask,
} from "../helpers/TaskMethods";
import CreateTaskButton from "./CreateTaskButton";
import EditModal from "./EditModal";
import TaskItem from "./TaskItem";

export interface User {
  _id: string;
  username: string;
}
interface TaskListProps {
  user: User;
}

const TaskList = (props: TaskListProps) => {
  const [tasks, setTasks] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [textEntry, setTextEntry] = useState("");

  useEffect(() => {
    (async () => {
      if (props.user._id) {
        const tasks = await getTasks(props.user._id);
        setTasks(tasks);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <EditModal
        visible={editModalVisible}
        textEntry={textEntry}
        onPressCancel={() => {
          setEditModalVisible(false);
          setTextEntry("");
          setEditing(false);
          setEditingId("");
        }}
        onPressSave={async () => {
          // if editing, update the task
          if (editing) {
            const editTaskResponse = await editTask(editingId, textEntry);
            if (editTaskResponse) {
              console.log("here");
              const newTasks = tasks.map((task) => {
                if (task._id === editingId) {
                  return { ...task, taskName: textEntry };
                }
                return task;
              });
              setTasks(newTasks);
            } else {
              alert("Unable to edit task. Please try again.");
            }
          } else {
            // create new task
            const addTaskResponse = await addTask(props.user._id, textEntry);
            if (addTaskResponse) {
              setTasks([...tasks, addTaskResponse]);
            } else {
              alert("Failed to add task. Please try again.");
            }
          }
          setEditModalVisible(false);
          setTextEntry("");
          setEditing(false);
          setEditingId("");
        }}
        editing={editing}
        setTextEntry={setTextEntry}
      />
      {props.user ? (
        <Text style={{ fontSize: 24, paddingVertical: 5, textAlign: "center" }}>
          {props.user.username}'s tasks
        </Text>
      ) : null}
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={async () => {
              const tasks = await getTasks(props.user._id);
              setTasks(tasks);
            }}
          />
        }
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
              setEditingId(item._id);
              setEditModalVisible(true);
              setTextEntry(item.taskName);
            }}
            name={item.taskName}
            onPressDelete={async () => {
              const removeTaskResponse = await removeTask(item._id);
              if (removeTaskResponse) {
                const newTasks = tasks.filter((task) => task._id !== item._id);
                setTasks(newTasks);
              } else {
                alert("Failed to delete task. Please try again.");
              }
            }}
          />
        )}
        keyExtractor={(item): string => item._id.toString()}
        ListEmptyComponent={() => (
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            You don't have any tasks yet.
          </Text>
        )}
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
