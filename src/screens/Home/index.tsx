// @ts-nocheck
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Tweet from "../../components/Tweet";
import TweetSkeleton from "../../components/TweetSkeleton";
import { TweetProps, TweetItemType } from "../../models";
import { MAX_TWEETS_LENGTH } from "../../utils/constants";
import { fetchUserTweetsData } from "../../store/actions";
import { getTweets } from "../../store/selectors";

import styles from "./styles";

const arrayOfTenSkeletonItems = Array.from({ length: 10 }, (_, index) => index + 1);

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const userTweets: TweetItemType[] = useSelector(getTweets);

  const [visibleTweets, setVisibleTweets] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMoreTweets();
  }, [visibleTweets]);

  const loadMoreTweets = () => {
    if (!isLoading && userTweets.length < MAX_TWEETS_LENGTH) {
      setIsLoading(true);

      dispatch(fetchUserTweetsData(visibleTweets));

      setTimeout(() => {
        setVisibleTweets((prevVisibleTweets) => prevVisibleTweets + 10);

        setIsLoading(false);
      }, 2000); // Simulating a delay for loading
    }
  };

  const renderItem = ({ item }: TweetProps) => {
    return <Tweet item={item} />;
  };

  const renderListFooterComponent = () => {
    return (
      <>
        {arrayOfTenSkeletonItems.map((item, _) => (
          <TweetSkeleton key={item} />
        ))}
      </>
    );
  };

  const data = userTweets.slice(0, visibleTweets);

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatlistContainer}
        onEndReached={loadMoreTweets}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isLoading && renderListFooterComponent()}
      />
    </>
  );
};

export default Home;
