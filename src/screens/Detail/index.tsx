import React from "react";
import { ScrollView } from "react-native";
import { DetailScreenProps } from "../../models";
import Tweet from "../../components/Tweet";
import styles from "./styles";

const Detail: React.FC = ({ route }: DetailScreenProps) => {
  const item = route.params.item || {};

  return (
    <ScrollView style={styles.scrollView}>
      <Tweet item={item} isPressable={false} />
    </ScrollView>
  );
};

export default Detail;
