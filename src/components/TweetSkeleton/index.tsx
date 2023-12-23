import React from "react";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const TweetSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item flexDirection='row' alignItems='center'>
        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} margin={12} />
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={180} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={250} height={20} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default TweetSkeleton;
