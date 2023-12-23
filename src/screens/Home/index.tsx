// @ts-nocheck
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { TWEETS, TWEETS_LOADED } from "../../mock";
import Tweet from "../../components/Tweet";
import TweetSkeleton from "../../components/TweetSkeleton";
import { TweetProps, TweetItemType } from "../../models";
import { MAX_TWEETS_LENGTH } from "../../utils/constants";

import styles from "./styles";

const arrayOfTenSkeletonItems = Array.from({ length: 10 }, (_, index) => index + 1);

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<TweetItemType[]>(TWEETS);
  const [visibleTweets, setVisibleTweets] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMoreTweets();
  }, []);

  const loadMoreTweets = () => {
    if (!isLoading && tweets.length <= MAX_TWEETS_LENGTH) {
      setIsLoading(true);

      setTimeout(() => {
        setTweets((prevTweets) => [...prevTweets, ...(prevTweets.length === 0 ? TWEETS : TWEETS_LOADED)]);

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

  const data = tweets.slice(0, visibleTweets);

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
