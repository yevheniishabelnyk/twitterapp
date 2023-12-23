import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Avatar from "../../components/Avatar";
import { TweetProps } from "../../models";
import { SCREEN_NAMES } from "../../utils/constants";

import styles from "./styles";

const Tweet = ({ item, isPressable = true }: TweetProps) => {
  let { user, userName, avatar, time, message } = item;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(SCREEN_NAMES.DETAIL, { item });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={!isPressable}>
      <View style={styles.content}>
        <Avatar size={50} photo={avatar} />

        <View style={styles.body}>
          <View style={styles.headerContainer}>
            <View style={styles.headerWrapper}>
              <Text style={styles.username}>{user}</Text>

              <Text style={styles.userTagName}>{userName}</Text>

              <View style={styles.dot} />
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>

          <View style={styles.msg}>
            <Text>{message}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tweet;
