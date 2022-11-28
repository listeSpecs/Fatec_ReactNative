import React from 'react'
import { 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Pressable, 
  Linking 
} from 'react-native'
import style from './style'

export default Pessoal = () => {
  const profile = {
    name: "Caio Liste",
    login: "listeSpecs",
    bio: "I don't know, just doing some fun things.",
    link: "https://github.com/listeSpecs"
  }
  return(
    <ScrollView style={style.phoneScreen}>
      <View style={style.profileCard}>
        <Image 
          style={style.profileImg} 
          source={require('./images/foto-perfil.jpeg')}
        />
        <View style={style.textsBox}>
          <Text style={style.nome}>{profile.name}</Text>
          <Text style={style.login}>{profile.login}</Text>
          <Text style={style.bio}>{profile.bio}</Text>
          <Pressable
            onPress={ () => { Linking.openURL(profile.link) }}
          >
            <Text style={style.txtBtn}>
              Veja meu perfil e projetos no Github
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}