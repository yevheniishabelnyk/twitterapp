import { ImageSourcePropType } from "react-native";
import { RouteProp } from "@react-navigation/native";

export type TweetItemType = {
  id: string;
  user: string;
  userName: string;
  avatar: ImageSourcePropType;
  time: string;
  message: string;
};

export type TweetProps = {
  item: TweetItemType;
  isPressable?: boolean;
};

type DetailScreenParams = {
  item: TweetProps;
};

export type UserState = {
  id: string;
  username: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string;
  tweets: TweetItemType[];
};

export type DetailScreenProps = RouteProp<DetailScreenParams, "Detail">;
