import React, { Component, useState } from 'react'
import { 
  ScrollView,
  View, 
  Text, 
  StyleSheet,
  Dimensions, 
  Button,
  Image,
  Linking
} from 'react-native'

const appStyle = StyleSheet.create({
  phoneScreen: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    paddingLeft: 15, paddingRight: 15
  },
  profileCard: {
    width: (Dimensions.get('window').width - 30),
    minHeight: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    alignItems: 'center'
  },
  profileImg: {
    width: 230,
    height: 230,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: '#c7c7c7'
  },

  textsBox: { marginTop: 15 },
  nome: { fontSize: 32, fontWeight: 'bold' },
  login: { fontSize: 22, color: '#aeaeae' },
  bio: { marginTop: 10, fontSize: 16 },
  titles: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },

  card: {
    width: (Dimensions.get('window').width - 30),
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#cecece' /*transparent' */,
    borderRadius: 4,
    marginTop: 15
  },
  lastcard: {
    width: (Dimensions.get('window').width - 30),
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#cecece' /*transparent' */,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 25
  }
})

const Profile = (props) => {
  return(
    <View style={appStyle.profileCard}>
      <Image 
        style={appStyle.profileImg} 
        source={{uri: props.url}}
      />
      <View style={appStyle.textsBox}>
        <Text style={appStyle.nome}>{props.name}</Text>
        <Text style={appStyle.login}>{props.login}</Text>
        <Text style={appStyle.bio}>{props.bio}</Text>
        <Text 
          style={{ marginTop: 15, color: '#0071d3', fontSize: 18 }} 
          onPress={() => Linking.openURL(props.link)}>
          Veja meu perfil e projetos no Github
        </Text>
      </View>
    </View>
  )
}

const PerfonalData = (props) => {
  return(
    <View style={appStyle.card}>
      <Text style={appStyle.titles}>Dados Pessoais</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Nome:</Text> {props.name}</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Idade:</Text> {props.age} de idade</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Endereço:</Text> {props.adress}</Text>
    </View>
  )
}

const Qualification = () => {
  return(
    <View style={appStyle.card}>
      <Text style={appStyle.titles}>Qualificação Profissional</Text>
      <Text style={{ fontWeight: 'bold' }}>Graduação em Sistemas para Internet</Text>
      <Text>Fatec Rubens Lara - 2019 até 2022</Text>
    </View>
  )
}

const ProfessionalExperience = () => {
  return(
    <View style={appStyle.lastcard}>
      <Text style={appStyle.titles}>Experiência Profissional</Text>
      <Text>Webnets - Projeto: Aplicativo eOuve (2020 - 2021)</Text>
      <Text>Corebiz - Projeto: Compra Direta Empresas (2021 - 2022)</Text>
      <Text>GoPoints - Projeto: PromoPay (2022 - Atual)</Text>
    </View>
  )
}

const Screen = () => {
  return(
    <ScrollView style={appStyle.phoneScreen}>
       <Profile 
        url="https://avatars.githubusercontent.com/u/73594006"
        name="Caio Liste Pereira"
        login="listeSpecs"
        bio="Vivendo e recomendando para as pessoas animes de baixa qualidade."
        link='https://github.com/listeSpecs'
       />
       <PerfonalData 
        name='Caio Liste Pereira'
        age='27'
        adress='Santos - SP'
       />
       <Qualification/>
       <ProfessionalExperience/>
    </ScrollView>
  )
}

export default Screen