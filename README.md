## Step 1: Clone the app

Make git clone:

```bash
git clone https://github.com/yevheniishabelnyk/twitterapp.git
```

## Step 2: Installation

Go to the root folder and make:

### For iOS

```bash
# using npm
npm install

# go to the ios folder
pod install
```

### For Android

```bash
# using npm
npm install
```

## Step 3: Start the app

### For iOS

```bash
npm run ios -- --simulator="iPhone 15 Pro (iOS 17.2)"
```

### For Android

Before this you need to create a virtual device in the Android studio and run the simulator.

```bash
react-native run-android
```
