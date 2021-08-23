import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import './index.scss'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class Index extends Component {
  componentDidMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onShareAppMessage() {
    return {
      title: '享受会员福利，解锁品质生活',
      path: '/pages/index/index',
      imageUrl: 'https://cdn.mixpwr.com/loyalty-draw/2021/06/02/QINIU60b74f8b4d7fd7.74224006.png'
    }
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <avatar />
        <Navigator url='plugin://myPlugin/list'>
          Go to pages/list!
        </Navigator>
      </View>
    )
  }
}
