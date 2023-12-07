/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const ImageView = () => {

  return (
    <ScrollView>
      {/* 加载网络资源 */}
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }} />
      {/* 加载android项目下的assets文件资源 */}
      <Image
        source={{ uri: 'asset:/test_image.jpg' }}
        style={{ width: 200, height: 200 }}
      />
      {/* 加载静态图片资源 */}
      <Image
        source={require('../img/test_image.jpg')}
        style={{ width: 200, height: 200 }} />
      {/* 加载网络资源，方式2 */}
      <Image
        source={{
          uri: 'https://facebook.github.io/react/logo-og.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache'
          },
          body: 'Your Body goes here'
        }}
        style={{ width: 400, height: 400 }}
      />
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: 'contain'
        }}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
        }}
      />
      {/* 缓存控制（仅 iOS） */}
      <Image
        source={{
          uri: 'https://facebook.github.io/react/logo-og.png',
          cache: 'only-if-cached'
        }}
        style={{ width: 400, height: 400 }}
      />
      {/* 图片布局 */}
      <ImageBackground
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: '100%', height: '100%' }}>
        <Text
          style={[styles.bigBlue, styles.container]}>Inside</Text>
      </ImageBackground>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
    marginBottom: 150,
  },
  bigBlue: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default ImageView;
