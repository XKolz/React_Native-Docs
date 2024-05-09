import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  Platform,
  Switch
} from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  // return (
  //   <KeyboardAvoidingView
  //     behavior="padding"
  //     keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
  //     style={styles.container}
  //   >
  //     <View style={styles.form}>
  //       <Image
  //         source={require("./assets/1.webp")}
  //         style={{
  //           width: '100%',
  //           height: 400,
  //           alignSelf: "center",
  //           marginBottom: 50,
  //         }}
  //       />
  //       <Text style={styles.label}>Username</Text>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Enter your username"
  //         value={username}
  //         onChangeText={setUsername}
  //       />
  //       {errors.username ? (
  //         <Text style={styles.errorText}>{errors.username}</Text>
  //       ) : null}

  //       <Text style={styles.label}>Password</Text>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Enter your password"
  //         value={password}
  //         onChangeText={setPassword}
  //         secureTextEntry
  //       />
  //       {errors.password ? (
  //         <Text style={styles.errorText}>{errors.password}</Text>
  //       ) : null}

  //       {/* <TextInput placeholder="Multilinetext" multiline style={[styles.multiline, styles.input]} /> */}
  //       <View style={styles.switchContainer}>
  //         <Text style={styles.text}>Dark</Text>
  //       <Switch value={isDarkMode} onValueChange={() => setIsDarkMode((previousState) => !previousState)}
  //         trackColor={{ false: "red",true: "purple"}}
  //         thumbColor={"green"} />

  //       </View>
        

  //       <Button title="Login" onPress={handleSubmit} />
  //     </View>
  //   </KeyboardAvoidingView>
  // );
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={isDarkMode ? darkStyles.container : styles.container}
    >
      <View style={isDarkMode ? darkStyles.form : styles.form}>
        <Image
          source={require("./assets/1.webp")}
          style={{
            width: '100%',
            height: 400,
            alignSelf: "center",
            marginBottom: 50,
          }}
        />
        <Text style={isDarkMode ? darkStyles.label : styles.label}>Username</Text>
        <TextInput
          style={isDarkMode ? darkStyles.input : styles.input}
          placeholder="Enter your username"
          placeholderTextColor={isDarkMode ? "#ccc" : "#666"} // Adjust placeholder text color
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && (
          <Text style={isDarkMode ? darkStyles.errorText : styles.errorText}>{errors.username}</Text>
        )}
  
        <Text style={isDarkMode ? darkStyles.label : styles.label}>Password</Text>
        <TextInput
          style={isDarkMode ? darkStyles.input : styles.input}
          placeholder="Enter your password"
          placeholderTextColor={isDarkMode ? "#ccc" : "#666"} // Adjust placeholder text color
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && (
          <Text style={isDarkMode ? darkStyles.errorText : styles.errorText}>{errors.password}</Text>
        )}
  
        <View style={styles.switchContainer}>
          <Text style={isDarkMode ? darkStyles.text : styles.text}>Theme toggle</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(previousState => !previousState)}
            trackColor={{ false: "", true: "" }}
            thumbColor={""}
          />
        </View>
  
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  multiline:{
    minHeight:100,
    textAlignVertical: "top" 
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    },
    text:{
      fontSize: 16,
      padding:10
    }
});
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#333",
  },
  form: {
    backgroundColor: "#555",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#fff", // Text color for better readability in dark mode
  },
  input: {
    height: 40,
    borderColor: "#aaa",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: "#fff", // Text color for better readability in dark mode
    backgroundColor: "#666" // Background color of the input field
  },
  errorText: {
    color: "#ffaaaa", // Adjust the color to ensure visibility in dark mode
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: "#fff", // Ensure text is readable in dark mode
  }
});


export default LoginForm;
