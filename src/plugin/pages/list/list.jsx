import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { View,Button } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.scss'

export default class Index extends Component {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }

  componentDidMount() {
    console.log('Taro实例',Taro)
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  }


  onShareAppMessage(res) {
    console.log('onShareAppMessage',res)
    return {
      title: '享受会员福利，解锁品质生活',
      path: '/pages/index/index',
      imageUrl: ''
  }
  }

  render () {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
