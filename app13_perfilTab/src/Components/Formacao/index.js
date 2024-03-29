import React from 'react'
import { View, Text } from 'react-native'
import style from '../Formacao/style'

export default Formacao = () => {
  return(
    <View style={style.phoneScreen}>
      <View style={style.card}>
        <Text style={style.titles}>Qualificação Profissional</Text>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>
          Graduação em Sistemas para Internet
        </Text>
        <Text style={style.txt}>Fatec Rubens Lara - 2019 até 2022</Text>
      </View>
    </View>
  )
}