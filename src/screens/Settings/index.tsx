import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getUsername, getUseId } from "../../store/selectors";
import { logout } from "../../store/actions";
import { AppDispatch } from "../../store/types";

import AVATAR from "../../assets/avatar/user1.jpg";

import styles from "./styles";

const Settings = () => {
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector(getUseId);
  const username = useSelector(getUsername);

  const onPress = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={AVATAR} />
      </View>

      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>{username}</Text>

        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.info}>{userId}</Text>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
