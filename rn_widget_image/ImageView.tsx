/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const ImageView = () => {

  return (
    <View>
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
    </View>
  );
};

export default ImageView;
