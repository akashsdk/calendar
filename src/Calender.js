import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Img from "../image/background.png"
import img2 from "../image/images.png"
import { Calendar } from 'react-native-calendars';

export default function Calender() {
    const date=new Date()
    const [Selected,setSelected]=React.useState(new Date())
    const Months=['January','February','March','April','June','July','August','September','Octobor','November','December']
    const [Set,setSet]=React.useState([])
    return (
        <View style={styles.container}>
            <ImageBackground source={img2} style={{ width: '100%', height: 700 }}>
                <ImageBackground source={Img} style={{ width: '100%', height: 250, position: 'absolute', }} >
                    <View style={{ display: 'flex', flexDirection: 'row', padding: 50 }}>
                        <Text style={{ fontSize: 100, color: 'white', fontWeight: '100' }}>{Selected.getDate()}</Text>
                        <View style={{
                            height: 70,
                            width: 5,
                            backgroundColor: 'white',
                            opacity: .5,
                            marginTop: 25,
                            marginLeft: 40,
                        }}></View>
                        <View style={{ marginLeft: 40,marginTop:20 }}>
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: '100' }}>{Months[Selected.getMonth()-1]}</Text>
                            <Text style={{ fontSize: 25, color: 'white' ,}}>{Selected.getFullYear()}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
            <View style={{marginTop:-400, width:'100%',marginLeft:'30%'}}>
                <Calendar
                style={{
                    width:'70%'
                }}
                initialDate={Selected.toString()}
                    markedDates={{
                        '2022-09-10': { selected: true, marked: true, selectedColor: 'blue' },
                        '2022-09-11': { marked: true },
                        '2022-07-07': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2022-07-07': { disabled: true, disableTouchEvent: true }
                    }}
                    onDayPress={day => {
                        console.log('selected day', day);
                        setSelected(new Date(day.dateString))
                      }}
                      onMonthChange={month => {
                        console.log('month changed', month);
                        setSelected(new Date(month.dateString))
                      }}
                />
                <View style={{marginTop:100}}>
                    <Text style={{fontSize:25, opacity:.6}}>{Selected.getDate()+' '+Months[Selected.getMonth()-1]}</Text>
                    <Text>{Selected.getHours()} : {Selected.getMinutes()} - Developer Conterence</Text>
                    <Text style={{opacity:.6}}>Matro Hall</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageView: {

    },
});
