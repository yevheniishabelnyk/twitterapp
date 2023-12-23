import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserData } from "../../store/actions";
import { AppDispatch } from "../../store/types";
import { getIsLoading } from "../../store/selectors";

import LOGO from "../../assets/icons/logo.png";

import { COLORS } from "../../utils/constants";

import styles from "./styles";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const isLoading = useSelector(getIsLoading);

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onChangeText = (value: string) => {
    setUsername(value);

    setError("");
  };

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("User name cannot be empty.");

      return;
    }

    setError("");

    dispatch(fetchUserData({ username }));
  };

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={[styles.logo, { top: insets.top }]} />

      <View style={styles.content}>
        <View style={styles.inputWrap}>
          <TextInput
            style={[styles.input, error && styles.inputErrorBorder]}
            placeholder='Enter your username'
            value={username}
            onChangeText={onChangeText}
            autoCapitalize='none'
            autoCorrect={false}
          />

          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {isLoading ? (
            <ActivityIndicator size='small' color={COLORS.white} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
