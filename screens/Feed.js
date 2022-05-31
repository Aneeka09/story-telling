import React, { Component } from 'react';
import { Text, View,StyleSheet,FlatList,SafeAreaView,Platform,StatusBar,Image } from 'react-native';
import AppLoading from "expo-app-loading";
import * as  Font from 'expo-font';
import {RFValue} from 'react-native-responsive-fontsize';
import StoryCard from "./storyCard";
 let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
  let stories= require("./tempStories.json");
export default class Feed extends Component {
    constructor(props){
       super(props)
       this.state={fontsLoaded:false}
    }
    componentDidMount(){
        this.loadFonts()
    }
    async loadFonts(){
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded:true})
    }
    renderItem=({item:story})=>{
        return <StoryCard story={story}/>
    }
    render() {
        if(!this.state.fontsLoaded){
            return(
                <AppLoading/>
            )
        }
        else{

        
        return (
            <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Storytelling App</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
<FlatList keyExtractor={(item,index)=>index.toString()} data={stories} renderItem={this.renderItem}> </FlatList>
          </View>
          </View>
        )
            }
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.93
    }
  });